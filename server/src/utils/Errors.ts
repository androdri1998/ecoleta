import httpStatusCode from "http-status-codes";

export class CustomConflictError extends Error {
  private status: number;
  constructor(message = "Item already created") {
    super(message);
    this.name = "Conflict error";
    this.message = message;
    this.status = httpStatusCode.CONFLICT;
  }
}

export class CustomBadRequestError extends Error {
  private status: number;
  constructor(message = "Error in parameters") {
    super(message);
    this.name = "BadRequest error";
    this.message = message;
    this.status = httpStatusCode.BAD_REQUEST;
  }
}

export class CustomUnauthorizedError extends Error {
  private status: number;
  constructor(message = "Unauthorized") {
    super(message);
    this.name = "Unauthorized error";
    this.message = message;
    this.status = httpStatusCode.UNAUTHORIZED;
  }
}

export class CustomNotFoundError extends Error {
  private status: number;
  constructor(message = "Not found") {
    super(message);
    this.name = "Not Found error";
    this.message = message;
    this.status = httpStatusCode.NOT_FOUND;
  }
}
