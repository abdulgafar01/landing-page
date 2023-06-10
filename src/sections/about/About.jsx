import './about.css'
import image from '../../assets/about-right-image-1.jpg'

const About = () => {
  return (
   <section>
    <div className="container about__container">
        <div className="about__content">
        <span className='heading'>
          <div className='vr-line'></div>
        About Company
        </span>
              <h2>
              Who We Are
              </h2>
              <h3>
              Over <span class="primary-text-color">2,500+</span> Customers
              </h3>
              <p> We are a team of passionate IT professionals dedicated to delivering cutting-edge solutions
                            to businesses of all sizes. Our expertise spans across a range of industries, and we are
                            committed to providing customized services to suit your unique needs
              </p>
        </div>
        
        <div className="about__right">
          <div>
            <img src={image} alt="about-image" className="about__image"/>
          </div>

            <div class="about__experience">
                <span class="about__experience_years">27</span>
                <div className='about__vertical'></div>
                <span class="about__experience_title">
                    YEAR’S EXPERIENCE IN IT
                </span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About
