import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddSellPost() {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const { data: categorys, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://bike-nation-server.vercel.app/category')
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <>Loading...</>
    }
    const handleAddSellPost = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb_key}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(photoData => {
                if (photoData.success) {
                    const sellPost = {
                        img: photoData.data.url,
                        condition: data.condition,
                        Bike_Model: data.Bike_Model,
                        location: data.location,
                        newprice: data.newprice,
                        phone: data.phone,
                        purchase: data.purchase,
                        sellprice: data.sellprice,
                        Brand_category: data.Brand_category,
                        username: data.username,
                        available : 'Available ',
                        advertised : ''
                    }
                    fetch('https://bike-nation-server.vercel.app/sellposts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(sellPost)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                // navigate('/SellerUserPost')
                                toast.success('Sell Post added successfully!', {
                                    position: "top-center",
                                    autoClose: 1000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                });
                                navigate('/dashboard/MySellPost')
                            }
                        })
                }
            })
    }
    return (
        <div className='ml-10' >
            <h1 className='text-3xl mb-10 mt-4 '>Add Sell Post</h1>
            <form onSubmit={handleSubmit(handleAddSellPost)}>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"> <span className="label-text  w-20">Brand</span></label>
                    <select className="select select-bordered w-full max-w-xs" {...register("Brand_category")}>
                        {categorys.map(c => <option key={c?._id}>{c?.brand}</option>)}
                    </select>
                </div>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"><span className="label-text w-20">Bike Model</span></label>
                    <input type="text"
                        {...register("Bike_Model", {
                            required: "Name Address is required"
                        })}
                        className="input input-bordered w-full max-w-lg" />
                </div>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"> <span className="label-text  w-20">Condition </span></label>
                    <select className="select select-bordered w-full max-w-xs" {...register("condition")}>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"> <span className="label-text  w-20">Purchase</span></label>
                    <select className="select select-bordered w-full max-w-xs" {...register("purchase")}>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"><span className="label-text w-20">Phone</span></label>
                    <input type="number"
                        {...register("phone", {
                            required: "phone Address is required"
                        })}
                        className="input input-bordered w-full max-w-lg" />
                </div>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"><span className="label-text w-20">New Price</span></label>
                    <input type="number"
                        {...register("newprice", {
                            required: "newprice Address is required"
                        })}
                        className="input input-bordered w-full max-w-lg" />
                </div>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"><span className="label-text w-20">Asking Price</span></label>
                    <input type="number"
                        {...register("sellprice", {
                            required: "sellprice Address is required"
                        })}
                        className="input input-bordered w-full max-w-lg" />
                </div>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"><span className="label-text w-20">Seller Name</span></label>
                    <input type="text"
                        {...register("username", {
                            required: "username Address is required"
                        })}
                        className="input input-bordered w-full max-w-lg" />
                </div>
                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"><span className="label-text w-20">location</span></label>
                    <input type="text"
                        {...register("location", {
                            required: "location Address is required"
                        })}
                        className="input input-bordered w-full max-w-lg" />
                </div>

                <div className="form-control w-full max-w-lg flex flex-row mb-2">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input
                        {...register("image")}
                        type="file"
                        className="file-input file-input-bordered file-input-warning w-full max-w-lg" required />
                </div>
                <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-warning w-full mt-3' value="Add Post" type="submit" />
            </form>
        </div>
    )
}

export default AddSellPost