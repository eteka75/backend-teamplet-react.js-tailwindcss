import React from 'react';
import Laptop from '../assets/laptop.jpg';

function Analytics() {
  return (
    <div className='w-full bg-white text-black px-4 py-10'>
        <div className="max-w-[1240px] px-4 mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTIQUE DASHBOARD</p>
                <h1 className='md:text-4xl font-bold sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</h1>
                <p className='leading-7 lead'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt deserunt odit nulla officia, vitae distinctio molestiae magni, nemo, illo nihil a earum iste vel molestias unde dicta explicabo ducimus velit optio amet. Non sapiente veniam praesentium modi fuga, esse voluptatibus laboriosam in necessitatibus inventore exercitationem! Eveniet rem ea, consectetur vero quis eligendi itaque vel quas, voluptatum odit asperiores maxime perspiciatis? Temporibus voluptates maxime provident at est quaerat necessitatibus et nesciunt ullam ut, porro fuga. Corrupti adipisci ab, at harum quas perspiciatis tempora itaque, sunt hic vitae quisquam, corporis et quasi. Ratione possimus dolorum quidem id necessitatibus aut. Consequatur, dolorum! Maiores.
                </p>
                <div className='mx-auto md:mx-0'>

                <button className='bg-[#000300] font-medium  hover:bg-[#00df9a] hover:text-black hover:shadow-lg duration-300 my-4 text-[#00df9a] rounded-md py-2 px-6'>Get started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics
