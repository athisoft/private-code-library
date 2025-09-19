import React from 'react'
import { Head, Link } from '@inertiajs/react'
import HomeNavigation from '../common/home-navigation'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import homecss from './home.module.css'


export default function Home() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Head title="Private Code Library" />

            <HomeNavigation />

            <main className="min-h-full w-full">

                <section className='sm:px-5 items-center  grid grid-cols-1 md:grid-cols-2'>

                    <div className='w-full'>
                        <DotLottieReact
                            // className='max-h-[100px]'
                            height={250}
                            src="/images/coding.lottie"
                            loop
                            autoplay
                        />
                    </div>

                    <div className='w-full'>
                        <div className='sm:px-0 px-4'>
                            <h1 className={'font-semibold lg:text-7xl text-5xl inline-flex items-baseline gap-2'}>
                                Code <span className={homecss.typewriter}> Library</span></h1>
                            <p className='font-thin text-lg '>Keep your code organized, searchable, and accessible whether it's a full project or a quick snippet. Platforms like GitHub, CodeKeep, and CodePen help you save time, stay consistent, and revisit your work whenever inspiration strikes.</p>
                        </div>

                    </div>

                </section>

            </main>

            <footer className='text-center py-2 justify-self-end bg-green-950'>
                <p>© {currentYear}
                    <a className='font-semibold' href={`https://www.athisoft.in`} target='_blank' rel='noopener noreferrer'> Athisoft</a>. All rights reserved. Crafted with care and code.</p>
            </footer>

        </>
    )
}
