import TelegramBotClient from "lib/telegram/TelegramBotClient";
import TelegramMessageService from "lib/telegram/TelegramMessageService";
import { ConfigurationError } from "lib/telegram/errors";

function createTelegramMessageServiceFromEnv(env = process.env) {
  const botToken = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;
  const baseUrl = env.TELEGRAM_API_BASE_URL;
  const timeoutMs = Number(env.TELEGRAM_TIMEOUT_MS || 8000);

  if (!botToken) {
    throw new ConfigurationError("Missing TELEGRAM_BOT_TOKEN environment variable.");
  }

  if (!chatId) {
    throw new ConfigurationError("Missing TELEGRAM_CHAT_ID environment variable.");
  }

  const telegramClient = new TelegramBotClient({
    botToken,
    baseUrl,
    timeoutMs,
  });

  return new TelegramMessageService({
    telegramClient,
    defaultChatId: chatId,
  });
}

export { createTelegramMessageServiceFromEnv };