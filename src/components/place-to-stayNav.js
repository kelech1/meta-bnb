import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../pagesCSS/place-to-stay.css'

import locationtoggle from '../assets/icons/locationtoggle.png'


export default function PlaceNav(){
  
  return (
    <nav className="filter">
      
      <ul>
        <CustomLink to="/place-to-stay">Restaurant</CustomLink>
        <CustomLink to="/place-to-stay">Cottage</CustomLink>
        <CustomLink to="/place-to-stay">Castle</CustomLink>
        <CustomLink to="/place-to-stay">Fantasy</CustomLink>
        <CustomLink to="/place-to-stay">Beach</CustomLink>
        <CustomLink to="/place-to-stay">Cabin</CustomLink>
        <CustomLink to="/place-to-stay">Off-grid</CustomLink>
        <CustomLink to="/place-to-stay">Farm</CustomLink>
      </ul>
      <button className="location-button" type="button">
      <Link to="/place-to-stay" id="location_typo">Location </Link><img src={locationtoggle} id= 'location_toggle' alt = 'toggle button' /></button>
      
    
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({path: resolvePath.pathname, end: true })
  return(
    <li className= {isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
      </li>
  )
}
