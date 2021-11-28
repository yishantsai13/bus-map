import DetailImg from './../images/Detail.svg'

export default function BusSearchList(props) {
  return (
    <div className="-m-5">
      <div className="flex justify-between items-center border-b border-white border-opacity-20 py-2 px-5 hover:bg-primary-dark-lighter">
        <div className="flex flex-col">
          <h2 className="text-lg">307</h2>
          <span className="text-primary">板橋-撫遠市</span>
        </div>
        <img src={DetailImg} />
      </div>
    </div>
  )
}