import { useState } from 'react';
import { useNavigate } from "react-router-dom";
// components
import CitySelector from "./CitySelector"
import SearchInput from './SearchInput'
import BusSearchList from './BusSearchList'
import BusCard from './BusCard'
import HistoryBusCardList from './HistoryCardList'

// services
import { getBusRoute } from '../services/BusData'

export default function BusSearch(props) {
  const [selectedCity, setSelectCity] = useState('Taipei')
  const [searchValue, setSearchValue] = useState('')
  const [routeList, setRouteList] = useState([])
  const [selectedRoute, setSelectedRoute] = useState({})
  const [isShowRoute, setIsShowRoute] = useState(false)
  let hasSelectedRoute = Object.entries(selectedRoute).length > 0
  function searchBusRoute() {
    const data = {
      city: selectedCity,
      routeName: searchValue
    }
    getBusRoute(data).then(res => {
      // console.log(res)
      let list = res.map(route => {
        return {
          routeId: route.RouteID,
          routeUid: route.RouteUID,
          routeName: route.RouteName.Zh_tw,
          startStop: route.DepartureStopNameZh,
          endStop: route.DestinationStopNameZh,
          ticket: route.TicketPriceDescriptionZh,
          city: data.city
        }
      })
      setRouteList(list)
    })
    setIsShowRoute(false)
  }


  let navigate = useNavigate();

  function selectRoute(route) {
    console.log(route)
    setSelectedRoute(route)
    setIsShowRoute(true)
    navigate('/route', { replace: true, state: route })
  }

  return (
    <div className="bg-primary-dark-light px-5 pt-5 space-y-5 flex flex-col">
      <CitySelector
        value={selectedCity}
        selectCity={(event) => setSelectCity(event.target.value)}
      ></CitySelector>
      <SearchInput
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        clickSumbit={searchBusRoute}
      ></SearchInput>
      {!isShowRoute && <BusSearchList
        routeList={routeList}
        clickRoute={selectRoute} />}
      {isShowRoute && <BusCard
        routeDetail={selectedRoute} />}
      <HistoryBusCardList></HistoryBusCardList>
    </div >
  )
}