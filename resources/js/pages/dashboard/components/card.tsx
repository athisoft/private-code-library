import React from 'react'

function Card() {
    return (
        <div className="relative w-full sm:w-fit card m-2">

            <div className="sm:min-w-[250px] sm:min-h-[250px] min-h-[200px] w-full bg-amber-400 rounded-sm relative">
                <img className='w-fit h-[250px]' src="/images/Placeholder.svg" alt="" />

                <div className='absolute bottom-13 overflow-hidden text-center px-3 py-1 h-fit w-full' style={{backgroundColor:"red"}}>
                  <p className=''>Code is Overpowered!</p>
                </div>
            </div>


            <button
                type="button"
                className="absolute bottom-2 right-2 py-2 px-3 bg-blue-600 text-white font-bold rounded-sm cursor-pointer hover:bg-blue-700">
                Copy Code
            </button>
        </div>
    )
}

export default Card
