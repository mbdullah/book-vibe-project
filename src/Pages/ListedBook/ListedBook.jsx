import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStorage } from '../../Utility/UtilityDB';
import SingleListedBook from './ReadBook';
import { RiArrowDropDownLine } from "react-icons/ri";

const ListedBook = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    
    useEffect(()=>{
        const bookId = getStorage();
        const parsBookId = bookId.map(id => parseInt(id));
        const myReadList = data.filter(book => parsBookId.includes(book.bookId));
        setReadList(myReadList);
    },[data])


    const handleSort = type => {
      setSort(type)
      if (type === "pages") {
        const sortByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setReadList(sortByPages)
      }
      if (type === "ratings") {
        const sortByRatings = [...readList].sort((a, b)=> a.rating - b.rating);
        setReadList(sortByRatings);
      }
    }
    return (
        <div>
          <div className='bg-[#F3F3F3] rounded-2xl mb-8 mt-4'>
            <h2 className='py-8 text-center text-2xl md:text-3xl font-bold work-sans'>Books</h2>
          </div>
          <div className='text-center'>
          <div className="dropdown">
  <div tabIndex={0} role="button" className="flex items-center bg-[#23BE0A] py-2 px-5 text-white work-sans text-lg font-semibold rounded-lg">Sort By<RiArrowDropDownLine size={30}/></div>
  <ul tabIndex={0} className="work-sans dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=> handleSort("pages")}>Pages</a></li>
    <li><a onClick={()=> handleSort("ratings")}>Ratings</a></li>
  </ul>
</div>
          </div>
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
      <h2>fghjhgjhg</h2>
    </TabPanel>
  </Tabs>
        </div>
        </div>
    );
};

export default ListedBook;