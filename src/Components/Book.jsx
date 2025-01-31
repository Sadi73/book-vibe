import React from 'react';
import StarIcon from '../assets/StarIcon.svg'
import { useNavigate } from 'react-router-dom';

const Book = ({ book }) => {
    const navigate = useNavigate();

    return (
        <div className="card bg-base-100 shadow-xl cursor-pointer" onClick={()=>navigate(`/details/${book?.bookId}`)}>
            <figure className="px-10 pt-10">
                <img src={book?.image} alt="Shoes" className="w-full h-64 rounded-xl" />
            </figure>
            <div className="card-body ">
                <div className='flex gap-3'>
                    {book.tags.map((tag, index) => <p key={index} className='bg-[#23BE0A] bg-opacity-5 text-[#23BE0A] grow-0 px-2 py-1'>{tag}</p>)}
                </div>
                <h2 className="card-title text-2xl font-bold">{book?.bookName}</h2>
                <p className='font-semibold'>By: {book?.author}</p>
                <div className="card-actions border-t-2 border-dotted pt-3">
                    <p className='font-semibold'>{book?.category}</p>
                    <div className='flex gap-1'>
                        <p>{book?.rating} </p>
                        <img src={StarIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;