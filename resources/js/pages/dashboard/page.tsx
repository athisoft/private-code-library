import React from 'react'
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Head } from '@inertiajs/react'


function Dashboard() {

    const languages = {
        PHP: 'php',
        CSS: 'css',
        Java: 'java',
        ReactJs: 'reactjs',
        Tailwind: 'tailwind',
        Bootstrap: 'bootstrap',
    }

    const date = {
        Latest: 'latest',
        Oldest: 'oldest',
        Today: 'today',
        Week: 'week',
        Month: 'month',
        Year: 'year',
    }

    return (
        <section className=''>
            <Head title='Codebase Libraries'/>

            {/* Filters */}
            <div className='flex'>
                <div className='flex'>
                    <input type="text" placeholder='Find your code snippets'/>
                    <button>Search</button>
                </div>

                <select className='px-2 py-2 rounded-sm' name="language" id="language">
                    <option className='bg-green-600' value="">Select Language</option>
                    {Object.entries(languages).map(([key, value]) => (
                        <option key={key} className="bg-green-600" value={key}>
                            {key}
                        </option>
                    ))}
                </select>

                <select className='px-2 py-2 rounded-sm' name="date" id="date">
                    <option className='bg-green-600' value="">Filter by Date</option>
                    {Object.entries(date).map(([key, value]) => (
                        <option key={key} className="bg-green-600" value={key}>
                            {key}
                        </option>
                    ))}
                </select>

            </div>

            {/* Code Thumbnails + Preview */}
            <div>

            </div>


        </section>
    )
}

export default Dashboard