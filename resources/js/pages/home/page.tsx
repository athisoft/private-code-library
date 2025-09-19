import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import homecss from './home.module.css'
import CustomAppLayout from '@/layouts/custom/custom-app-layout';

export default function Home() {


    return (
        <>
        <CustomAppLayout>
            <section className='sm:px-5 items-center  grid grid-cols-1 md:grid-cols-2'>

                <div className='w-full flex justify-center'>
                    <DotLottieReact
                        className='max-w-[500px]'
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
        </CustomAppLayout>
        </>
    )
}
