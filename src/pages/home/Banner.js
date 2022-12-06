import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.mywestshore.com/wp-content/uploads/2018/07/buying-a-motorcycle.jpeg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p id='s-font' className="mb-5 text-4xl ">Welcome to</p>
                    <Link to='/' id='logo' className="btn btn-ghost normal-case text-8xl">
                        <span className='text-orange-500 mx-3'>Bike</span>
                        <span className='text-white'>Nation</span>
                    </Link>
                    <p className="mb-5 mt-2 text-xs">Sell Your old bike and buy your Dream Bike. Best Place for marketing of your old bike for sell and grab new  recondition bike</p>
                    <button className="btn btn-ghost bg-orange-500">find bikes</button>
                </div>
            </div>
        </div>
    )
}

export default Banner