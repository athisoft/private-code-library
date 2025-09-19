import React, { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Head, usePage } from '@inertiajs/react';
import homecss from './home.module.css'
import CustomAppLayout from '@/layouts/custom/custom-app-layout';

type SharedProps = {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
        } | null;
    };
};

export default function Home() {
    const { props } = usePage<SharedProps>();

    const[isLoggedIn, setIsLoggedIn] = useState(props.auth.user !== null || false);

    useEffect(()=> {
        setIsLoggedIn(props.auth.user !== null);
    }, [props.auth.user])

    return (
        <>
            <CustomAppLayout isLoggedin={isLoggedIn}>
                <Head title="Home" />
                <section className='sm:px-5 items-center  grid grid-cols-1 md:grid-cols-2'>

                    <div className='w-full flex justify-center'>
                        <DotLottieReact
                            className='max-w-[800px]'
                            height={500}
                            width={500}
                            src="/images/coding.lottie"
                            loop
                            autoplay
                        />
                    </div>

                    <div className='w-full'>
                        <div className='sm:px-0 px-4'>
                            <h1 className={'font-semibold lg:text-7xl text-5xl inline-flex items-baseline gap-2'}>
                                Code <span className={homecss.typewriter}> Library</span></h1>
                            <p className='font-thin text-lg text-wrap lg:max-w-3/4'>Keep your code organized, searchable, and accessible whether it's a full project or a quick snippet. Platforms like GitHub, CodeKeep, and CodePen help you save time, stay consistent, and revisit your work whenever inspiration strikes.</p>
                        </div>

                    </div>

                </section>
            </CustomAppLayout>
        </>
    )
}
