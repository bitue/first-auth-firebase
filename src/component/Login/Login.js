import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            

            <div>
            <h1 className='text-center font-bold text-3xl text-blue-400'>Log in now  </h1>
            <div className='bg-gray-200 rounded-3xl mt-20 space-y-5 py-10 container mx-auto'>
                <p><input placeholder='enter your email' className='w-3/4 p-1 bg-gray-300 rounded-2xl ' type="text" name="" id="" /></p>
                <p><input placeholder='enter your password' className='w-3/4 p-1 bg-gray-300 rounded-2xl ' type="password" name="" id="" /></p>
                <div className='space-x-2'>
                    <button className='px-2 py-1 bg-yellow-400 rounded-2xl font-bold '>Log in </button>
                    <button className='px-2 py-1 bg-yellow-400 rounded-2xl '>
                        <Link className='font-bold' to='/login'>forget password ? </Link>
                    </button>


                </div>

            </div>
        </div>
        </div>
    );
};

export default Login;