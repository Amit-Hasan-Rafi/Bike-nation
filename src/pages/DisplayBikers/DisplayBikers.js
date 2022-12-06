import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import DisplayBikersCard from './DisplayBikersCard'

function DisplayBikers() {
    const datas = useLoaderData()
    const { img, brand, bikes } = datas
    return (
        <div>
            <div className='flex justify-center mb-10'>
                <img className='w-2/12 justify-center' src={img} alt="" />
            </div>
            <p id='s-font' className='text-center sm:text-xl md:text-3xl lg:text-5xl'>Available bikes of <span id='logo' className='text-orange-500 sm:text-3xl md:text-5xl lg:text-7xl' >{brand}</span></p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 lg:m-20 md:m-16 sm:m-16 m-12'>
                {
                    bikes.map(bike =>
                        <DisplayBikersCard
                            key={bike.id}
                            bike={bike}
                        ></DisplayBikersCard>
                    )
                }
            </div>
        </div>
    )
}

export default DisplayBikers