import React, { useState, useEffect } from 'react'

const Selector = ({ setGetPosition, getposition }) => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleChangeX = (e) => {
    e.preventDefault();
    setPositionX(e.target.value)
  }
  const handleChangeY = (e) => {
    e.preventDefault();
    setPositionY(e.target.value)
  }
  useEffect(() => {
    setGetPosition(positionX + "," + positionY)
  }, [positionX, positionY])

  useEffect(() => {
    if (getposition) {
      const pos = getposition.split(",");
      const x = Number(pos[0])
      setPositionX(x)
      const y = Number(pos[1])
      setPositionY(y)
    }
  }, [getposition])

  return (
    <form style={{ flex: 1, justifyContent: 'center' }} >
      <label style={{
        margin: 20,
        color: "#ddd",
        fontSize: 24,
        width: 80,
        borderRadius: 5,
        fontWeight: '600'
      }}>
        Place : y
        <select value={positionX} onChange={handleChangeX} style={{
          margin: 10, width: 35, height: 30, fontSize: 14,
        }}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select> x
        <select value={positionY} onChange={handleChangeY} style={{
          margin: 10, width: 35, height: 30, fontSize: 14,
        }}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
    </form>
  );
}

export default Selector;