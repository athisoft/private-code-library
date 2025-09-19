import React from 'react'
import { Head } from '@inertiajs/react';
import HomeNavigation from '@/pages/common/home-navigation';
import { type PropsWithChildren } from 'react';

function CustomAppLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Head title="Private Code Library" />

            <HomeNavigation />

            <main className="min-h-full w-full">

            {children}

            </main>

            <footer className='text-center py-2 justify-self-end bg-green-950'>
                <p>© {currentYear}
                    <a className='font-semibold' href={`https://www.athisoft.in`} target='_blank' rel='noopener noreferrer'> Athisoft</a>. All rights reserved. Crafted with care and code.</p>
            </footer>

        </>
    )
}

export default CustomAppLayout