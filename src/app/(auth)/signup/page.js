import Link from 'next/link'
import React from 'react'

function SignUp() {
  return (
    <div>
      <h1 className="p-3">Sign Up</h1>  
      <Link className='bg-red-500 p-3' href={'/signin'}>Signup</Link>
    </div>
  )
}

export default SignUp