export interface Memory {
  id: string;
  locationName: string;
  lat: number;
  lng: number;
  reflection: string;
  timestamp: number; // Start Date
  endDate?: number;  // Optional End Date
}

export interface GlobeCoordinates {
  lat: number;
  lng: number;
}
