import React, { useState } from 'react'
import { MdVerified } from 'react-icons/md';
import BuyerRoute from '../../routes/BuyerRoute';
import BookingModal from './BookingModal'

function DisplayBikersCard({ bike }) {

    const [bookBike, setBookBike] = useState(null)

    const { brand,
        color,
        img,
        location,
        name,
        newprice,
        run,
        sellerName,
        sellerVerify,
        sellprice,
        useTime,
        post } = bike

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-center font-extrabold">{brand} <span className='text-orange-500'>{name}</span></h2>
                <div className='divider'></div>
                <p className=' text-3xl font-bold'>Asking Price : {sellprice}TK</p>
                <p><span className=' font-semibold'>Brand_New price</span> : {newprice}TK</p>


                {sellerVerify == true ?

                    <div className='flex'>
                        <p><span className=' font-semibold'>Seller Name</span> : {sellerName} </p>
                        <span className="indicator-item indicator-middle indicator-end badge bg-orange-700 text-white font-bold">Verified <MdVerified className='mx-1'></MdVerified></span>
                    </div>
                    :
                    <p><span className=' font-semibold'>Seller Name</span> : {sellerName} </p>
                }


                <p><span className=' font-semibold'>Seller location</span> : {location}</p>
                <p><span className=' font-semibold'>Runs</span> : {run}Km</p>
                <p><span className=' font-semibold'>Using Time</span> : {useTime}</p>
                <p><span className=' font-semibold'>Post Published</span> : {post[0]} at {post[1]}</p>
                <p><span className=' font-semibold'>Bike color</span> : {color}</p>


                <div className="card-actions justify-end">
                    <BuyerRoute>
                        <label
                            htmlFor="Bike-Booking"
                            className="btn bg-orange-500"
                            onClick={() => setBookBike(bike)}
                        >Book Bike</label>
                    </BuyerRoute>
                </div>
            </div>
            {
                bookBike &&
                <BookingModal
                    bookBike={bookBike}
                    setBookBike={setBookBike}
                ></BookingModal>
            }
        </div>
    )
}

export default DisplayBikersCard