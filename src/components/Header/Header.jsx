import React, { useState } from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const [ham, setHam ] = useState(false);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    
  {
      name: "All Posts",
      slug: "/all-posts",
      active: true,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: true,
  },
  {
    name: "Login",
    slug: "/login",
    active: !authStatus,
},
{
    name: "Signup",
    slug: "/signup",
    active: !authStatus,
},
  ]

  const handle=()=>{
    setHam(!ham);
  }

  return (
    <header className='py-3 static  shadow bg-black'>
      <Container>
        <nav className='flex justify-end '>
          
        <ul className={`flex flex-col bg-black items-center gap-2 md:static absolute right-4 ${ham ? 'hidden' : 'flex'} md:flex-row top-11 md:border-0 border-2 rounded-xl border-white mx-auto z-50`}>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6  py-1 duration-200 text-white hover:border-b-2 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
          <span className='border-2 border-gray-900 px-2 py-1 mr-3 hover:border-gray-700 rounded-md md:hidden' onClick={handle} >
            <i class="fa-solid fa-bars" style={{color:" #ffffff"}} />
          </span>
        </nav>
        </Container>
    </header>
  )
}

export default Header