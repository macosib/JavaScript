export default class ArrayBufferConverter {
  constructor() {
    this.data = null;
  }

  load(buffer) {
    this.data = new Uint16Array(buffer);
  }

  toString() {
    return String.fromCharCode.apply(null, this.data);
  }
}
