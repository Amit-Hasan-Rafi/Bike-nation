import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';

function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, loginWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setLoginUserEmail] = useState('')
    // const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    // if(token){
    //     return  navigate(from, { replace: true });
    // }


    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);

        setLoginError('');
        signIn(data?.email, data?.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login success!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                // setLoginUserEmail(data?.email)
                return  navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    const handeleGoogleLogIn = () => {
        loginWithGoogle()
          .then(result => {
            const user = result.user
            console.log(user)
            navigate('/')
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
          })
        }
    return (
        <div className=' hero min-h-screen' style={{ backgroundImage: `url("https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg")` }} >
            <div className='h-[800px] flex justify-center items-center hero min-h-screen border' >
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        {/* User Email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="text"
                                {...register("email", {
                                    required: "Email Address is required"
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        {/* User password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                })}
                                className="input input-bordered w-full max-w-xs" />

                            <div>
                                {loginError && <p className='text-red-600'>{loginError}</p>}
                            </div>
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                       
                        <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-warning w-full mt-3' value="Login" type="submit" />
                    </form>
                    <p className='text-center mt-4'>New to Bike Nation? <Link className='text-orange-500' to="/ragister">Create new Account</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={handeleGoogleLogIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    )
}

export default Login