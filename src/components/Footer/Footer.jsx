import React from 'react';
import { IoLogoTwitter } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
     <div className='mb-10 bg-[#F3F3F3] py-10 lg:py-20'>
      <div className='text-center justify-center'>
        <img className='w-30 h-30 mx-auto mb-3' src="../../../assets/headerbook.png" alt="" />
        <h4 className='font-bold text-2xl mb-2'>Book Vib Industries Ltd.</h4>
        <h4 className='font-semibold text-xl mb-5'>Providing reliable tech since 1992</h4>
        <p className='text-lg'>Copyright © 2025 - All right reserved</p>
        <span className='flex gap-5 justify-center mt-10'>
        <IoLogoTwitter size={30}/>
        <FaYoutube size={30}/>
        <FaFacebookF size={30}/>
        </span>

      </div>
     </div>
    );
};

export default Footer;