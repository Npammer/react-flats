import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" className="marker" />
    );
  }
}

export default Marker;
