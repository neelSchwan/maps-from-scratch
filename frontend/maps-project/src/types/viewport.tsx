import { geoCoordinates } from "./coordinates";

/**
 * This interface contains data for the viewport of the map.
 * It is used to represent the current view of the map.
 */
interface Viewport {
  center: geoCoordinates; // center of the viewport
  zoom: number;
  width: number;
  height: number;
  bearing: number;
  pitch: number;
}

export type { Viewport };
