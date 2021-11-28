export default function BusCard(props) {
  const { value } = props

  return (
    <div className="rounded-xl bg-primary-lighter px-5 py-4 drop-shadow-gray">
      <div className="flex flex-col">
        <h2 className="text-lg">307</h2>
        <span className="text-primary">板橋-撫遠市</span>
        <div className="grid grid-cols-3 grid-rows-2 mt-3 gap-3">
          <div>兩段票</div>
          <div className="col-span-2">
            <span className="text-gray-text mr-2">票價</span>
            <span>15$</span>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      <div className="bg-white py-3 px-5 mt-6 text-ss">
        <div className="flex">
          <div className="flex-1 flex justify-center">
            <span className="border-b-4 border-secondary m-auto py-1">往板橋</span>
          </div>
          <div className="flex-1 flex justify-center">往撫遠街</div>
        </div>
        <ul className="py-5">
          <li className="flex">
            <span className="flex-2 text-primary">進站中</span>
            <span className="flex-3">國泰街口</span>
            <div className="flex-3">
              捷運
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}