import React from 'react';
import { RoomContext } from '../context';

class FeaturedRooms extends React.Component {
  static contextType = RoomContext;
  render() {
    console.log(this.contextType);
    const value = this.context;
    console.log(value);
    return <div>FeaturedRooms</div>;
  }
}

export default FeaturedRooms;
