# react-geomap

## About
react-geomap is a project, that shows GeoJSON data, and information about them on a map.

The project uses the Leaflet API as the base for the map, and OpenStreetMap as the tile layer for the map. 

## Current features
- Add new GeoJSON data
- Reset map to initial state
- Information popups for every GeoJSON data
## Getting Started
### Prerequisites
- npm 9.2.0

### Setup
1. Clone the repository

2. Navigate to the root directory and run the following command to install the reqiuired packages/dependencies
```sh
npm install
```

3. Run the project
```sh
npm run dev
```

The project will be hosted on http://localhost:5173/.

## Planned features
- Remove GeoJSON data - *in-progress*
- Add GeoJSON data by clicking on the map
- Move GeoJSON data
- Modify GeoJSON data
- Cluster markers when zooming out


## Limitations
- At the moment only Feature Objects can be added to the map.
