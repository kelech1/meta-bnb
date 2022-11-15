import { NavLink,Link, useMatch, useResolvedPath } from "react-router-dom"
import MetaBNB from "../assets/icons/MetaBNB.png"


export default function NavBar(){
  
  return (
    <nav className="nav">
      <div className="site-title">
        <NavLink to= "/" className='homepage' ><Link to="/"><img src={MetaBNB} alt="logo"/></Link></NavLink>
      </div>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/place-to-stay">Place to Stay</CustomLink>
        <CustomLink to="/nfts">NFTs</CustomLink>
        <CustomLink to="/community">Community</CustomLink>
      </ul>
      <div className="connect-wallet">
      <Link to="/connect-wallet"><button id="connect__wallet" type="button">Connect wallet</button></Link>
      </div>
    
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
