import React from 'react'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='max-w-[800px] px-4 duration-300 mt-[-96px] max-h-[600px] flex flex-col h-screen mx-auto text-center justify-center'>
        <p className='text-[#00df9a] font-bold p-2 uppercase'>Growing with Data Analytique</p>
        <h1 className='mx-text-7xl duration-300 sm:text-6xl text-4xl font-bold md:py6'>Grow with data</h1>
        <div className='flex justify-center'>
            <p className='md:text-5xl sm:text:4xl text-xl font-bold'>Fast, flexible financing for</p>
            <Typed className='md:text-5xl sm:text:4xl text-xl font-bold pl-2 text-slate-400' loop  strings={["BTB","BTC","SASS"]} typeSpeed={120} backSpeed={140} />
        </div>
        <div>
            <p className='md:text-2xl my-2 text-gray-500 sm:text-sm text-xl font-bold'>Monitor your Data Analylitique to increase revenue for BTB, BTC & SASS plateformes.</p>
        </div>
        <div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 text-black py-3 text-sm'>Get started</button>
        </div>
    </div>
  )
}

export default Hero;
