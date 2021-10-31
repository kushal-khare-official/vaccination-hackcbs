import React from "react";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  Polygon,
  Circle,
} from "google-maps-react";

export const MapContainer = (props) => {
  console.log(props);
  let lat = "27.1033688";
  let lng = "79.0522264";

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: "60vh",
  };

  const mapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8ec3b9",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1a3646",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#64779e",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#4b6878",
        },
      ],
    },
    {
      featureType: "landscape.man_made",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#334e87",
        },
      ],
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6f9ba5",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3C7680",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#304a7d",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#2c6675",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#9d2a80",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#9d2a80",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#b0d5ce",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#023e58",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#98a5be",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1d2c4d",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#283d6a",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#3a4762",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#0e1626",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#4e6d70",
        },
      ],
    },
  ];

  const _mapLoaded = (mapProps, map) => {
    map.setOptions({
      styles: mapStyle,
    });
  };

  return (
    <Map
      google={window.google}
      containerStyle={containerStyle}
      zoom={7}
      initialCenter={{ lat, lng }}
      onReady={(mapProps, map) => _mapLoaded(mapProps, map)}
    >
      {props.users &&
        props.users.map((user, i) => (
          <Marker
            key={i}
            title={"Homebound User"}
            name={"HU"}
            position={user}
            icon={{
              url: "https://ik.imagekit.io/kushal/Vaccination/836767_Ms70GxmIh.png?updatedAt=1635667858529",
              anchor: new window.google.maps.Point(32, 32),
              scaledSize: new window.google.maps.Size(64, 64),
            }}
          />
        ))}
      {props.hospitals &&
        props.hospitals.map((hospital, i) => (
          <Marker
            key={i}
            title={"Hospital"}
            name={"H"}
            position={hospital}
            icon={{
              url: "https://ik.imagekit.io/kushal/Vaccination/hospital__jcugoBy0kA.png?updatedAt=1635667522447",
              anchor: new window.google.maps.Point(32, 32),
              scaledSize: new window.google.maps.Size(64, 64),
            }}
          />
        ))}
      {props.coordinates &&
        props.coordinates.map((coordinate, i) => (
          <Polygon
            key={i}
            paths={coordinate}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}
          />
        ))}
      {props.clusters &&
        props.clusters.map((cluster, i) => (
          <Circle
            key={i}
            radius={1200}
            center={cluster}
            strokeColor="transparent"
            strokeOpacity={0}
            strokeWeight={5}
            fillColor="#FF0000"
            fillOpacity={0.2}
          />
        ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_API_KEY,
})(MapContainer);
