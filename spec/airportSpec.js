describe('Airport', function(){
  it('has a capacity', function(){
    var myAirport = new Airport()
    expect(myAirport.capacity()).toEqual(2)
  })
  it('has an array of planes', function(){
    var myAirport = new Airport()
    expect(myAirport.planes()).toEqual([])
  })
  it('can receive planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    myAirport.land(myPlane)
    expect(myAirport.planes()).toContain(myPlane)
  })
  it('can takeoff planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    myAirport.land(myPlane.id())
    myAirport.takeoff(myPlane.id())
    expect(myAirport.planes()).toEqual([]);
  })
  it('can takeoff planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    var otherPlane = new Plane(2)
    var anotherPlane = new Plane(3)
    myAirport.land(myPlane.id())
    myAirport.land(otherPlane.id())
    myAirport.land(anotherPlane.id())
    myAirport.takeoff(otherPlane.id())
    myAirport.takeoff(myPlane.id())
    expect(myAirport.planes()).toEqual([anotherPlane.id()]);
  })
  it('can takeoff planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    var otherPlane = new Plane(2)
    var anotherPlane = new Plane(3)
    myAirport.land(myPlane.id())
    myAirport.land(otherPlane.id())
    myAirport.land(anotherPlane.id())
    myAirport.takeoff(anotherPlane.id())
    myAirport.takeoff(myPlane.id())
    expect(myAirport.planes()).toEqual([otherPlane.id()]);
  })
  it('can takeoff planes', function(){
    var myAirport = new Airport()
    var myPlane = new Plane(1)
    var otherPlane = new Plane(2)
    var anotherPlane = new Plane(3)
    myAirport.land(myPlane.id())
    myAirport.land(otherPlane.id())
    myAirport.land(anotherPlane.id())
    myAirport.takeoff(myPlane.id())
    expect(myAirport.planes()).toEqual([otherPlane.id(), anotherPlane.id()]);
  })
})
