import React from 'react'
import Products from './Products'


const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-brown" border-0>
                <img src="/home/shopping pic.webp" className="card-img" alt="Background" height="600px" />
                <div className="card-img-overlay d-flex flex-column ">
                    <h5 className="card-title display-4 mb-0 fw-bold ">STYLE YOUR OWN SELF</h5>
                    <p className="card-text fw-bold">WELCOME TO VMART'S LATEST TRENDS</p>
                </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home