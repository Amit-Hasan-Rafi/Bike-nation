import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthProvider'

function BookingModal({ bookBike, setBookBike }) {

    const { user } = useContext(AuthContext)
    const { brand, name, sellprice } = bookBike

    const handelBookings = event => {
        event.preventDefault();
        const form = event.target;
        const Name = form.Name.value
        const Email = form.Email.value
        const Brand = form.Brand.value
        const Bike_Name = form.Bike_Name.value
        const Price = form.Price.value
        const Phone = form.Phone.value
        const Meeting_Location = form.Meeting_Location.value
        const modalData = {
            Name,
            Email,
            Brand,
            Bike_Name,
            Price,
            Phone,
            Meeting_Location
        }
        console.log(modalData)
        fetch('https://bike-nation-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization : `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(modalData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged){
                    console.log(data)
                    toast.success('Booking successful!', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setBookBike(null)
                }
                else{
                    toast.error(data.message, {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            })
    }


    return (
        <>

            <input type="checkbox" id="Bike-Booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-\">
                    <label htmlFor="Bike-Booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelBookings} className='grid grid-cols-1 gap-2 ml-10 mr-10'>
                        <p className='text-3xl text-center divider text-orange-500' id='s-font' >Booking Information</p>
                        <div className="divider"></div>
                        <p>Name</p>
                        <input type="text" name='Name' placeholder="Name" value={user.displayName} disabled className="input input-bordered input-ghost w-full" />
                        <p>Email</p>
                        <input type="text" name='Email' placeholder="Email" value={user.email} disabled className="input input-bordered input-ghost w-full" />
                        <p>Brand</p>
                        <input type="text" name='Brand' placeholder="Brand" value={brand} disabled className="input input-bordered input-ghost w-full" />
                        <p>Bike Name</p>
                        <input type="text" name='Bike_Name' placeholder="Bike Name" value={name} disabled className="input input-bordered input-ghost w-full" />
                        <p>Price</p>
                        <input type="text" name='Price' placeholder="Price" value={sellprice} disabled className="input input-bordered input-ghost w-full" />
                        <p>Phone</p>
                        <input type="Number" name='Phone' placeholder="Phone" required className="input input-bordered input-ghost w-full" />
                        <p>Meeting Location</p>
                        <input type="text" name='Meeting_Location' placeholder="Meeting Location" required className="input input-bordered input-ghost w-full" />
                        <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-orange-500 mt-2 w-full' type="submit" value="Book" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default BookingModal