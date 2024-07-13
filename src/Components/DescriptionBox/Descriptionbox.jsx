import React from 'react'
import './DescriptionBox.css'

const Descriptionbox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (121)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates for buying and selling of products or services over the internet and serves as a virtual marketplace
                where businesses and individual can showcase their products and services, interact with customers, and conduct transactions without the need for a physical presence. 
                E-commerce website have gained immense popularity due to their convenience accessibility, and the global reach they offer.</p>
            <p>E-commerce website typically display products or services along with detailed description,images,prices, and available varitions
                (e.g, sizes,colors). Each product usually has its own dedicated page with relavant information.</p>
        </div>
    </div>
  )
}

export default Descriptionbox