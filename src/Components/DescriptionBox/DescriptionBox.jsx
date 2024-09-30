import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="db-nav">
            <div className="db-nav-box">Description</div>
            <div className="db-nav-box fade">Reviews (122)</div>
        </div>
        <div className="db-des">
            <p>An e-commerce website is an online platform that facilitates the buying ond selling
             of products or services over the internet. It serves os a virtual marketplace where businesses and
             individuals can showcase thor products, interact with customers, and conduct transactions
              without the need for a physical presence. E-commerce websites hove gained immense popularity 
              due to ther convenience, accessibilty, and the global reach they offer.
            </p>
            <p>
             E-commerce websites typicaly display products or services along with detailed descriptions, images, prices, and any availiable
             variations (eg. sizes, colors). Each product usualy has its own dedicated page with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox