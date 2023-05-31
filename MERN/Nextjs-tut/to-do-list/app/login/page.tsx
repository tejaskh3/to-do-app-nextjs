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
          <button type="submit">Login</button>
          <p>or</p>
          <Link href={'/register'}>New User Register</Link>

        </form>
      </section>
    </div>
  )
}

export const metadata = {
  title: 'Login',
  description: 'Login to use access your to-do list.',
}

export default page
