export default class CurrentLocation {
  constructor() {
    this._name = "Current Location";
    this._lat = null;
    this._lon = null;
    this._unit = "imperial";
  }

  //   >>> Note about underscore:
  //   The underscore before property names (e.g., _name, _lat) is a convention
  //   to indicate that these properties are intended to be private or internal
  //   to the class. Although JavaScript doesn't enforce true privacy, this
  //   convention signals to other developers that these properties should
  //   not be accessed directly from outside the class. Instead, getter
  //   and setter methods (like getName() and setName()) should be used.

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getLat() {
    return this._lat;
  }

  setLat(lat) {
    this._lat = lat;
  }

  getLon() {
    return this._lon;
  }

  setLon(lon) {
    this._lon = lon;
  }

  getUnit() {
    return this._unit;
  }

  setUnit(unit) {
    this._unit = unit;
  }

  toggleUnit() {
    this._unit = this._unit === "imperial" ? "metric" : "imperial";
  }
}
