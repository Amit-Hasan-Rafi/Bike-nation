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
            
            <div className="card grid grid-cols-2 bg-base-100 shadow-xl">
                <figure><img className='' src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">{Brand_category} </h2>
                    <ul>
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