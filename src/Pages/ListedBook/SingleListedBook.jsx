import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { SlNotebook } from "react-icons/sl";

const SingleListedBook = ({singleBook}) => {
    const {image, author, bookName, tags, rating,  category,  yearOfPublishing, publisher, totalPages} = singleBook
    return (
        <div className='md:flex border border-gray-200 p-6 gap-6 rounded-2xl my-7 mx-5'>
            <div className='bg-[#F3F3F3] py-[52px] px-[74px] rounded-2xl'>
                <img className='w-[129px] h-[172px]' src={image} alt="" />
            </div>
            <div>
                <h3 className='font-bold text-2xl mt-5 md:mt-0'>{bookName}</h3>
                <p className='font-medium work-sans my-4 text-[#131313] opacity-80 text-[16px]'>By : {author}</p>
                <span className='lg:flex justify-around items-center'>
                    <p className='mb-4 lg:mb-0'><span className='font-bold work-sans text-[16px] mr-3'>Tag</span>  <span className='work-sans mr-3 bg-[#90bd8918] py-[7px] px-[16px] text-[16px] mt-6 text-[#23BE0A] rounded-full '>#{tags[0]}</span>
                    <span className='work-sans mr-3 bg-[#90bd8918] py-[7px] px-[16px] text-[16px] mt-6 text-[#23BE0A] rounded-full '>#{tags[1]}</span></p>
                    <span className='flex items-center lg:ml-4'>
                    <CiLocationOn />
                    <p className='work-sans ml-2 text-[16px] text-[#131313] opacity-80'> Year of Publishing : { yearOfPublishing}</p>
                    </span>
                </span>
                <span className='flex items-center mt-4'>
                <span className='flex items-center mr-4'>
                <IoMdContacts />
                    <p className='ml-2 text-[16px] text-[#131313] opacity-60 work-sans'>Publisher : {publisher}</p>
                </span>
                <span className='flex items-center'>
                <SlNotebook />
                    <p className='work-sans text-[#131313] opacity-60 text-[16px] ml-2'>Page {totalPages}</p>
                </span>
                </span>
                <div className="divider w-full"></div>
                <button className='mb-4 work-sans mr-3 bg-[#328eff27] text-[#328EFF] text-[16px] py-3 px-5 rounded-full'>Category : {category}</button>
                <button className='mb-4 work-sans mr-3 bg-[#ffad3327] text-[#FFAC33] text-[16px] px-5 py-3 rounded-full'>Rating : {rating}</button>
                <button className='mb-4 work-sans mr-3 bg-[#23BE0A] text-white text-[16px] py-3 px-5 rounded-full'>View Details</button>
            </div>
        </div>
    );
};

export default SingleListedBook;