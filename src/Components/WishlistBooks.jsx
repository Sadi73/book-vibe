import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pageIcon from '../assets/pageIcon.svg';
import publisherIcon from '../assets/publisherIcon.svg';
import yearIcon from '../assets/yearIcon.svg';


const WishlistBooks = ({ allBooks, sortType }) => {
    // const navigate = useNavigate();
    const allWishListBookIds = localStorage.getItem('wishlist');
    const wishListbookdetails = allBooks.filter(book => allWishListBookIds?.includes(book.bookId));

    const [sortedBooks, setSortedBooks] = useState([]);

    useEffect(() => {
        if (wishListbookdetails?.length > 0) {
            if (sortType === null) {
                setSortedBooks([...wishListbookdetails])
            }
            else if (sortType === 'rating') {
                wishListbookdetails.sort((a, b) => b.rating - a.rating);
                setSortedBooks([...wishListbookdetails])
            }
            else if (sortType === 'page') {
                wishListbookdetails.sort((a, b) => b.totalPages - a.totalPages);
                setSortedBooks([...wishListbookdetails])
            }
            else if (sortType === 'year') {
                wishListbookdetails.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
                setSortedBooks([...wishListbookdetails])
            }
        }
    }, [allBooks, sortType]);


    return (
        <div>
            {sortedBooks?.length > 0 &&
                sortedBooks.map(wishListBook =>
                    <div key={wishListBook?.bookId} className="card card-side bg-base-100 shadow-xl p-10 mb-5 gap-10 items-center">
                        <figure><img src={wishListBook?.image} className='w-64 h-72' alt="Movie" /></figure>
                        <div className="w-[60%] space-y-3">
                            <h2 className="card-title text-3xl">{wishListBook?.bookName}</h2>
                            <p className='font-bold'>By: {wishListBook?.author}</p>

                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                                <p>Tag {wishListBook.tags.map((tag, index) => <span key={index} className='bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] mx-2 px-3 py-1'>{tag}</span>)}</p>

                                <div className='flex gap-2'>
                                    <img src={yearIcon} alt="" />
                                    <p>Year of Publish: {wishListBook?.yearOfPublishing}</p>
                                </div>
                            </div>


                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                                <div className='flex gap-2'>
                                    <img src={publisherIcon} alt="" />
                                    <p>Publisher: {wishListBook?.publisher}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={pageIcon} alt="" />
                                    <p>Page: {wishListBook?.totalPages}</p>
                                </div>
                            </div>

                            <div className='flex flex-col md:flex-row items-center lg:gap-5'>
                                <p className='bg-[#328EFF] bg-opacity-5 text-[#328EFF] px-5 py-2 rounded-xl'>Category: {wishListBook?.category}</p>
                                <p className='bg-[#FFAC33] bg-opacity-5 text-[#FFAC33] px-5 py-2 rounded-xl'>Rating: {wishListBook?.rating}</p>
                                <Link to={`/details/${wishListBook?.bookId}`}><button className='bg-[#23BE0A] text-white p-3 rounded-xl'>View Details</button></Link>
                            </div>
                        </div>
                    </div>
                )

            }

        </div>
    );
};

export default WishlistBooks;