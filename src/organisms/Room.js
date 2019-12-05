import React from 'react';
import { ArrowButton, CreateButton } from '../atoms/buttons';
import Location from '../atoms/Location';

export default class Room extends React.Component {
  render() {
    const roomInfo = this.props.roomInfo
    const roomNumber = this.props.roomNumber
    console.log(roomInfo)
    return (
      <div className={roomInfo.color || "empty"}>
        <ArrowButton
          value="previous"
          onClick={() => this.props.onClickToMove("previous")}
        />
        <CreateButton
          onClick={() => this.props.onClickToCreate()}
        />
        <ArrowButton
          value="forward"
          onClick={() => this.props.onClickToMove("forward")}
        />
        <Location
          value={roomNumber}
        />
      </div>
    );
  }
}