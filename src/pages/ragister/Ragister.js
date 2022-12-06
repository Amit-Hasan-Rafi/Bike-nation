import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

function Ragister() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const { createUser, updateUser, user, loginWithGoogle } = useContext(AuthContext)
  const [ragisterError, setRagisterError] = useState('')
  // const [createdUserEmail, setCreatedUserEmail] = useState('')
  // const [token]=useToken(createdUserEmail)
  const nagivate = useNavigate()

  // if(token){
  //   return nagivate('/')
  // }

  const handleRagister = data => {
    //Hosting img
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
          const user = {
            name: data.name,
            email: data.email,
            img: photoData.data.url,
            category: data.user_category
          }
          //inserting user data to MongoDB
          fetch('https://bike-nation-server.vercel.app/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(user)
          })
            .then(res => res.json())
            .then(data => {
              // setCreatedUserEmail(user.email) 
              nagivate('/')
            })

          //fireBase Authentication
          createUser(data.email, data.password)
            .then(result => {
              const user = result.user;
              // console.log(user);
              //toast
              toast.success('Ragister success!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
              const userInfo = {
                displayName: data.name,
                photoURL: photoData.data.url
              }
              updateUser(userInfo)
                .then(() => {

                })
                .catch(err => console.log(err));
            })
            .catch(error => {
              console.log(error)
              setRagisterError(error.message)
            });
          setRagisterError('');
        }
      })
  }
  return (
    <div className=' hero min-h-screen' style={{ backgroundImage: `url("https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg")` }}>
      <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
          <h2 className='text-xl text-center'>Ragister</h2>
          <form onSubmit={handleSubmit(handleRagister)}>
            {/* User Name */}
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Name</span></label>
              <input type="text" {...register("name", {
                required: "Name is Required"
              })} className="input input-bordered w-full max-w-xs" />
              {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            {/* User Email */}
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Email</span></label>
              <input type="email" {...register("email", {
                required: true
              })} className="input input-bordered w-full max-w-xs" />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            {/* User photo */}
            <div>
              <label className="label"> <span className="label-text">User Category</span></label>
              <input
                {...register("image")}
                type="file"
                className="file-input file-input-bordered file-input-warning w-full max-w-xs" required />
              {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
            </div>
            {/* User Category */}
            <div>
              <label className="label"> <span className="label-text">User Category</span></label>
              <select className="select select-bordered w-full max-w-xs" {...register("user_category")}>
                <option>Buyer</option>
                <option>Seller</option>
              </select>
              {errors.user_category && <p className='text-red-500'>{errors.user_category.message}</p>}
            </div>
            {/* User Password */}
            <div className="form-control w-full max-w-xs">
              <label className="label"> <span className="label-text">Password</span></label>
              <input type="password" {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be 6 characters long" },
                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
              })} className="input input-bordered w-full max-w-xs" />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>

            <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-warning w-full mt-3' value="Ragister" type="submit" />
            {ragisterError && <p className='text-red-600'>{ragisterError}</p>}
          </form>
          <p className='text-center mt-4'>Alreay have an account? <Link className='text-orange-500' to="/login">LogIn</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Ragister