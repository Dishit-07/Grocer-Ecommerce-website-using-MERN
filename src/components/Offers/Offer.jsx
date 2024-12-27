import React from 'react'
import './Offer.css'
import offer_img from '../assets/images/offer_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={offer_img} alt="" />
      </div>
    </div>
  )
}

export default Offer;
