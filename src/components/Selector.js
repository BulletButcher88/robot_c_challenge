import React, { useState, useEffect } from 'react'

const Selector = ({ setGetPosition }) => {
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

    setGetPosition(positionX + "|" + positionY)

  }, [positionX, positionY])


  return (
    <form >
      <label>
        Place : x
        <select value={positionX} onChange={handleChangeX}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select> y
        <select value={positionY} onChange={handleChangeY}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>s
    </form>
  );
}

export default Selector;