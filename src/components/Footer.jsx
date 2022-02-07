import React from 'react';
import './FooterStyles.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
         <div className='footer'>

            <div className="container">

              <div className="col">
                  <h3>Explore our menu</h3>
                  <p>Menu</p>
                  <p>Nutritions</p>
                  <p>Ingredients</p>
                  <p>Drink menu</p>
              </div>
              
              <div className="col">
                  <h3>Get to know us</h3>
                  <p>About us</p>
                  <p>Franchising</p>
                  <p>Foundation</p>
                  <p>Mission statement</p>
                  <p>Goals</p>
              </div>
              
              <div className="col">
                  <h3>Get in touch</h3>
                  <p>Press</p>
                  <p>Careers</p>
                  <p>Contact us</p>
                  <p>Get social</p>
              </div>

              <div>
                <h3>Let's us connect</h3>
                   <div className="social">
                      <FaFacebookSquare className='icon'/>
                      <FaInstagramSquare className='icon'/>
                      <FaTwitterSquare className='icon'/>
                  </div>
              </div>

            </div>  {/* className="container" */}

        </div>  // className='footer'
  );
};

export default Footer;
