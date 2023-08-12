import React from 'react';
import single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';

function Cards() {
  return (
    <div className='w-full bg-white pt-20 pb-6 text-black px-4'>
        <div className='max-w-[1240px] px-4 mx-auto py-8 gap-8 grid lg:grid-cols-3 w-full'>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg border border-slate-100 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={single} alt="Single" />
                <h2 className='text-2xl font-bold text-center uppercase py-8'>Single user</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb de stockage</p>
                    <p className='py-2 border-b mx-8'>1 utilisateur</p>
                    <p className='py-2 border-b mx-8 mb-8'>Envoyez plus de 2GB de données</p>
                </div>
                <button className='bg-[#00df9a] shadow hover:font-bold w-[200px] rounded-md mb-8 font-medium px-6 mx-auto text-black py-3 text-sm'>Démarrer un essai</button>
            </div>
            <div className='w-full border bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg border border-slate-100 hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt="Single" />
                <h2 className='text-2xl font-bold text-center uppercase py-8'>Double user</h2>
                <p className='text-center text-4xl font-bold'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb de stockage</p>
                    <p className='py-2 border-b mx-8'>10 utilisateurs</p>
                    <p className='py-2 border-b mx-8 mb-8'>Envoyez plus de 500GB de données</p>
                </div>
                <button className='text-[#00df9a] shadow hover:font-bold w-[200px] rounded-md mb-8 font-medium px-6 mx-auto bg-black py-3 text-sm'>Démarrer un essai</button>
            </div>
            <div className='w-full border shadow-xl flex flex-col p-4 my-4 rounded-lg border border-slate-100 hover:scale-105 duration-300'>

            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={triple} alt="Single" />
                <h2 className='text-2xl font-bold text-center uppercase py-8'>Double user</h2>
                <p className='text-center text-4xl font-bold'>$249</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 Gb de stockage</p>
                    <p className='py-2 border-b mx-8'>1000 utilisateurs</p>
                    <p className='py-2 border-b mx-8 mb-8'>Envoyez plus de 10Tb de données</p>
                </div>
                <button className='bg-[#00df9a] shadow hover:font-bold w-[200px] rounded-md mb-8 font-medium px-6 mx-auto text-black py-3 text-sm'>Démarrer un essai</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
