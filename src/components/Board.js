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

  // creating 5 x 5 map
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
      map[x][y] = x + ',' + y;
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
    const pos = getposition.split(",");
    const x = Number(pos[0])
    const y = Number(pos[1])
    switch (facing) {
      case 'north':
        if (x > 3) {
          setGetPosition(`${x},${y}`)
        } else {
          setGetPosition(`${x + 1},${y}`)
        }
        return
      case 'east':
        if (y > 3) {
          setGetPosition(`${x},${y}`)
        } else {
          setGetPosition(`${x},${y + 1}`)
        }
        return
      case 'south':
        if (x < 1) {
          setGetPosition(`${x},${y}`)
        } else {
          setGetPosition(`${x - 1},${y}`)
        }
        return
      case 'west':
        if (y < 1) {
          setGetPosition(`${x},${y}`)
        } else {
          setGetPosition(`${x},${y - 1}`)
        }
        return
      default:
        return
    }
  }


  useEffect(() => {

    setRepart('')
  }, [getposition])


  const hnadleReport = () => {
    setRepart(getposition)
  }


  const cells = board.map((obj, key) =>
    obj.map((obj, key2) =>
      <div style={{ backgroundColor: `${color[(key + key2) % 2]}`, height: '100%', justifyContent: 'center', alignItems: 'center' }}
        className="item" key={obj}>
        {obj === report ?
          <div style={{ width: 90, height: 20, position: 'absolute', backgroundColor: "white", margin: -30, borderRadius: 20, textAlign: 'center', padding: 5 }}>{
            report + ', ' + facing.toUpperCase()}</div>
          : null}
        <h6 style={{ margin: '0', position: 'absolute', color: 'white' }}>
        </h6>
        {obj === getposition ? renderFacing() : null}
      </div>
    )
  )

  const inputOutput = () => {
    return (
      <div style={{
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        minWidth: 270,
        maxWidth: 300,
        margin: 20,
        height: 500,
        width: 300,
        color: "#dddddd",
        fontSize: 24,
      }}>
        <h2
          style={{ fontSize: 28, color: "#dddddd" }}
        >Toy Robot Simulators
        </h2>

        <Selector setGetPosition={setGetPosition} getposition={getposition} />
        <div style={{
          flex: 1,
        }}>
          <button style={{
            marginTop: 30,
            fontSize: 18,
            color: "#666",
            width: 60
          }} onClick={() => { setFacing('north') }}>Up</button>
        </div>
        <div style={{ flex: 1, margin: '5%' }}>
          <button style={{
            fontSize: 18,
            color: "#666",
            width: 60
          }} onClick={() => { setFacing('west') }}>Left</button>
          <button style={{ marginLeft: 10, fontSize: 18, color: "#666", width: 60 }} onClick={() => { setFacing('east') }}>Right</button>
        </div>
        <div style={{ flex: 1 }}>
          <button style={{
            fontSize: 18, color: "#666", width: 60
          }} onClick={() => { setFacing('south') }}>Down</button>
        </div>
        <div style={{ flex: 1 }}>
          <button style={{
            marginTop: 60,
            fontSize: 24,
            color: "#fff",
            width: 80,
            borderRadius: 5,
            backgroundColor: 'grey'
          }} onClick={handleMove}>Move</button>
        </div>
        <button style={{
          marginTop: 60,
          fontSize: 24,
          width: 100,
          color: "#fff",
          textAlign: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          backgroundColor: 'grey'
        }} onClick={hnadleReport}>Report</button>
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