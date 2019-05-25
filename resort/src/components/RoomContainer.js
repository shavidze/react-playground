import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';
const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      RoomContainer
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
};
export default withRoomConsumer(RoomContainer);
