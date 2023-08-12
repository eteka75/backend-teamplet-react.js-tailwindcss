import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 '>
        <div className='max-w-[1240px] px-4 mx-auto grid lg:grid-cols-3 w-full'>
            <div className='col-span-2'>
                <h1 className='md:text-4xl  sm:text:3xl text-xl pt-2 font-bold'>Want tips & tricks to optimize your flow ?</h1>
                <p className='text-slate-500'>Sign up to our Newsletter and stay up to date.</p>
            </div>
            <div className='mb-2'>
                <div className='flex flex-coll justify-content-between space-x-2 items-center sm:flex-row'>
                    <input className='px-3 focus:outline-none h-10 border border-slate-700 w-full text-black rounded-md' type="text" name='search' placeholder='Entrez votre email...'/>
                    <button className='bg-[#00df9a] h-10 w-[200px] rounded-md font-medium my-6 text-black py-3 text-sm'>S'abonner </button>
                </div>
                <p className='text-slate-300 text-sm'>Nous assurons la protections de vos données personnelles. Lisez nos <span className='text-[#00df9a]'>conditions de protections des données </span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
