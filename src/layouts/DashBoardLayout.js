import { isAdmin } from '@firebase/util'
import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import useIsAdmin from '../hooks/useIsAdmin'
import useIsBuyer from '../hooks/useIsBuyer'
import useIsSeller from '../hooks/useIsSeller'
import Footer from '../shared/footer/Footer'
import Navber from '../shared/navber/Navber'

function DashBoardLayout() {
    const { user } = useContext(AuthContext)
    const [IsAdmin] = useIsAdmin(user?.email)
    const [IsBuyer] = useIsBuyer(user?.email)
    const [isSeller] = useIsSeller(user?.email)

    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-start">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-white text-base-content">
                        {
                            IsBuyer && user?.email && <>
                                <li><Link to='/dashboard/myBookings'>My Bookings</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/MySellPost'>My Sell Post's</Link></li>
                                <li><Link to='/dashboard/AddSellPost'>Add Sell Post</Link></li>
                            </>
                        }
                        {
                            IsAdmin && <>
                                <li><Link to='/dashboard/AllBuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/AllSeller'>All Seller</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default DashBoardLayout