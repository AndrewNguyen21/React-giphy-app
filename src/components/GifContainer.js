import React, { Component } from "react";
import GifCard from "./GifCard";
import Notfound from "./Notfound";

class GifContainer extends Component {
  getData = () => {
    const results = this.props.gif;
    let data;

    if (this.props.rand !== "") {
      data = <GifCard url={this.props.rand} key={1} />;
      return data;
    }

    if (results.length > 0) {
      data = results.map((gif) => {
        return <GifCard url={gif.images.fixed_height.url} key={gif.id} />;
      });
    } else {
      data = <Notfound />;
    }
    return data;
  };

  render() {
    return <div id="gifContainer">{this.getData()}</div>;
  }
}

export default GifContainer;
