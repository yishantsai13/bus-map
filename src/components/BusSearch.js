import { useState } from 'react';
// components
import CitySelector from "./CitySelector"
import SearchInput from './SearchInput'
import BusSearchList from './BusSearchList'
import BusCard from './BusCard'
import HistoryBusCardList from './HistoryCardList'

export default function BusSearch(props) {
  const [selectedCity, setSelectCity] = useState('Taipei')
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="bg-primary-dark-light px-5 pt-5 space-y-5 flex flex-col">
      <CitySelector
        value={selectedCity}
        selectCity={(event) => setSelectCity(event.target.value)}
      ></CitySelector>
      <SearchInput
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></SearchInput>
      <BusSearchList></BusSearchList>
      <BusCard></BusCard>
      <HistoryBusCardList></HistoryBusCardList>
    </div>
  )
}