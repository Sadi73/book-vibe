import React from 'react';
import bannerImg from '../assets/bannerImg.png'

const Banner = () => {
    return (
        <div className='bg-[#131313] bg-opacity-5 flex items-center justify-center'>
            <div>
                <h1 className='text-5xl'>Books to Freshen up <br/> Your Bookshelf</h1>
                <button className='bg-[#23BE0A] text-white p-3 mt-5'>View The List</button>
            </div>

            <div>
                <img src={bannerImg} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;