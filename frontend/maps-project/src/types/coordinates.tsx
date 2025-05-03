/**
 * This interface contains data for lat / long coordinates on the map.
 * It is used to represent a point on the Earth's surface.
 * The latitude and longitude are in degrees.
 */
interface geoCoordinates {
  latitude: number; // latitude in degrees
  longitude: number; // longitude in degrees
  altitude?: number; // altitude in meters
}

/**
 * This interface contains data for screen coordinates on the map.
 * It is used to represent a point on the screen.
 */
interface screenCoordinates {
  x: number; // relative to canvas
  y: number;
}

/**
 * This interface contains data for a point on the map.
 * It is used to represent a point in the map's coordinate system.
 * The x and y coordinates are in pixels, with the origin (0, 0) at the top left corner of the map.
 */
interface pixelCoordinates {
  mapOriginOffset: number;
  x: number;
  y: number;
  z: number; // zoom level
}

/**
 * The interface contains data for tile coordiantes on the map.
 * It is used to represent a tile in the map's coordinate system.
 * The x and y coordinates are in tiles, with the origin (0, 0) at the top left corner of the map.
 */
interface tileCoordinates {
  tileSize: number; // tile size in pixels (256px)
  x: number; // tile x coordinate
  y: number; // tile y coordinate
  z: number; // zoom level
}

export type { geoCoordinates, pixelCoordinates, tileCoordinates, screenCoordinates };
