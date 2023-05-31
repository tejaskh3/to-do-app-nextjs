"use client";
  
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='login'>
      <section>
        <form action="">
        <input type="text" name="" id="" placeholder='Please enter name'/>
          <input type="email" name="" id="" placeholder='Please enter email'/>
          <input type="password" name="" id="" placeholder='Please enter password'/>
          <button type="submit">Register</button>
        </form>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'Register',
  description: `Register and don't ever miss your tasks`,
}
export default page
