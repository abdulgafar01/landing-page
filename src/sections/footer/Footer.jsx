import './footer.css'
import logo from '../../assets/logo-white.png'
// import {BiLogoFacebook} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <div className="widget">
          <div className="widget1">
            <div className="widget1__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="widget1__text">
              <p>
              We are a dynamic and innovative company that is dedicated to 
              delivering cutting-edge solutions to our clients.
              </p>
            </div>
            <div className="widget1__social">
              <ul>
                <li>
                  <a href="#">
                    {/* <BiLogoFacebook /> */}
                  </a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="widget2">
            <div className="widget2__heading">
            <div className='vr-line'></div>
            IT Services
            </div>
            <div className="widget2__list">
              <ul>
                <li>
                <a href="#">IT Services</a>
                </li>
                <li>
                <a href="#">Cyber Security</a>
                </li>
                <li>
                <a href="#">Cloud Computing</a>
                </li>
                <li>
                <a href="#">Managed IT</a>
                </li>
                <li>
                <a href="#">IT Support</a>
                </li> 
              </ul>
            </div>
          </div>

          <div className="widget3">
            <div className="widget3__heading">
            <div className='vr-line'></div>
            <h3>Quick Links</h3>
            </div>
            <div className="widget3__list">
              <ul>
                <li>
                <a href="#">Blogs</a>
                </li>
                <li>
                <a href="#">Contact Us</a>
                </li>
                <li>
                <a href="#">Careers</a>
                </li>
              </ul>
            </div>
          </div>   
            
      </div>
      <div className="footer__copyright">
        <p> &copy; 2023 <a href="/">QReliance</a>. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
