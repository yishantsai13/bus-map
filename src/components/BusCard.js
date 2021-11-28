import React, { useState, useEffect } from 'react';
// services
import { getBusStopList, getBusStatus } from '../services/BusData'

export default class BusCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      routeList: [],
      stopList: [],
      activeDirection: '0',
      stopEstimateTimeList: []
    }
  }
  componentDidMount() {
    const routeDetail = { ...this.props.routeDetail }
    const routeData = {
      city: routeDetail.city,
      routeName: routeDetail.routeName,
      direction: 0
    }

    getBusStopList(routeData).then((res) => {
      let routes = {}
      res.forEach(route => {
        route['destination'] = route.Direction === 0 ? this.props.routeDetail.startStop : this.props.routeDetail.endStop
        routes[route.Direction] = route
      })
      this.setState({
        routeList: routes
      })
    })

    getBusStatus(routeData).then((res) => {
      let stopObj = {}
      res.map(stop => {
        stopObj[stop.StopUID] = stop
      })
      this.setState({
        stopEstimateTimeList: stopObj
      })
    })
  }

  changeDirection(direction) {
    this.setState({
      activeDirection: direction
    })
  }

  render() {
    const routeDetail = Object.assign({}, this.props.routeDetail)
    const routes = Object.assign({}, this.state.routeList)
    const activeDirection = this.state.activeDirection
    const stopEstimateTimeList = Object.assign({}, this.state.stopEstimateTimeList)

    const routeDirections = Object.keys(routes).map(routeIndex => {
      let isActive = this.state.activeDirection === routeIndex
      const activeClass = isActive ? ' border-b-4 border-secondary' : ''
      return (
        <div className="flex-1 flex justify-center" key={routeIndex} onClick={() => this.changeDirection(routeIndex)}>
          <span className={"m-auto py-1" + activeClass}>往{routes[routeIndex].destination}</span>
        </div>
      )
    })

    const stopList = routes[activeDirection] && routes[activeDirection].Stops.map(stop => {
      // let estimateTime = stopEstimateTimeList[stop.stopUID]
      return (
        <li className="flex" key={stop.stopUID}>
          <span className="flex-2 text-primary">{0}</span>
          <span className="flex-3">{stop.StopName.Zh_tw}</span>
          {/* <div className="flex-3">
            捷運
          </div> */}
        </li>
      )
    })
    console.log(this.state.stopEstimateTimeList)
    return (
      <div className="rounded-xl bg-primary-lighter px-5 py-4 drop-shadow-gray">
        <div className="flex flex-col">
          <h2 className="text-lg">{routeDetail.routeName}</h2>
          <span className="text-primary">{routeDetail.startStop}-{routeDetail.endStop}</span>
          <div className="grid grid-cols-3 grid-rows-1 mt-3 gap-3">
            <div>{routeDetail.ticket}</div>
            <div className="col-span-2">
              <span className="text-gray-text mr-2">票價</span>
              <span>15$</span>
            </div>
            {/* <div>
              <span className="text-gray-text mr-2">首班</span>
              <span>07:00</span>
            </div>
            <div>
              <span className="text-gray-text mr-2">末班</span>
              <span>22:00</span>
            </div>
            <div>
              <span className="text-gray-text mr-2">班距</span>
              <span>10 mins</span>
            </div> */}
          </div>
        </div>
        <div className="bg-white py-3 px-5 mt-6 text-ss">
          <div className="flex">
            {routeDirections}

          </div>
          <ul className="py-5 h-64 space-y-5 overflow-auto">
            {stopList}
          </ul>
        </div>
      </div>
    )
  }
}