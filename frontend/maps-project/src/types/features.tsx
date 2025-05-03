interface Point {
    coordinates: [number, number]; // [lng, lat]
  }
  
  interface LineString {
    coordinates: [ [number, number] ]; // list of points
  }
  
  interface Polygon {
    coordinates: [ [ [number, number] ] ]; // list of linear rings
  }