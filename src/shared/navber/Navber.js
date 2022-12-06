import { async } from '@firebase/util'
import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import './navbar.css'

function Navber() {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const { data: MongoDB_users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://bike-nation-server.vercel.app/users')
            const data = await res.json()
            return data
        }
    })
    // console.log(user)
    // MongoDB_users?.category

    return (
        <div className="navbar bg-orange-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
            </div>
            <div id='logo' className="navbar-center">
                <Link to='/' className="btn btn-ghost normal-case text-4xl">
                    <span className='text-orange-500 mx-1'>Bike</span>
                    <span className='text-balck'>Nation</span>
                </Link>
            </div>
            <div className="navbar-end mx-2">
                {
                    user?.uid ?
                        <div className='flex items-center'>
                            <div className="avatar flex-row-reverse items-center indicator mx-2 lg:w-full md:3/4 sm:2/4">
                                <span className="indicator-middle badge badge-success">{ }</span>
                                <div className="w-12 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2s">
                                    <img src={user?.photoURL} />
                                </div>
                                <p className='font-semibold mx-2' >{user.displayName}</p>
                            </div>
                            <Link onClick={handleLogOut}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline mx-2">LogOut</button></Link>
                        </div>
                        :
                        <>
                            <Link to='/login'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline mx-2">LogIn</button></Link>
                            <Link to='/ragister'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-outline">Ragister</button></Link>
                        </>
                }
            </div>
            <label  htmlFor="dashboard-drawer" tabIndex={3} className="btn btn-ghost btn-circle lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
        </div>
    )
}

export default Navber