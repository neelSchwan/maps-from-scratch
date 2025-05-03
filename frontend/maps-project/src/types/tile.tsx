import { tileCoordinates } from "./coordinates";

interface tile {
  tileCoordinates: tileCoordinates; // tile coordinates
  geoBounds: {
    // geographical bounds of the tile
    // northEast and southWest are the corners of the tile
    // in geographical coordinates (latitude and longitude)
    northEast: {
      latitude: number;
      longitude: number;
    };
    southWest: {
      latitude: number;
      longitude: number;
    };
  };
  pixelBounds: {
    // pixel bounds of the tile
    // northEast and southWest are the corners of the tile
    // in pixel coordinates (x and y)
    northEast: {
      x: number;
      y: number;
    };
    southWest: {
      x: number;
      y: number;
    };
  };
  tileData: {
    vectorData: any; // vector data for the tile
    features: any;
  };
  loaded: boolean; // whether the tile is loaded or not
  timestamp: number; // cache invalidation timestamp
}
