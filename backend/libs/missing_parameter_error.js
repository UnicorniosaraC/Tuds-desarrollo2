export class MissingParameterError extends Error {
  constructor(paramName) {
    super(`Falta el parámetro: ${paramName}`);
    this.paramName = paramName;
  }
}