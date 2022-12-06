import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { toast } from 'react-toastify';
import Spinner from '../../../shared/spiner/Spiner';

function AllBuyers() {

    const url = `https://bike-nation-server.vercel.app/users/buyer`
    const { data: AllBuyers, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Spinner></Spinner>
    }

    const handleMakeAdmin = id => {
        fetch(`https://bike-nation-server.vercel.app/users/admin/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AllBuyers)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.matchedCount > 0) {
                    toast.success('Set Admin successfully!', {
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

    const handleRemoveUser = id => {
        fetch(`https://bike-nation-server.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast.success('Buyer Delete successfully!', {
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

            <h1 className='text-3xl mb-10 mt-4'>All Buyers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Buyer</th>
                            <th>Category</th>
                            <th>Make Admin</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            AllBuyers.map((buyer, i) => <tr key={buyer?._id}>
                                <td>{i + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={buyer?.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{buyer?.name}</div>
                                            <div className="text-sm opacity-50">{buyer?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{buyer?.category}</td>
                                <th>
                                    {buyer?.category == 'admin' ?
                                        <button className="btn btn-disabled text-white btn-xs">Is-Admin</button>
                                        :
                                        <button onClick={() => handleMakeAdmin(buyer?._id)} className="btn btn-success text-white btn-xs">Admin</button>
                                    }
                                </th>
                                <th>
                                    <button onClick={() => handleRemoveUser(buyer?._id)} className="btn btn-error text-white btn-xs">Remove</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllBuyers