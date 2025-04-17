import React from 'react';
import bookimage from '../../../assets/headerbook.png'

const Banner = () => {
    return (
        <div className='md:flex justify-center mt-10 bg-[#F3F3F3] items-center lg:h-[554px] px-5 py-10 md:px-10 lg:px-30 rounded-3xl mx-5'>
          <div>
            <h1 className='mb-12 font-bold text-4xl md:text-5xl lg:text-[56px] text-[#131313]'>Books to freshen up your bookshelf</h1>
            <button className='work-sans text-[16px] md:text-[20px] py-5 px-7 bg-[#23BE0A] rounded-lg font-bold text-white'> View The List</button>
          </div>
          <div>
            <img className='h-[394px] w-fit object-cover' src={bookimage} alt="" />
          </div>

        </div>
    );
};

export default Banner;