function Airport(){
  this._capacity = 2
  this._planes = []
}

Airport.prototype.capacity = function(){
  return this._capacity
}

Airport.prototype.planes = function(){
  return this._planes
}

Airport.prototype.land = function(plane){
  this._planes.push(plane)
}

Airport.prototype.takeoff = function(id){
  var myArray = this.planes()
  var index = myArray.indexOf(id)
  myArray.splice(index, 1)
  this._planes = myArray
}
