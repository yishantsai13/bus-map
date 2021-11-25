import { useState } from 'react';
// components
import CitySelector from "./CitySelector"

export default function BusSearch(props) {
  const [selectedCity, setSelectCity] = useState('Taipei')
  function selectCity(event) {
    setSelectCity(event.target.value)
  }
  return (
    <div>
      <CitySelector
        value={selectedCity}
        selectCity={(event) => selectCity(event)}
      ></CitySelector>
    </div>
  )
}