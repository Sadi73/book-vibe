import React from 'react';
import bannerImg from '../assets/bannerImg.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg-[#131313] bg-opacity-5 flex items-center justify-center px-5'>
            <div>
                <h1 className='text-3xl md:text-5xl'>Books to Freshen up  Your Bookshelf</h1>
               <Link to='/listed-books'> <button className='bg-[#23BE0A] text-white p-3 mt-5'>View The List</button></Link>
            </div>

            <div>
                <img src={bannerImg} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;