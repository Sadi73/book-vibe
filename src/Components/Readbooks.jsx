import React from 'react';
import { Link } from 'react-router-dom';

const Readbooks = ({ allBooks }) => {
    const allReadBookIds = localStorage.getItem('read');

    const readbookdetails = allBooks.filter(book => allReadBookIds?.includes(book.bookId));


    return (
        <div>
            {readbookdetails?.length > 0 &&
                readbookdetails.map(readBook =>
                    <div key={readBook?.bookId} className="card card-side bg-base-100 shadow-xl p-10 mb-5">
                        <figure><img src={readBook?.image} className='w-64 h-72' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{readBook?.bookName}</h2>
                            <p>By: {readBook?.author}</p>
                            <p>Tag {readBook.tags.map((tag, index) => <span key={index}>{tag}</span>)}</p>
                            <p>Year of Publish: {readBook?.yearOfPublishing}</p>
                            <div className="">
                                <p>Publisher: {readBook?.publisher}</p>
                                <p>Page: {readBook?.totalPages}</p>
                            </div>
                            <div className='flex items-center'>
                                <p>Category: {readBook?.category}</p>
                                <p>Rating: {readBook?.rating}</p>
                                <Link to={`/details/${readBook?.bookId}`}><button className='bg-[#23BE0A] text-white p-3'>View Details</button></Link>
                            </div>
                        </div>
                    </div>
                )

            }

        </div>
    );
};

export default Readbooks;