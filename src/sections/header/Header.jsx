import React from 'react'
import './header.css'
import background from '../../assets/background.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Header = () => {
  return (
    <header style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",}}>
        <div className="container header__container">
            <h2>
            The best solution to run your IT project faster
            </h2>
            <p>
            As businesses rely more heavily on technology, the need for reliable IT
            solutions has never been greater. At QReliance, we offer a range of services
                                            to help you design, manage, and secure your IT infrastructure, so you can
                                            focus on growing your business.
            </p>
            <button className='btn__primary'>
                 Get Started  <AiOutlineArrowRight size={20}/>
            </button>
        </div>
    </header>
  )
}

export default Header
