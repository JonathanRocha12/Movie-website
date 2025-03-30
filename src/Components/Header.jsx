import React from 'react'
import{link} from 'react-router-dom'
function Header() {
  return (
    <header className='bg-[#720455] text-white flex justify-around items-center p-8'>

<h1 className=' text-5xl font-bold'>MRP</h1>
<nav className=' w-1/2 text-2xl'>

    <ul className='flex justify-around'>

        <li className='hover:cursor-pointer'>
            
            <link to="/"> HOME</link>
            
            </li>
        <li className='hover:cursor-pointer' >FAVOURITES</li>
        <li className='hover:cursor-pointer' > GENRES</li>
        <li className='hover:cursor-pointer' > CONTACT US</li>
    </ul>
</nav>

<div className='flex justify-around w-[13%] text-[100%] items-center '>

<p className='hover:cursor-pointer'>LOGIN</p>
<p className='hover:cursor-pointer bg-[#4A0653] p-2 rounded-r-xl'>SIGN  UP</p>
</div>



    </header>
  )
}

export default Header 