import React, { useState, useEffect } from 'react'
import { robot } from '../items/index'
import Selector from './Selector'

import './Background.css'


const Board = () => {
  const [facing, setFacing] = useState('north')
  const [getposition, setGetPosition] = useState()
  const [board, setBoard] = useState([])
  const [report, setRepart] = useState('');

  const color = ["#aaa", "#ddd"]

  // create 5 x 5 board
  useEffect(() => {
    let map = [];
    const createMap = (rowCount, columnCount) => {
      for (let x = 0; x < rowCount; x++) {
        for (let y = 0; y < columnCount; y++) {
          addCell(x, y);
        }
      }
    }

    const addCell = (x, y) => {
      map[x] = map[x] || [];
      map[x][y] = x + '|' + y;
    }

    createMap(5, 5);
    setBoard(map.reverse())
  }, [])

  const renderFacing = () => {
    switch (facing) {
      case 'north':
        return robot.north
      case 'east':
        return robot.east
      case 'south':
        return robot.south
      case 'west':
        return robot.west
      default:
        return
    }
  }

  const handleMove = () => {
    const pos = getposition.split("|");
    const x = Number(pos[0])
    const y = Number(pos[1])
    switch (facing) {
      case 'north':
        if (x > 3) {
          setGetPosition(`${x}|${y}`)
        } else {
          setGetPosition(`${x + 1}|${y}`)
        }
        return
      case 'east':
        if (y > 3) {
          setGetPosition(`${x}|${y}`)
        } else {
          setGetPosition(`${x}|${y + 1}`)
        }
        return
      case 'south':
        if (x < 1) {
          setGetPosition(`${x}|${y}`)
        } else {
          setGetPosition(`${x - 1}|${y}`)
        }
        return
      case 'west':
        if (y < 1) {
          setGetPosition(`${x}|${y}`)
        } else {
          setGetPosition(`${x}|${y - 1}`)
        }
        return
      default:
        return
    }
  }



  const cells = board.map((obj, key) =>
    obj.map((obj, key2) =>
      <div style={{ backgroundColor: `${color[(key + key2) % 2]}`, height: '100%', justifyContent: 'center', alignItems: 'center' }}
        className="item" key={obj}>
        <h6 style={{ margin: '0', position: 'absolute', color: 'white' }}>
          {obj}
        </h6>
        {obj === getposition ? renderFacing() : null}
      </div>
    )
  )

  const inputOutput = () => {
    return (
      <div style={{ flexDirection: 'row', flex: 1 }}>
        <label
          style={{ margin: 20, fontSize: 24, color: "#dddddd" }}
        >Enter in command:
        </label>
        <div style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: "100%",
          height: "80%",
          marginLeft: 20,
          backgroundColor: '#333',
          maxWidth: 300,
          minWidth: 200
        }}>
          <form>
          </form>
          <div style={{ marginLeft: 20, fontSize: 24, color: "#aaa" }}>
            <Selector setGetPosition={setGetPosition} />
            <div style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}>
              <button style={{ margin: 10, fontSize: 24, color: "#aaa" }} onClick={() => { setFacing('north') }}>NORTH</button>
            </div>
            <div style={{ flex: 1 }}>
              <button style={{ margin: 10, fontSize: 24, color: "#aaa" }} onClick={() => { setFacing('west') }}>WEST</button>
              <button style={{ margin: 10, fontSize: 24, color: "#aaa" }} onClick={() => { setFacing('east') }}>EAST</button>
            </div>
            <div style={{ flex: 1 }}>
              <button style={{ margin: 10, fontSize: 24, color: "#aaa" }} onClick={() => { setFacing('south') }}>SOUTH</button>
            </div>
            <div style={{ flex: 1 }}>
              <button style={{ margin: 10, fontSize: 24, color: "#aaa" }} onClick={handleMove}>MOVE</button>
              /              {report}
            </div>
          </div>
        </div>
      </div>

    )
  }

  return (
    <>
      {inputOutput()}
      <div
        style={{ margin: 20 }}
        className='board'>
        {cells}
      </div>
    </>
  )
}

export default Board; 