import westYoda from '../assets/'
import eastYoda from '../assets/east.png'
import northYoda from '../assets/north.png'
import southYoda from '../assets/south.png'


const west = <img src={westYoda} alt="Logo" style={{ height: "110px", width: "110px" }} />
const east = <img src={eastYoda} alt="east" style={{ height: "110px", width: "110px" }} />
const north = <img src={northYoda} alt="north" style={{ height: "110px", width: "110px" }} />
const south = <img src={southYoda} alt="Logo" style={{ height: "110px", width: "110px" }} />


export default {
  west,
  east,
  north,
  south
}