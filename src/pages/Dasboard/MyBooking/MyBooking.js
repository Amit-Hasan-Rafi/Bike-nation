import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../../../context/AuthProvider'
import Spinner from '../../../shared/spiner/Spiner'

function MyBooking() {
    const { user } = useContext(AuthContext)
    const url = `https://bike-nation-server.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [], isLoading,refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleRemoveBooking = id => {
        fetch(`https://bike-nation-server.vercel.app/bookings/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Booking Delete successfully!', {
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
    return (
        <div className="overflow-x-auto ">

            <h1 className='text-3xl mb-10 mt-4'>My All Bookings</h1>
            <table className="table w-full md:w-3/4 sm:w-1/4 ">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Brand</th>
                        <th>Bike Model</th>
                        <th>Meeting Location</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row  --> */}
                    {
                        bookings.map((booking, i) => <tr key={booking?._id}>
                            <th>{i + 1}</th>
                            <td>{booking?.Brand}</td>
                            <td>{booking?.Bike_Name}</td>
                            <td>{booking?.Meeting_Location}</td>
                            <td>{booking?.Price}Tk</td>
                            <th>
                                <button onClick={()=>handleRemoveBooking(booking?._id)} className="btn btn-error text-white btn-xs">Remove</button>
                            </th>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default MyBooking