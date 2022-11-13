import footlogo from "../assets/images/footlogo.png"
import copyright from "../assets/icons/copyright.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

import 'bootstrap/dist/css/bootstrap.min.css'


function Footer() {
  return (
    <div className='container-fluid' id='Footer-main-container'>

      <div className="row" id='Footer-row'>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" id='Footer-col-1'>

                <ul id='Footer-unlist-1'>
                    <li id='Footer-unlist-1-main'>
                        <img src={footlogo} alt="logo" />
                    </li>

                    <li id='Footer-unlist-1-sub-1'>
                        <img src={facebook} alt="facebook" id="fb"/>
                        <img src={instagram} alt="instagram" id="insta"/>
                        <img src={twitter} alt="twitter" id="twt"/>
                    </li>

                    <li id='Footer-unlist-1-sub-2'>
                        <img src={copyright} alt="copyright" />
                    </li>
                </ul>

            </div>

            <div className="footer-words">

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" id='Footer-col-2'>

                    <ul id='Footer-unlist-2'>
                        <li id='Footer-unlist-2-main'>Community</li>
                        <li id='Footer-unlist-2-sub'>NFT</li>
                        <li id='Footer-unlist-2-sub'>Tokens</li>
                        <li id='Footer-unlist-2-sub'>Landlords</li>
                        <li id='Footer-unlist-2-sub'>Discord</li>
                    </ul>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" id='Footer-col-3'>

                    <ul id='Footer-unlist-2'>
                        <li id='Footer-unlist-2-main'>Places</li>
                        <li id='Footer-unlist-2-sub'>Castle</li>
                        <li id='Footer-unlist-2-sub'>Farms</li>
                        <li id='Footer-unlist-2-sub'>Beach</li>
                        <li id='Footer-unlist-2-sub'>Learn more</li>
                    </ul>

                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3" id='Footer-col-4'>

                    <ul id='Footer-unlist-2'>
                        <li id='Footer-unlist-2-main'>About us</li>
                        <li id='Footer-unlist-2-sub'>Road map</li>
                        <li id='Footer-unlist-2-sub'>Creators</li>
                        <li id='Footer-unlist-2-sub'>Career</li>
                        <li id='Footer-unlist-2-sub'>Contact us</li>
                    </ul>

                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer