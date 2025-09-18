import React from 'react'
import { Head } from '@inertiajs/react'
import HomeNavigation from '../common/home-navigation'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Home() {

    return (
        <>
            <Head title="Private Code Library" />

            <HomeNavigation />

            <main className='w-full'>

                <div className='flex flex-wrap sm:px-5 items-center'>
                    <div className='md:w-[50%] w-full'>
                        <DotLottieReact
                            // className='max-h-[100px]'
                            height={250}
                            src="/images/coding.lottie"
                            loop
                            autoplay
                        />
                    </div>

                    <div className='md:w-[50%] w-full'>
                        <div className='sm:px-0 px-4'>
                            <h1 className='font-semibold lg:text-7xl text-5xl mb-2'>Code Library</h1>
                            <p className='font-thin text-lg '>Keep your code organized, searchable, and accessible whether it's a full project or a quick snippet. Platforms like GitHub, CodeKeep, and CodePen help you save time, stay consistent, and revisit your work whenever inspiration strikes.</p>
                        </div>

                    </div>
                </div>


            </main>

        </>
    )
}
