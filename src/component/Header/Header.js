import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext).allContext
    const allContext = useContext(AuthContext)
    console.log(allContext)
    return (
        <div>
           {
               user.displayName && <h2 className='font-bold text-3xl my-5 text-center text-blue-500'>{user.displayName}</h2>
           }
            <h2 className='font-bold text-3xl my-5 text-center text-blue-500'>Simple fireBase auth</h2>
            <div className='space-x-2'>
                <NavLink activeClassName='bg-yellow-600' className='bg-yellow-400 rounded-2xl font-bold px-2 py-1 ' to ='/home'>Home</NavLink>
                <NavLink activeClassName='bg-yellow-600' className='bg-yellow-400 rounded-2xl font-bold px-2 py-1 ' to ='/login'>Log in</NavLink>
                <NavLink activeClassName='bg-yellow-600' className='bg-yellow-400 rounded-2xl font-bold px-2 py-1 ' to='/register'>Register</NavLink>
                <NavLink activeClassName='bg-yellow-600' className='bg-yellow-400 rounded-2xl font-bold px-2 py-1 ' to='/dashboard'>Dashboard</NavLink>
            </div>
        </div>
    );
};

export default Header;