import React from 'react';
import { Link } from 'react-router-dom';

const Readbooks = ({ allBooks }) => {
    const allReadBookIds = localStorage.getItem('read');

    const readbookdetails = allBooks.filter(book => allReadBookIds?.includes(book.bookId));


    return (
        <div>
            {readbookdetails?.length > 0 &&
                readbookdetails.map(readBook =>
                    <div key={readBook?.bookId} className="card card-side bg-base-100 shadow-xl p-10 mb-5 gap-10">
                        <figure><img src={readBook?.image} className='w-64 h-72' alt="Movie" /></figure>
                        <div className="w-[60%] space-y-2">
                            <h2 className="card-title text-3xl">{readBook?.bookName}</h2>
                            <p className='font-bold'>By: {readBook?.author}</p>
                            <p>Tag {readBook.tags.map((tag, index) => <span key={index}className='text-[#23BE0A] mx-5'>{tag}</span>)}</p>
                            <p>Year of Publish: {readBook?.yearOfPublishing}</p>
                            <div className="flex gap-10">
                                <p>Publisher: {readBook?.publisher}</p>
                                <p>Page: {readBook?.totalPages}</p>
                            </div>
                            <div className='flex items-center gap-10'>
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