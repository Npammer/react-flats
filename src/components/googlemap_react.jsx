/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { googleApi } from "/Users/nikolai/code/Projects/react-flats/api/api";
import Marker from "./marker";

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.856613,
      lng: 2.352222,
    },
    zoom: 13,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { lat, lng, center, zoom } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleApi }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
