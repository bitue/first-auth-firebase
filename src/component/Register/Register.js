import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Register = () => {


    const { user , handleLogOut, googleSignIn } = useContext(AuthContext)['allContext']

    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-blue-400'>Register our web site </h1>
            <h1>{user.displayName}</h1>
            <div className='bg-gray-200 rounded-3xl mt-20 space-y-5 py-10 container mx-auto'>
                <p><input placeholder='enter your email' className='w-3/4 p-1 bg-gray-300 rounded-2xl ' type="text" name="" id="" /></p>
                <p><input placeholder='enter your password' className='w-3/4 p-1 bg-gray-300 rounded-2xl ' type="password" name="" id="" /></p>
                <div className='space-x-2'>
                    <button className='px-2 font-bold py-1 bg-yellow-400 rounded-2xl '>Register</button>
                    <button className='px-2 py-1 font-bold bg-yellow-400 rounded-2xl '>
                        <Link to='/login'>already registered?</Link>
                    </button>



                    {
                        user.displayName ?  <button  className='px-2 py-1 font-bold bg-yellow-400 rounded-2xl' onClick={handleLogOut}> Google sign out </button> :
                         <button  className='px-2 py-1 font-bold bg-yellow-400 rounded-2xl' onClick={googleSignIn}> Google sign in </button>
                    }
           

                </div>

            </div>
        </div>
    );
};

export default Register;