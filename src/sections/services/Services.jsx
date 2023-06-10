import './services.css'
import  {AiOutlineArrowRight} from 'react-icons/ai'
import create from '../../assets/create.png'
import software from '../../assets/software.png'
import analytics from '../../assets/analytics.png'

const Services = () => {
  return (
    <section>
      <div className="container container__services">
    
        <div className="services__title">
          <div>
          <span className='heading'>
          <div className='vr-line'></div>
             Our  Services
        </span>
        <h2>
        We Offer a Wide <br/>Variety of IT Services
        </h2>
          </div>
        
        <div className='btn__primary'>
                 see more  <AiOutlineArrowRight size={20}/>
        </div>
    </div>

    <div className="serivices__card">
      <div className=" card card1">
      <span>
            <img src={create} alt="create-icon" className="serivices__card-icon"/>
            </span> 
          <h3 className="serivices__card-title">IT Management</h3>
          <p className="serivices__card-content">We help businesses by making sure their technology
            systems work well and meet their goals. This includes tasks like fixing hardware and software, 
            keeping the network safe, organizing data, and planning for future technology needs.</p>
      </div>
  
      <div className="card card2">
      <span >
            <img src={software} alt="software" className="serivices__card-icon"/>
            </span> 
          <h3 className="serivices__card-title">Software Engineering</h3>
          <p className="serivices__card-content"> We specialize in software engineering, which is the process of using engineering
                                principles and methods to design, develop, and maintain high-quality software systems
                                during development.
</p>
      </div>
      <div className="card card1">
      <span >
            <img src={analytics} alt="analytics" className="serivices__card-icon"/>
            </span> 
          <h3 className="serivices__card-title">Cloud Computing</h3>
          <p className="serivices__card-content">We assist businesses and individuals with cloud computing, which enables access to data,
                                software, and other resources online. Our service helps to reduce costs, increase
                                flexibility, and improve teamwork.</p>
      </div> 
         
    </div>


       
      </div>
     
    </section>
  )
}

export default Services
