import './offer.css'
import web from '../../assets/web-development.png'
import android from '../../assets/android.png'
import apple from '../../assets/apple.png'
import iot from '../../assets/iot.png'

const Offer = () => {
  return (
    <section>
      <div className="container offer__container">
        <div className="offer__heading">
        <div>
          <span className='heading'>
          <div className='vr-line'></div>
          We Offer best IT Services
        </span>
        <h2>
        Easy Solutions for all Difficult IT Problems
        </h2>
          </div>
          <div>
            <span className="offer__icon">
            </span>
            <a href="#">Technology Index</a>
          </div>
        </div>

        <div className="offer__card">

          <div className="card card1">
          <span >
          <img src={web} alt="" className="offer__card--icon" />
          </span>
            <h4 className='offer__card--link'> 
            <a href="#">Web</a>
            </h4>
          </div>
          <div className="card card2">
          <span>
          <img src={android} alt="" className="offer__card--icon" />
          </span>
            <h4 className='offer__card--link'> 
            <a href="#">Android Apps</a>
            </h4>
          </div>
          <div className="card card3">
          <span>
          <img src={apple} alt="" className="offer__card--icon" />
          </span>
            <h4 className='offer__card--link'> 
            <a href="#">Ios Program</a>
            </h4>
          </div>

          <div className="card card4">
          <span>
          <img src={iot} alt="" className="offer__card--icon"/>
          </span>
            <h4 className='offer__card--link'> 
            <a href="#">Iot Program</a>
            </h4>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Offer
