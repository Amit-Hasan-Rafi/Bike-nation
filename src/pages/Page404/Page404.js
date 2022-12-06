import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div>
      <Link to='/'><button className="btn btn-active btn-ghost absolute left-3/4 top-1/4">Go Back Home</button></Link>
      <img className='w-full' src="https://draft.dev/learn/assets/posts/lfropbg.png" alt="" />
    </div>
  )
}

export default Page404