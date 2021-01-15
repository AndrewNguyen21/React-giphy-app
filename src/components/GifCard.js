import React, { Component } from "react";

class GifCard extends Component {
  render() {
    return <img src={this.props.url} alt="gif" />;
  }
}

export default GifCard;
