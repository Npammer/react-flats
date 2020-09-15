import React, { Component } from "react";

class Flat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    this.props.updateMap(this.props.lat, this.props.lng);
  };

  render() {
    const { price, priceCurrency, imageUrl, name, link = "#" } = this.props;

    return (
      <div
        className="card"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${imageUrl}')`,
        }}
        onClick={this.handleClick}
      >
        <div className="card-category">{`${price} ${priceCurrency}`}</div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
        <a className="card-link" href={link}></a>
      </div>
    );
  }
}

export default Flat;
