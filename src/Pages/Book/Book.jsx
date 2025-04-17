import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({book}) => {
    const {bookId, image, author, bookName, tags, rating,  category, review, publisher, yearOfPublishing, totalPages} = book;
    return (
       <div className='p-6 border-2 border-base-300 rounded-2xl'>
        <div className='bg-[#F3F3F3] flex rounded-2xl'>
            <img className='h-[166px] w-[130px] mx-auto my-8' src={image} alt="" />
        </div>
        <div>
            <button className='work-sans mr-3 bg-[#90bd8918] py-[7px] px-[16px] text-[16px] mt-6 text-[#23BE0A] rounded-full '>{tags[0]}</button>
            <button className='work-sans mr-3 bg-[#90bd8918] py-[7px] px-[16px] text-[16px] mt-6 text-[#23BE0A] rounded-full '>{tags[1]}</button>
            <h2 className='font-bold text-2xl text-[#131313] my-4'>{bookName}</h2>
            <span className='flex justify-between items-center'>
            <p className='mb-5 text-[16px] work-sans font-medium'>By : {author}</p>
            <Link to={`/bookDetails/${bookId}`}>
            <button className='btn rounded mb-3 work-sans bg-[#23BE0A] px-3 py-1 text-white font-medium'>Show Details</button>
            </Link>
            </span>
            <div className='text-[16px] flex justify-between pt-5 border-t-2 border-dashed border-base-300 work-sans'>
                <p>{category}</p>
                <span className='flex gap-2 items-center'>
                <p>{rating}</p>
                <CiStar />
                </span>
            </div>
        </div>
       </div>
    );
};

export default Book;