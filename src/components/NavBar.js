import logoImg from './../images/Logo.svg'

export default function NavBar(props) {
  return (
    <div className="w-full bg-primary h-20 flex justify-between px-5 items-center">
      <div>
        <img src={logoImg} />
      </div>
      <div className="text-white flex text-sm h-full">
        <a href="#" className="px-10 block box-border flex items-center relative">找公車</a>
        <a href="#" className="px-10 block box-border flex items-center relative before:h-2 before:bg-secondary before:w-full before:absolute before:bottom-0 before:left-0">找站牌</a>
      </div>
    </div>
  )
}