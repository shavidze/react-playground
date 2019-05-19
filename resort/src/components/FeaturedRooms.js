import React, { Component } from "react";
import { RoomContext } from "../context";
class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    console.log(this.contextType);
    const value = this.context;
    console.log(value);
    return <div>FeaturedRooms</div>;
  }
}

export default FeaturedRooms;
