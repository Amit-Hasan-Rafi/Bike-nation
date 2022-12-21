import React from 'react'

function AdvertisedBikesCard({ AdvertisedBike }) {
    const {
        Bike_Model = AdvertisedBike?.Bike_Model,
        Brand_category = AdvertisedBike?.Brand_category,
        advertised = AdvertisedBike?.advertised,
        available = AdvertisedBike?.available,
        condition = AdvertisedBike?.condition,
        img = AdvertisedBike?.img,
        location = AdvertisedBike?.location,
        newprice = AdvertisedBike?.newprice,
        phone = AdvertisedBike?.phone,
        purchase = AdvertisedBike?.purchase,
        sellprice = AdvertisedBike?.sellprice,
        username = AdvertisedBike?.username
    } = AdvertisedBike
    return (
        <div>
            
            <div className="card lg:grid grid-cols-2 bg-base-100 shadow-xl sm:flex">
                <figure><img className='' src={img} alt="Album" /></figure>
                <div className="card-body text-center sm:text-center md:text-center lg:text-left">
                    <h2 className=" md:text-center sm:text-center text-5xl lg:text-left">{Brand_category} </h2>
                    <ul className='text-xl'>
                        <li>Bike Model: {Bike_Model}</li>
                        <li>Condition: {condition}</li>
                        <li>Purchase on : {purchase}</li>
                        <li>New price : {newprice} Tk</li>
                        <li>Sell price : {sellprice} Tk</li>
                        <li>Bike Location : {location}</li>
                        <li>Seller Name : {username}</li>
                        <li>Seller Number : {phone}</li>
                        <li>Available/Sold : {available} </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdvertisedBikesCard