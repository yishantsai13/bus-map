import SearchImg from './../images/search.svg'

export default function SearchInput(props) {
  const { value, onChange, clickSumbit } = props
  return (
    <div className="bg-white flex rounded-lg px-4 py-3 w-96">
      <input type="text" value={value} onChange={onChange} className="flex-1 outline-none" placeholder="搜尋公車" />
      <img src={SearchImg} className="block" oncClick={clickSumbit} />
    </div>
  )
}