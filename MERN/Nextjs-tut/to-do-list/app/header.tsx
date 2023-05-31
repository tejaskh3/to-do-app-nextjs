import React from 'react'
import Link from 'next/link'
import '../styles/header.scss'
import {LogoutButton} from '../components/Clients'
function Header() {
  return (
    <div className='header'>
      <div>
        <h2>
          To-DO-LIST
        </h2>
      </div>
      <article>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <LogoutButton></LogoutButton>
      </article>
    </div>
  )
}

export default Header
