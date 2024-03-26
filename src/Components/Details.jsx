import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [selectedBook, setSelectedBook] = useState({});

    useEffect(() => {
        fetch(`/books.json`)
            .then(res => res.json())
            .then(data => {
                setSelectedBook(data?.find(book => book?.bookId === parseInt(id)))
            })
    }, [])

    return (
        <div className='flex flex-col md:flex-row gap-10'>
            <div className='md:w-1/2 '>
                <img src={`${selectedBook?.image}`} className='w-full max-h-[600px]' alt="not found" />
            </div>

            <div className='md:w-1/2'>
                <h1>{selectedBook?.bookName}</h1>
                <p>By: {selectedBook?.author}</p>
                <p className='border-t-2 border-b-2 py-3'>{selectedBook?.category}</p>

                <p className='pt-3'> <span>Review:</span> {selectedBook?.review}</p>
                <p className='border-b-2 pb-3'>
                    <span>Tag</span> {selectedBook?.tags?.map((tag, index) => <span key={index}>{`#${tag}`}</span>)}
                </p>

                <table>
                    <tbody>
                        <tr>
                            <td>Number of Pages</td>
                            <td>{selectedBook?.totalPages}</td>
                        </tr>
                        <tr>
                            <td>Publisher</td>
                            <td>{selectedBook?.publisher}</td>
                        </tr>
                        <tr>
                            <td>Year of Publishing</td>
                            <td>{selectedBook?.yearOfPublishing}</td>
                        </tr>
                        <tr>
                            <td>Rating</td>
                            <td>{selectedBook?.rating}</td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button className='border-2 py-3 px-5 mr-3'>Read</button>
                    <button className='bg-[#50B1C9] text-white py-3 px-5'>Wishlist</button>
                </div>

            </div>

        </div>

    );
};

export default Details;