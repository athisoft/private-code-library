import { login, register } from '@/routes'
import { Link } from '@inertiajs/react'
import React from 'react'


function HomeNavigation() {
    return (
        <nav className='flex flex-wrap py-1 min-w-dvw bg-green-700 justify-around'>
            <ul className='flex gap-2'>
                <li className='px-2 py-1.5 bg-green-800 hover:bg-green-900 text-white font-bold rounded-xs'>Home</li>
                <li className='px-2 py-1.5 hover:bg-green-900 text-white font-bold rounded-xs'>Services</li>
                <li className='px-2 py-1.5 hover:bg-green-900 text-white font-bold rounded-xs'>About us</li>
            </ul>

            <ul className='flex gap-1'>
                <li className='px-2 py-1.5 hover:bg-green-900 rounded-xs text-white font-bold'>
                    <Link href={login()} className='cursor-pointer'>Login</Link>
                </li>
                <li className='px-2 py-1.5 hover:bg-green-900 rounded-xs text-white font-bold'>
                    <Link href={register()} className='cursor-pointer'>Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default HomeNavigation
