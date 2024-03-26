import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const WishlistBooks = ({ allBooks }) => {
    const navigate = useNavigate();
    const allWishListBookIds = localStorage.getItem('wishlist');
    const wishListbookdetails = allBooks.filter(book => allWishListBookIds?.includes(book.bookId));

    return (
        <div>
            {wishListbookdetails?.length > 0 &&
                wishListbookdetails.map(wishListBook =>
                    <div key={wishListBook?.bookId} className="card card-side bg-base-100 shadow-xl p-10 mb-5">
                        <figure><img src={wishListBook?.image} className='w-64 h-72' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{wishListBook?.bookName}</h2>
                            <p>By: {wishListBook?.author}</p>
                            <p>Tag {wishListBook.tags.map((tag, index) => <span key={index}>{tag}</span>)}</p>
                            <p>Year of Publish: {wishListBook?.yearOfPublishing}</p>
                            <div className="">
                                <p>Publisher: {wishListBook?.publisher}</p>
                                <p>Page: {wishListBook?.totalPages}</p>
                            </div>
                            <div className='flex'>
                                <p>Category: {wishListBook?.category}</p>
                                <p>Rating: {wishListBook?.rating}</p>
                                <Link to={`/details/${wishListBook?.bookId}`}>View Details</Link>
                            </div>
                        </div>
                    </div>
                )

            }

        </div>
    );
};

export default WishlistBooks;