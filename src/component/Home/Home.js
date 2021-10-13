import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Home = () => {

    const {devName} = useContext(AuthContext)
   
    return (
        <div>
            {
                devName ?  <h1> welcome {devName}</h1> :  <h1>this is home</h1> 
            }
          
        </div>
    );
};

export default Home;