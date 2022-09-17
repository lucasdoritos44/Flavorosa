import React from 'react'
import './Awards.css'

import dish2 from '../assets/dish2.jpg'

const Awards = () => {
  return (
    <section className='awards' id='awards'>
        <div className='overlay'/>
        <p className="logo__f-awards">F</p>
        <div className='awards__content'>
            <p>Awards</p>
            <h1>Our Laurels</h1>
            <div className='awards__award'>
                <h3>Bib Gourmond</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='awards__award'>
                <h3>Rising Star</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='awards__award'>
                <h3>AA Hospitality</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='awards__award'>
                <h3>Outstanding Chef</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
        <div className='awards__photos'>
            <div className='awards__photos-container2'>
            <img src={dish2} alt='' className='awards__photos-dish-2'/>
            </div>    
        </div>
    </section>
  )
}

export default Awards