import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
const Footer = () => {
  return (
    <>
    <footer className="text-gray-600 body-font mt-5 ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
    <Link to={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <div aria-label="Home. logo" className="flex justify-between items-center" role="img">
          {/* <h1>asd</h1> */}
          {/* <img className="w-12 md:w-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/centre_aligned_simple-Svg1.svg" alt="logo" /> */}
          <img className="w-24 md:w-64" src={logo} alt="logo" />
          
         </div>
         
    </Link>

  <p className="text-sm text-gray-500 hover:text-gray-700 focus:text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> Developed By Students Of IT Department
    </p>
  </div>
</footer>
    </>
  )
}

export default Footer
