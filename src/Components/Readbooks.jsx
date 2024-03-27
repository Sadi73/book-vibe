import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pageIcon from '../assets/pageIcon.svg';
import publisherIcon from '../assets/publisherIcon.svg';
import yearIcon from '../assets/yearIcon.svg';

const Readbooks = ({ allBooks, sortType }) => {
    const allReadBookIds = localStorage.getItem('read');

    const readbookdetails = allBooks.filter(book => allReadBookIds?.includes(book.bookId));
    const [sortedBooks, setSortedBooks] = useState([]);

    useEffect(() => {
        if (readbookdetails?.length > 0) {
            if (sortType === null) {
                setSortedBooks([...readbookdetails])
            }
            else if (sortType === 'rating') {
                readbookdetails.sort((a, b) => b.rating - a.rating);
                setSortedBooks([...readbookdetails])
            }
            else if (sortType === 'page') {
                readbookdetails.sort((a, b) => b.totalPages - a.totalPages);
                setSortedBooks([...readbookdetails])
            }
            else if (sortType === 'year') {
                readbookdetails.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
                setSortedBooks([...readbookdetails])
            }
        }
    }, [allBooks, sortType]);

    return (
        <div>
            {sortedBooks?.length > 0 &&
                sortedBooks.map(readBook =>
                    <div key={readBook?.bookId} className="card card-side bg-base-100 shadow-xl p-10 mb-5 gap-10 items-center">
                        <figure><img src={readBook?.image} className='w-64 h-72' alt="Movie" /></figure>
                        <div className="w-[60%] space-y-3">
                            <h2 className="card-title text-3xl">{readBook?.bookName}</h2>
                            <p className='font-bold'>By: {readBook?.author}</p>

                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                                <p>Tag {readBook.tags.map((tag, index) => <span key={index} className='bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] mx-2 px-3 py-1'>{tag}</span>)}</p>

                                <div className='flex gap-2'>
                                    <img src={yearIcon} alt="" />
                                    <p>Year of Publish: {readBook?.yearOfPublishing}</p>
                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                                <div className='flex gap-2'>
                                    <img src={publisherIcon} alt="" />
                                    <p>Publisher: {readBook?.publisher}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={pageIcon} alt="" />
                                    <p>Page: {readBook?.totalPages}</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center lg:gap-5'>
                                <p className='bg-[#328EFF] bg-opacity-5 text-[#328EFF] px-5 py-2 rounded-xl'>Category: {readBook?.category}</p>
                                <p className='bg-[#FFAC33] bg-opacity-5 text-[#FFAC33] px-5 py-2 rounded-xl'>Rating: {readBook?.rating}</p>
                                <Link to={`/details/${readBook?.bookId}`}><button className='bg-[#23BE0A] text-white p-3 rounded-xl'>View Details</button></Link>
                            </div>
                        </div>
                    </div>
                )

            }

        </div>
    );
};

export default Readbooks;