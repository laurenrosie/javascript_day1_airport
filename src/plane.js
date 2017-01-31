function Plane(id) {
  this._id = id;
  this._state = 'Flying';
}

Plane.prototype.state = function() {
  return this._state;
}

Plane.prototype.id = function() {
  return this._id;
}

Plane.prototype.newState = function(string) {
  this._state = string;
}
