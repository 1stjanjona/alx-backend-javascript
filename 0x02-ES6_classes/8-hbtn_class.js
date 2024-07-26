export default class HolbertonClass {
  constructor(size, location) {
    this._size = this._validateNumber(size, 'Size');
    this._location = this._validateString(location, 'Location');
  }

  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = this._validateNumber(value, 'Size');
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = this._validateString(value, 'Location');
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
