export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot instantiate abstract class Building directly');
    }
    this._sqft = this._validateNumber(sqft, 'Square feet');
  }

  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
