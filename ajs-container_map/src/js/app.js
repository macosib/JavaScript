export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  translate(code) {
    const translate = this.errors.get(code)
      ? this.errors.get(code)
      : 'Unknown error';
    return translate;
  }
}
