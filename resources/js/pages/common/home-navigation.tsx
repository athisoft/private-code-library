import React from 'react'

function HomeNavigation() {
    return (
        <nav className='flex flex-wrap min-w-dvw py-2 bg-green-700 justify-around'>
            <ul className='flex gap-2'>
                <li className='px-2 py-1 bg-green-800 hover:bg-green-900 text-white font-bold rounded-xs'>Home</li>
                <li className='px-2 py-1 hover:bg-green-900 text-white font-bold rounded-xs'>Services</li>
                <li className='px-2 py-1 hover:bg-green-900 text-white font-bold rounded-xs'>About us</li>
            </ul>

            <ul className='flex gap-1'>
                <li className='px-2 py-1 hover:bg-green-900 rounded-xs text-white font-bold'>
                    <button className='cursor-pointer'>Login</button>
                </li>
                <li className='px-2 py-1 hover:bg-green-900 rounded-xs text-white font-bold'>
                    <button className='cursor-pointer'>Register</button>
                </li>
            </ul>
        </nav>
    )
}

export default HomeNavigation
