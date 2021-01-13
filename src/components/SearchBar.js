import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
    isEmpty: true,
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.search === "") {
      this.setState({ isEmpty: true });
      this.props.getGifData(this.state.search);
    } else {
      this.setState({ isEmpty: false });
      this.props.getGifData(this.state.search, 0);
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, isEmpty: false });
  };

  render() {
    return (
      <div id="searchBar">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.onChange}
            placeholder={this.state.isEmpty ? "Search..." : this.state.search}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
