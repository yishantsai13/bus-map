import { cityList } from "../services/CityData";
import arrowDownImg from "../images/arrow_down.svg"
export default function CitySelector(props) {
  const { value, selectCity } = props
  const options = Object.keys(cityList).map(city => {
    return (
      <option value={city}>{cityList[city].name}</option>
    )
  })

  const downArrowStyle = {
    backgroundImage: `url(${arrowDownImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right .75rem center'
  }
  return (
    <select value={value} onChange={selectCity} className="block rounded-lg bg-white py-2 pl-4 pr-20 appearance-none text-ss w-max" style={downArrowStyle}>
      {options}
    </select>
  )
}