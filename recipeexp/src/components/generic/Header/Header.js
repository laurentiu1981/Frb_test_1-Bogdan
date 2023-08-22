import logo from '../../../assets/images/logo.png'
import {Link} from 'react-router-dom';
import {getPath} from "../../../routes/routesObject";
import Image from "../Image";
function Header(){
  return <div className="flex px-8 flex-row bg-amber-400 justify-between items-center h-[6rem] w-auto">
    <Image alt="logo" className='logo' className="w-[5rem]" src={logo}/>
    <div className="flex flex-row gap-5">
      <Link className="underline underline-offset-1 cursor-pointer text-xl " to={getPath('bookmarks')}>
        Bookmarks
      </Link>
      <Link className="underline underline-offset-1 cursor-pointer text-xl " to={getPath('home')}>
        Profile
      </Link>
    </div>
  </div>
}

export default Header;