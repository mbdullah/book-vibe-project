import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStorage } from '../../Utility/UtilityDB';
import SingleListedBook from './SingleListedBook';

const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    
    useEffect(()=>{
        const bookId = getStorage();
        const parsBookId = bookId.map(id => parseInt(id));
        const myReadList = data.filter(book => parsBookId.includes(book.bookId));
        setReadList(myReadList);
    },[data])
    return (
        <div className='mt-10 mb-25'>
            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      {
        readList.map(singleBook => <SingleListedBook key={singleBook.bookId} singleBook = {singleBook}></SingleListedBook>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Wishlist Books</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBook;