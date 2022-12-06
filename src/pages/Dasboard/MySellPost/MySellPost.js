import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Spinner from '../../../shared/spiner/Spiner'
import SellPostsCard from './SellPostsCard'

function MySellPost() {
    const { data: sellPosts , isLoading, refetch } = useQuery({
        queryKey: ['sellposts'],
        queryFn: async () => {
            const res = await fetch('https://bike-nation-server.vercel.app/sellposts')
            const data = res.json()
            return data
        }
    })


    if(isLoading){
        return <Spinner></Spinner>
    }
    return (
        <div className='pr-16 pl-16 pb-16'>
            <h1 className='text-3xl mb-10 mt-4 '>My Sell Post's</h1>
            <div className='grid grid-cols-1 gap-10 justify-center '>
            {
                sellPosts?.map(sellPost => <SellPostsCard
                    key={sellPost._id}
                    sellPost={sellPost}
                    refetch={refetch}
                ></SellPostsCard>)
            }
            </div>
        </div>
    )
}

export default MySellPost