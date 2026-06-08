class AppError extends Error {
  constructor(message, { statusCode = 500, code = "INTERNAL_ERROR" } = {}) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, { statusCode: 400, code: "VALIDATION_ERROR" });
  }
}

class ConfigurationError extends AppError {
  constructor(message) {
    super(message, { statusCode: 500, code: "CONFIGURATION_ERROR" });
  }
}

class UpstreamServiceError extends AppError {
  constructor(message, { statusCode = 502, code = "UPSTREAM_SERVICE_ERROR" } = {}) {
    super(message, { statusCode, code });
  }
}

export {
  AppError,
  ValidationError,
  ConfigurationError,
  UpstreamServiceError,
};