export default class Airport {

  constructor(name, code) {
    this._name = this._validateString(name, 'Name');
    this._code = this._validateString(code, 'Code');
  }

  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateString(value, 'Name');
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this._validateString(value, 'Code');
  }

  toString() {
    return this._code;
  }
}
