import React,{useState} from 'react';
import { AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className='flex relative px-4 justify-between items-center max-w-[1240px] mx-auto'>
        <h1 className='w-full font-bold px-4 py-2 text-[#00df9a] text-3xl'>Big Data</h1>
        <ul className='md:flex text-sm hidden whitespace-nowrap'>
            <li className='p-4'>Accueil</li>
            <li className='p-4'>Compagnie</li>
            <li className='p-4'>Ressources</li>
            <li className='p-4  '>A propos</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='flex z-10 md:hidden'>
            {nav?<AiOutlineClose onClick={handleNav} size={20} className='cursor-pointer'/>:<AiOutlineMenu onClick={handleNav} size={20} className='cursor-pointer'/>}
        </div>
        {/** Backdrop */}
        {nav && <div onClick={handleNav} className='fixed z-0 top-0 left-0 h-full w-full bg-black/90'></div>}
        <div className={nav?'fixed z-10 h-full top-0 left-0 w-[60%] max-w-[350px] border-r border-r-gray-800 bg-[#000300] duration-300 ease-in-out shadow-3xl':'fixed h-full top-0 left-[-100%] w-[60%] max-w-[350px] border-r border-r-gray-800 bg-[#000300] duration-300 ease-in-out shadow-3xl'}>
        <h1 className='w-full font-bold px-4 mx-4 py-2 text-[#00df9a] text-3xl'>REACT.</h1>
          <ul className='pt-6 uppercase p-4 text-sm'>
                <li className='p-4 border-b border-gray-800'>Accueil</li>
                <li className='p-4 border-b border-gray-800'>Compagnie</li>
                <li className='p-4 border-b border-gray-800'>Ressources</li>
                <li className='p-4 border-b border-gray-800'>A propos</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
