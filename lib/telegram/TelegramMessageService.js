import { ValidationError } from "lib/telegram/errors";

const MAX_MESSAGE_LENGTH = 1000;
let pollingLock = Promise.resolve();

function withPollingLock(task) {
  const run = async () => task();
  const next = pollingLock.then(run, run);
  pollingLock = next.catch(() => {});
  return next;
}

class TelegramMessageService {
  constructor({ telegramClient, defaultChatId }) {
    this.telegramClient = telegramClient;
    this.defaultChatId = defaultChatId;
  }

  async send({
    message,
    sessionId,
    waitForReply = false,
    replyTimeoutMs = 30000,
    lastUpdateId,
  }) {
    const normalizedMessage = this.validateMessage(message);
    const normalizedSessionId = this.normalizeValue(sessionId, "unknown");

    const result = await this.telegramClient.sendMessage({
      chatId: this.defaultChatId,
      text: normalizedMessage,
    });

    const messageId = result?.message_id;
    if (!messageId) {
      throw new ValidationError("Failed to send message: missing message ID in response.");
    }

    let reply = null;
    let nextUpdateId = lastUpdateId;

    if (waitForReply) {
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Brief pause to ensure Telegram has processed the sent message before we start polling for replies.

      const replyResult = await this.getReplyByMessageId({
        messageId,
        timeoutMs: replyTimeoutMs,
        lastUpdateId,
      });
      reply = replyResult.reply;
      nextUpdateId = replyResult.nextUpdateId;
    }

    return {
      messageId: result?.message_id,
      sessionId: normalizedSessionId,
      reply,
      nextUpdateId,
    };
  }

  async getReplyByMessageId({
    messageId,
    chatId = this.defaultChatId,
    timeoutMs = 30000,
    lastUpdateId,
  }) {
    const normalizedMessageId = this.validateMessageId(messageId);
    const chatIdAsText = String(chatId);
    const deadline = Date.now() + Math.max(1000, Number(timeoutMs) || 30000);
    let nextUpdateId = Number.isInteger(lastUpdateId) ? lastUpdateId : undefined;
    

    return {
      reply: null,
      nextUpdateId,
    };
  }

  extractReplyMessage(update, expectedMessageId, expectedChatId) {
    const message = update?.message || update?.edited_message;
    if (!message) {
      return null;
    }

    const repliedMessageId = message?.reply_to_message?.message_id;
    if (repliedMessageId !== expectedMessageId) {
      return null;
    }

    if (String(message?.chat?.id) !== expectedChatId) {
      return null;
    }

    return {
      messageId: message?.message_id,
      text: message?.text || "",
      date: message?.date || null,
      from: {
        id: message?.from?.id || null,
        username: message?.from?.username || null,
        firstName: message?.from?.first_name || null,
        lastName: message?.from?.last_name || null,
        isBot: Boolean(message?.from?.is_bot),
      },
      raw: message,
    };
  }

  validateMessageId(messageId) {
    const asNumber = Number(messageId);
    if (!Number.isInteger(asNumber) || asNumber <= 0) {
      throw new ValidationError("messageId must be a positive integer.");
    }

    return asNumber;
  }

  validateMessage(message) {
    if (typeof message !== "string") {
      throw new ValidationError("Message must be a string.");
    }

    const trimmed = message.trim();
    if (!trimmed) {
      throw new ValidationError("Message cannot be empty.");
    }

    if (trimmed.length > MAX_MESSAGE_LENGTH) {
      throw new ValidationError(
        `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`
      );
    }

    return trimmed;
  }

  normalizeValue(value, fallback) {
    if (typeof value !== "string") {
      return fallback;
    }

    const trimmed = value.trim();
    return trimmed || fallback;
  }
}

export default TelegramMessageService;