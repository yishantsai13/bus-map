export default function BusCard(props) {
  const { value } = props

  return (
    <div className="rounded-t-xl bg-primary-lighter px-5 py-4 drop-shadow-gray">
      <div className="flex flex-col">
        <h2 className="text-lg">307</h2>
        <span className="text-primary">板橋-撫遠市</span>
      </div>
    </div>
  )
}