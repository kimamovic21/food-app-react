import React from 'react';
import './HeroStyles.css';

const Hero = () => {
  return (
        <div className='hero'>

            <div className='container'>

                <div className="content">

                    <div className="text">
                        <p>Always</p>
                    </div>
                    <h1>Served fresh</h1>
                    <h1>daily</h1>
                    <button className="btn">Delivery</button>
                    <button className="btn">Take-out</button>

                </div>  {/* className="content" */}

            </div>  {/* className='container' */}

        </div>  // className='hero'
    );
};

export default Hero;
