import React, { createContext } from 'react';
import useFireBase from '../hooks/useFirebase';


export const AuthContext = createContext()


const AuthProvider = (props) => {
    const devName ='ashik'

    const allContext = useFireBase()
    // console.log(allContext)
    return (
        <AuthContext.Provider value={{allContext, devName}}>
            {props.children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;