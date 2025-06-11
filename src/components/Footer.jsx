import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className="mb-5 w-40 rounded-xl" src={assets.logo} alt="CareConnect Logo" />

          <p className='w-full md:w-2/3 text-gray-600 leading-6'>💙 CareConnect — Bridging patients and doctors with seamless online appointments. <br />
🕒 Book smarter. Care better. Anytime, anywhere.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 9893432010</li>
            <li>pancholianurodh@gmail.com</li>
            <li>created by Anurodh Pancholi</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>anurodh@ CareConnect.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
