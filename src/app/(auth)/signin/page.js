import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className="p-3">Sign In</h1>
      <Link className='bg-red-500 p-3' href={'/signup'}>SignUp</Link>
    </div>)
}

export default page