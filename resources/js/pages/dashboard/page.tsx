import React from 'react'
import { DropdownMenu, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Head } from '@inertiajs/react'
import { Search } from 'lucide-react'
import Card from './components/card'


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
            <Head title='Codebase Libraries' />

            {/* Filters */}
            <div className='flex justify-around flex-wrap gap-2'>

                <div className='flex'>
                    <div className="flex items-center border border-gray-300 rounded-lg px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                        <Search className="h-5 w-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Find your code snippets"
                            className="w-full ml-2 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                        />
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


                <div className=''>
                    <button type="button" className='px-2 py-2 bg-green-600 hover:bg-green-700 cursor-pointer rounded-sm'>Add Code</button>
                </div>

            </div>

            {/* Code Thumbnails + Preview */}
            <div className='flex flex-wrap p-5 justify-center'>

                <Card />
                <Card />
                <Card />
                <Card />

                <Card />

            </div>
            
            {/* Pagination */}
            <div>
                    
            </div>


        </section>
    )
}

export default Dashboard