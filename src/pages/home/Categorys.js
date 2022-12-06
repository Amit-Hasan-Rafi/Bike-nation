import { async } from '@firebase/util'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../shared/spiner/Spiner'
import CategorysCard from './CategorysCard'


function Categorys() {

    const { data: categorys, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://bike-nation-server.vercel.app/category')
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='text-center mt-20 p-20' >
            <h1 id='s-font' className='lg:text-5xl md:text-3xl sm:text-2xl divider' >THE BRAND'S CATEGORY WE HAVE</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-11 p-16'>
                {
                    categorys.map(category =>
                        <CategorysCard
                            key={category._id}
                            category={category}
                        ></CategorysCard>

                    )
                }
            </div>
        </div>
    )
}

export default Categorys