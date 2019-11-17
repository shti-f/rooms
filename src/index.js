import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Room from './organisms/Room'

class Page extends React.Component {
  constructor(props){
    super(props);

    const rooms = []
    for(let i = 0; i < 5; i++){
      rooms.push({color: null})
    }

    this.state = {
      rooms: rooms,
      address: 0,
    }
  }

  handleMove(dir) {
    let address = this.state.address
    if(dir === "forward"){
      if(address === this.state.rooms.length - 1){
        console.log("end of rooms")
      } else {
        address += 1
      }
    } else if (dir === "previous"){
      if(address === 0){
        console.log("start of rooms")
      } else {
        address -= 1
      }
    }
    console.log(dir, address)
    this.setState({
      address: address
    })
  }

  handleCreate(address){
    let rooms = this.state.rooms.slice()
    rooms[address].color = pickColor()
    this.setState({
      rooms: rooms,
      address: address
    })
  }

  render() {
    const currentRoom = this.state.rooms[this.state.address]
    console.log("render", currentRoom)
    return (
      <div>
        <Room
          roomInfo={currentRoom}
          onClickToMove={(args) => this.handleMove(args)}
          onClickToCreate={() => this.handleCreate(this.state.address)}
        />
      </div>
    )
  }
}

const pickColor = ColorPicker()
function ColorPicker(){
  const colors = ["red", "blue", "green", "yellow"]
  let index = 0
  return () => {
    index = index ? index - 1 : colors.length - 1
    return colors[index]
  }
}
// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
