import React from 'react';
import notFoundIcon from '../assets/404.gif';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center text-center mt-20'>
            <div>
                <h1 className='text-5xl font-bold'>Oopps!!</h1>
                <h2 className='text-xl mt-5 font-bold'>Page Not Found</h2>
                <img src={notFoundIcon} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;