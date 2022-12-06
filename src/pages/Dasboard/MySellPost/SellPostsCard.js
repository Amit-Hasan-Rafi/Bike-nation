import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'react-toastify'

function SellPostsCard({ sellPost, refetch }) {
    const {
        img = sellPost?.img,
        condition = sellPost?.condition,
        Bike_Model = sellPost?.Bike_Model,
        location = sellPost?.location,
        newprice = sellPost?.newprice,
        phone = sellPost?.phone,
        purchase = sellPost?.purchase,
        sellprice = sellPost?.sellprice,
        Brand_category = sellPost?.Brand_category,
        username = sellPost?.username,
    } = sellPost
    console.log(sellPost)

    const handleDelete = id => {
        fetch(`https://bike-nation-server.vercel.app/sellposts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Post Delete successfully!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                refetch()
            })
    }
    const handleIsAvaileble = id => {
        fetch(`https://bike-nation-server.vercel.app/sellposts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Bike Sold', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    refetch()
                }
            })
    }

    const handleIsAdvertised = id => {
        fetch(`https://bike-nation-server.vercel.app/sellposts/advertised/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    toast.success('Bike is On Advertise', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    refetch()
                }
            })

    }
    return (
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
                    <li>Available/Sold : </li>
                </ul>
                <div className="card-actions justify-start mt-5 ">
                    {   sellPost?.advertised == 'advertised' ?
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-disabled ">on Advertise</button>
                        :
                        <button onClick={() => handleIsAdvertised(sellPost._id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-warning ">Advertise</button>
                    }
                    {sellPost?.available === 'Sold' ?
                        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-disabled ">Sold</button>
                        :
                        <button onClick={() => handleIsAvaileble(sellPost._id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success ">Available</button>
                    }
                    <button onClick={() => handleDelete(sellPost._id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-error ">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SellPostsCard