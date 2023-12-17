import React, {useState} from 'react'
import logo from '../assets/logo.webp'
import ico from '../assets/ico.webp'
import {  Link } from 'react-router-dom';
import PhoneNav from './PhoneNav'

import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar({wallet}) {
  const [dispNav, setDispNav] = useState(false)
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);


  const menuClicked = () => {
    setDispNav(!dispNav)
    console.log("clicked")
  }
  const closeMenu = () => {
    setDispNav(false)
    console.log("clicked")
  }

  
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between py-6 bg-white md:py-2 px-3vw md:px-5vw lg:px-7vw drop-shadow-md h-[10vh]'>
        <Link to="/" className=' mr-[30vw] w-[9vw]' >
            <img src={windowWidth > 768 ? logo : ico}  alt="MetaBnB logo"/>
        </Link>
        <div className='hidden space-x-10 lg:block'>
            <Link to="/">Home</Link>
            <Link to="/place-to-stay">Place to stay</Link>
            <Link to="/nfts">NFTs</Link>
            <Link to="/community">Community</Link>
        </div>
        <div className='flex items-center justify-between'>
          
          <Link to="/" onClick={wallet} className='px-4 py-3 bg-primary rounded-xl '><p className='text-white md:text-xs '>Connect Wallet</p></Link> 
          <div onClick={menuClicked}  className='block px-4 lg:hidden'> <MenuIcon /></div>
        </div>
        <div className='absolute right-0 w-5/6 bg-white rounded-l-xl top-28 '>
          {dispNav && <PhoneNav closeMenu={closeMenu}/>}
        </div>
        
        
    </nav>
  )
}
