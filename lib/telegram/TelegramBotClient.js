import { UpstreamServiceError } from "lib/telegram/errors";

const TELEGRAM_API_BASE_URL = "https://api.telegram.org";

class TelegramBotClient {
  constructor({ botToken, baseUrl = TELEGRAM_API_BASE_URL, timeoutMs = 8000 }) {
    this.botToken = botToken;
    this.baseUrl = baseUrl;
    this.timeoutMs = timeoutMs;

  }

  async sendMessage({ chatId, text }) {
    return this.request("sendMessage", {
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    });
  }

  async getUpdates({ offset, limit = 100, timeoutSeconds = 0 } = {}) {
    const payload = {
      limit,
      timeout: timeoutSeconds,
      allowed_updates: ["message", "edited_message"],
    };

    if (typeof offset === "number") {
      payload.offset = offset;
    }

    return this.request("getUpdates", payload);
  }

  async request(method, payload) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const endpoint = `${this.baseUrl}/bot${this.botToken}/${method}`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      const result = await response.json();
      if (!response.ok || !result?.ok) {
        throw new UpstreamServiceError(
          result?.description || "Telegram API rejected the request.",
          { code: "TELEGRAM_API_ERROR" }
        );
      }
      
      return result?.result;
    } catch (error) {
      if (error?.name === "AbortError") {
        throw new UpstreamServiceError(`Telegram API request timed out (${method}).`, {
          code: "TELEGRAM_TIMEOUT",
        });
      }

      if (error instanceof UpstreamServiceError) {
        throw error;
      }

      throw new UpstreamServiceError(`Unable to reach Telegram API (${method}).`, {
        code: "TELEGRAM_NETWORK_ERROR",
      });
    } finally {
      clearTimeout(timeoutId);
    }
  }
}

export default TelegramBotClient;