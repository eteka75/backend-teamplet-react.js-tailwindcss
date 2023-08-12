import React from 'react';
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaPinterest, FaFacebookSquare, FaTwitterSquare, FaGithub, FaGithubSquare, FaDribbbleSquare} from 'react-icons/fa'


function Footer() {
  return (
    <div className='max-w-[1240px] text-gray-100 px-4 mx-auto py-8 gap-8 grid lg:grid-cols-3 w-full'>
        <div>
            <h1 className='w-full font-bold px-4 py-2 text-[#00df9a] text-3xl'>REACT.</h1>
            <p className='py-4 text-sm text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum eum inventore eius cupiditate? Necessitatibus, veniam totam eligendi </p>
            <div className='flex md:w-[75%] text-gray-300 max-w-[300px] my-6 justify-between'>
                <FaFacebookSquare size={30} className="icon" />
                <FaInstagram size={30} className="icon" />
                <FaTwitterSquare size={30} className="icon" />
                <FaGithubSquare size={30} className="icon" />
                <FaDribbbleSquare size={30} className="icon" />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-md mb-4 text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Tarifs</li>
                    <li className='py-2 text-sm'>Documentations</li>
                    <li className='py-2 text-sm'>Ressources</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Docs</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-md mb-4 text-gray-400'>Compagny</h6>
                <ul>
                    <li className='py-2 text-sm'>A propos</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Presse</li>
                    <li className='py-2 text-sm'>Carrière</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-md mb-4 text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Accueil</li>
                    <li className='py-2 text-sm'>Compagnie</li>
                    <li className='py-2 text-sm'>Ressources</li>
                    <li className='py-2 text-sm'>A propos</li>
                    <li className='py-2 text-sm'>Contact</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-md mb-4 text-gray-400'>Légal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Conditions</li>
                    <li className='py-2 text-sm'>Cookies</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
