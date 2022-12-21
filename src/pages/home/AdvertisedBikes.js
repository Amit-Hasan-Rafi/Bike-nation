import { useQuery } from '@tanstack/react-query'
import React from 'react'
import AdvertisedBikesCard from './AdvertisedBikesCard'

function AdvertisedBikes() {
    const {data : AdvertisedBikes} = useQuery({
        queryKey : ['sellposts'],
        queryFn : async()=>{
            const res = await fetch('https://bike-nation-server.vercel.app/advertised')
            const data = await res.json()
            return data
        }
    })

  return (
    <div>
        <h1 id='s-font' className='lg:text-5xl md:text-3xl text-2xl divider' >BIKES ON ADVERTISED</h1>
        <div className='lg:p-20 p-8' >
            {
                AdvertisedBikes?.map(AdvertisedBike=><AdvertisedBikesCard
                key={AdvertisedBike._id}
                AdvertisedBike={AdvertisedBike}
                ></AdvertisedBikesCard>)
            }
        </div>
    </div>
  )
}

export default AdvertisedBikes