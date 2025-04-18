import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setStorage } from '../../Utility/UtilityDB';
import Swal from 'sweetalert2';


const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const allBooks = useLoaderData();

    const singleBook = allBooks.find(book => book.bookId === bookId);

    const {image, author, bookName, tags, rating,  category, review, publisher, yearOfPublishing, totalPages} = singleBook

    const handleAddToMarkAsRead = id =>{
        Swal.fire({
            title: 'Success!',
            text: 'Your Marks As Read successful.',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
        setStorage(id)
    }

    return (
        <div className='lg:flex gap-12 mb-[100px] mt-[50px] mx-5'>
            <div className='bg-[#F3F3F3] p-[74px] lg:w-[50%] rounded-3xl'>
                <img className='lg:w-[425px] lg:h-[565px] md:w-[350] md:h-[440]' src={image} alt="" />
            </div>
            <div className='lg:w-[50%]'>
                <h2 className='font-bold text-[40px]'>{bookName}</h2>
                <p className='font-medium text-xl mt-4  work-sans'>By : {author}</p>
                <div className="divider"></div>
                <p className='font-medium text-xl work-sans text-[#131313] opacity-80'>{category}</p>
                <div className="divider"></div>
                <p className='text-[16px] work-sans'><span className='font-bold'>Review : </span><span className='text-[#131313] opacity-70'>{review}</span></p>
                <p> <span className='work-sans font-bold text-[16px] mr-5'>Tag</span> <button className='work-sans mr-3 bg-[#90bd8918] py-[7px] px-[16px] text-[16px] mt-6 text-[#23BE0A] rounded-full '>#{tags[0]}</button>
                <button className='work-sans mr-3 bg-[#90bd8918] py-[7px] px-[16px] text-[16px] mt-6 text-[#23BE0A] rounded-full '>#{tags[1]}</button></p>
                <div className="divider"></div>
                <div className='flex gap-20 work-sans'>
                <ul className='text-[#131313] opacity-70'>
                    <li>Number of Pages :</li>
                    <li>Publisher :</li>
                    <li>Year of Publishing :</li>
                    <li>Rating :</li>
                </ul>
                <ul className='font-bold'>
                    <li>{totalPages}</li>
                    <li>{publisher}</li>
                    <li>{yearOfPublishing}</li>
                    <li>{rating}</li>
                </ul>
                </div>
                <div className='flex mt-8 work-sans'>
                <button onClick={()=>handleAddToMarkAsRead(id)} className="border-2 border-gray-300 hover:border-none hover:text-white text-lg font-semibold hover:bg-[#23BE0A] py-[14px] px-7 rounded-lg mr-4">Mark as Read</button>
                <button className="border-2 border-gray-300 hover:border-none hover:text-white text-lg font-semibold hover:bg-[#59C6D2] py-[14px] px-7 rounded-lg">Add To Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;