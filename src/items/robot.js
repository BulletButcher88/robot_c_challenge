import westFace from '../assets/west.png'
import eastFace from '../assets/east.png'
import northFace from '../assets/north.png'
import southFace from '../assets/south.png'


const west = <img src={westFace} alt="Logo" style={{ height: "110px", width: "110px" }} />
const east = <img src={eastFace} alt="east" style={{ height: "110px", width: "110px" }} />
const north = <img src={northFace} alt="north" style={{ height: "110px", width: "110px" }} />
const south = <img src={southFace} alt="Logo" style={{ height: "110px", width: "110px" }} />


export default {
  west,
  east,
  north,
  south
}