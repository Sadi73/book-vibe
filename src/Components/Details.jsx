import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const { id } = useParams();
    const [selectedBook, setSelectedBook] = useState({});

    const getStoredDataFromLocalStorage = (key) => {
        const storedData = localStorage.getItem(key);
        if (storedData) {
            return JSON.parse(storedData)
        }
        return []
    }

    const handleLocalStorage = (key, bookId) => {
        const data = getStoredDataFromLocalStorage(key);
        if (!data?.includes(bookId)) {
            data.push(bookId);
            localStorage.setItem(key, JSON.stringify(data));
            toast(`Added book in ${key}!`)
        }
        else{
            toast("You have already added this book")
        }
    }

    useEffect(() => {
        fetch(`/books.json`)
            .then(res => res.json())
            .then(data => {
                setSelectedBook(data?.find(book => book?.bookId === parseInt(id)))
            })
    }, []);

    return (
        <>
            <ToastContainer />
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 '>
                    <img src={`${selectedBook?.image}`} className='w-full max-h-[600px]' alt="not found" />
                </div>

                <div className='md:w-1/2'>
                    <h1>{selectedBook?.bookName}</h1>
                    <p>By: {selectedBook?.author}</p>
                    <p className='border-t-2 border-b-2 py-3'>{selectedBook?.category}</p>

                    <p className='pt-3'> <span>Review:</span> {selectedBook?.review}</p>
                    <p className='border-b-2 pb-3 mt-3'>
                        <span>Tag</span> {selectedBook?.tags?.map((tag, index) => <span key={index} className='bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] mr-3 p-2'>{`#${tag}`}</span>)}
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
                        <button
                            className='border-2 py-3 px-5 mr-3'
                            onClick={() => handleLocalStorage('read', selectedBook?.bookId)}>Read</button>
                        <button
                            className='bg-[#50B1C9] text-white py-3 px-5'
                            onClick={() => handleLocalStorage('wishlist', selectedBook?.bookId)}>Wishlist</button>
                    </div>

                </div>

            </div>
        </>

    );
};

export default Details;