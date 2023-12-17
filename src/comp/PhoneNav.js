import React from "react";

import {  Link } from 'react-router-dom';

const PhoneNav = ({ closeMenu }) => {
  
  return (
    <div className='flex flex-col rounded-2xl'>
        <Link onClick={closeMenu} to="/"  className="px-12 py-4 border-b border-inputBorder hover:bg-primary">Home</Link>
        <Link onClick={closeMenu} to="/place-to-stay" className="px-12 py-4 border-b border-inputBorder hover:bg-primary">Place to stay</Link>
        <Link onClick={closeMenu} to="/nfts"  className="px-12 py-4 border-b border-inputBorder hover:bg-primary">NFTs</Link>
        <Link onClick={closeMenu} to="/community" className="px-12 py-4 hover:bg-primary">Community</Link>
    </div>
  )
};

export default PhoneNav;