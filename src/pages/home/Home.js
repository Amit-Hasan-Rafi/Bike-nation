import { useQuery } from '@tanstack/react-query'
import React from 'react'
import AdvertisedBikes from './AdvertisedBikes'
import Banner from './Banner'
import Categorys from './Categorys'
import ExtraSection from './ExtraSection'

function Home() {
  const { data: advertisedBikes } = useQuery({
    queryKey: ['sellposts'],
    queryFn: async () => {
      const res = await fetch('https://bike-nation-server.vercel.app/advertised')
      const data = await res.json()
      return data
    }
  })
  return (
    <div className='items-center'>
      <Banner></Banner>
      <Categorys></Categorys>
      { (advertisedBikes?.length > 0) &&
        <AdvertisedBikes></AdvertisedBikes>
      }
      <ExtraSection></ExtraSection>
    </div>
  )
}

export default Home