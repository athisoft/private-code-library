import React from 'react'
import { Head } from '@inertiajs/react'
import HomeNavigation from '../common/home-navigation'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Home() {

    return (
        <div>
            <Head title="Private Code Library" />

            <HomeNavigation />

            <main>
                <DotLottieReact
                    src="/images/coding.lottie"
                    loop
                    autoplay
                />

            </main>

        </div>
    )
}
