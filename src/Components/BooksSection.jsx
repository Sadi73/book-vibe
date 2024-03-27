import React, { useEffect, useState } from 'react';
import Book from './Book';

const BooksSection = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('./books.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, []);

    return (
        <div className='my-20'>
            <h1 className='text-5xl text-center mb-10'>Books</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {allBooks?.length > 0 &&
                    allBooks.map(book => <Book
                        key={book?.bookId}
                        book={book} />)
                }
            </div>

        </div>
    );
};

export default BooksSection;