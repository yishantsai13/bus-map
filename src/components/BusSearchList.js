import DetailImg from './../images/Detail.svg'

export default function BusSearchList(props) {
  const { routeList, clickRoute } = props
  const hasRouteList = routeList.length > 0

  const busCardList = routeList.map(route => {
    return (
      <div
        className="flex justify-between items-center border-b border-white border-opacity-20 py-2 px-5 hover:bg-primary-dark-lighter"
        onClick={() => clickRoute(route)}
        key={route.routeId}
      >
        <div className="flex flex-col">
          <h2 className="text-lg">{route.routeName}</h2>
          <span className="text-primary">{route.startStop}-{route.endStop}</span>
        </div>
        <img src={DetailImg} />
      </div>
    )
  })

  return (
    <div className="-m-5 overflow-auto">
      {busCardList}
    </div>
  )
}