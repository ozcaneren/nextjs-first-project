import {BiSearch} from "react-icons/bi";
import MenuItem from "@/components/MenuItem";

export default function Header() {

  const menu = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    }
  ]

  return (
    <div className='flex items-center gap-5 h-20 p-3'>
      <div className='bg-amber-500 p-2 border border-gray-200 rounded-xl'>App</div>
      <div className='flex flex-1 items-center gap-2 border p-2 rounded-lg'>
        <input className='outline-none flex-1' placeholder='search area' type="text"/>
        <BiSearch size={25}/>
      </div>
      {
        menu.map((item, index) => (
          <MenuItem menu={item} key={index} />
        ))
      }
    </div>
  )
}