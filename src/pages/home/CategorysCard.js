import React from 'react'
import { Link } from 'react-router-dom'

function CategorysCard({category}) {
    return (
        <div className="card card-compact bg-slate-100 shadow-xl ">
            <figure><img src={category.img} /></figure>
            <div className="card-body ">
                <h2 className="text-2xl font-extrabold">{category.brand}</h2>
                <p>Bike Availabele :{category.bikes_available}</p>
                <div className="card-actions justify-end">
                    <Link to={`/bikes/${category._id}`}><button className="btn btn-primary">See All</button></Link>
                </div>
            </div>
        </div>
    )
}

export default CategorysCard