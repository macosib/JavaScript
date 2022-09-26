export default class Validator {
  constructor() {
    this.reCharacter = /^[\w-]+$/gm;
    this.reCountDigit = /\d{4,}/;
  }

  validateUsername(userName) {
    return this.reCharacter.test(userName) && !this.reCountDigit.test(userName);
  }
}
