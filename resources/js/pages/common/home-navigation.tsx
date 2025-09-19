import { login, register, home, dashboard } from '@/routes'
import { Link, usePage } from '@inertiajs/react'
import React from 'react'

type props = {
    isLoggedin: boolean;
}

function HomeNavigation({ isLoggedin }: props) {
    const { url } = usePage()

    console.log(isLoggedin)

    return (
        <nav className='flex flex-wrap py-0.5 min-w-dvw bg-green-700 justify-around'>
            <ul className='flex flex-wrap gap-2'>
                <li className={`hover:bg-green-900 text-white font-semibold rounded-xs ${url == '/' ? 'bg-green-800' : ''}`}>
                    <Link href={home()} className='cursor-pointer inline-block px-2 py-1.5'>Home</Link></li>
                <li className={`hover:bg-green-900 text-white font-semibold rounded-xs ${url.startsWith('/services') ? 'bg-green-800' : ''}`}>
                    <Link href={"#"} className='cursor-pointer inline-block px-2 py-1.5'>Services</Link></li>
                <li className={`hover:bg-green-900 text-white font-semibold rounded-xs ${url.startsWith('/about-us') ? 'bg-green-800' : ''}`}>
                    <Link href={"#"} className='cursor-pointer inline-block px-2 py-1.5'>About us</Link></li>
            </ul>

            <ul className='flex gap-1'>
                {!isLoggedin && (
                    <>
                        <li className={`hover:bg-green-900 text-white font-semibold rounded-xs ${url.startsWith('/login') ? 'bg-green-800' : ''}`}>
                            <Link href={login()} className='cursor-pointer inline-block px-2 py-1.5'>Login</Link>
                        </li>
                        <li className={`hover:bg-green-900 text-white font-semibold rounded-xs ${url.startsWith('/register') ? 'bg-green-800' : ''}`}>
                            <Link href={register()} className='cursor-pointer inline-block px-2 py-1.5'>Register</Link>
                        </li>
                    </>
                )}

                {isLoggedin && (
                    <>
                        <li className={`hover:bg-green-900 text-white font-semibold rounded-xs ${url.startsWith('/dashboard') ? 'bg-green-800' : ''}`}>
                            <Link href={dashboard()} className='cursor-pointer inline-block px-2 py-1.5'>Dashboard</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default HomeNavigation
