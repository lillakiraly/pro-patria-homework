# react-geomap

## About
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

**react-geomap** is a project, that shows GeoJSON data, and information about them on a map.

The project uses the Leaflet API as the base for the map, and OpenStreetMap as the tile layer for the map. 

<img src="https://i.imgur.com/ySL06GM.png" width="400px" height="400px"/>

## Current features
- Add new GeoJSON data
- Reset map to initial state
- Information popups for every GeoJSON data
## Getting Started
### Prerequisites
- npm 9.2.0

### Setup
1. Clone the repository

2. Navigate to the root directory and run the following command to install the required packages/dependencies
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
- At the moment, Feature and FeatureCollection Objects can be added to the map.

## Helpful Links
- GeoJSON: https://geojson.org/ 
- GeoJSON Feature Object: https://www.rfc-editor.org/rfc/rfc7946#section-3.2 
- GeoJSON FeatureCollection Object: https://www.rfc-editor.org/rfc/rfc7946#section-3.3

