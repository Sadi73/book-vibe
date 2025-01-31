import React, { useEffect, useState } from 'react';
import Readbooks from './Readbooks';
import WishlistBooks from './WishlistBooks';

const ListedBooksRoot = () => {

    const [selectedView, setSelectedView] = useState('readBooks');
    const [sortType, setSortType] = useState(null);
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])

    return (
        <div>
            <h1 className='text-center bg-[#131313] bg-opacity-5 p-5 text-3xl font-bold my-5'>Books</h1>

            <div className='flex justify-center'>
                <details className="dropdown">
                    <summary className="m-1 bg-[#23BE0A] text-white py-3 px-5 rounded-lg cursor-pointer">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => setSortType('rating')}>Rating</li>
                        <li onClick={() => setSortType('page')}>Number of Pages</li>
                        <li onClick={() => setSortType('year')}>Publish Year</li>
                    </ul>
                </details>
            </div>

            <div className='flex gap-5 border-b-2'>
                <button
                    onClick={() => setSelectedView('readBooks')}
                    className={`${selectedView === 'readBooks' && 'border-t-2 border-l-2 border-r-2 '} p-2`}>Read Books</button>
                <button
                    onClick={() => setSelectedView('wishlistBooks')}
                    className={`${selectedView === 'wishlistBooks' && 'border-t-2 border-l-2 border-r-2 '} p-2`}>Wishlist Books</button>
            </div>

            {selectedView === 'readBooks' ? <Readbooks allBooks={allBooks} sortType={sortType}/> : <WishlistBooks allBooks={allBooks} sortType={sortType}/>}

        </div>
    );
};

export default ListedBooksRoot;