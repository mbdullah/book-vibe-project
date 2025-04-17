import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';


const Books = ({books}) => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => {
            setAllBooks(data)
        })
    },[])
    return (
        <div className='mb-25 px-5'>
            <h2 className='font-bold text-[40px] text-center mb-9 mt-25'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
        </div>
    );
};

export default Books;