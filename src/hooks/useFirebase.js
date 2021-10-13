import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup,  signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import fireBaseInit from "../component/firebase/Firebase-init";


//init firebase 
fireBaseInit()
//main custom hook func
const useFireBase = () => {
    //state management is here
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    //google sign in func
    const auth = getAuth();
    const googleSignIn = () => {

        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })

    }
    // on auth change 
    useEffect (()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
    
            } else {
                setError('')
    
            }
        });

    },[])

    const handleLogOut = () => {

        signOut(auth)
        .then(() => {
           setUser({})
          })
        .catch((error) => {
            setError(error.message)
          });

    }
  



    return {
        googleSignIn, user, error , handleLogOut
    }






}


export default useFireBase;




















































// import { getAuth, GoogleAuthProvider, signInWithPopup,signOut  } from "firebase/auth";
// import { useState } from "react";
// import fireBaseInit from "../component/firebase/Firebase-init";


// const useFireBase = () => {

//     fireBaseInit()

//     const [user, setUser] = useState({})
//     const [error, setError] = useState('')


//     const googleProvider = new GoogleAuthProvider();
//     const useGoogleUser = () => {

//         const auth = getAuth();
//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 const { displayName, email, photoURL } = result.user
//                 const logInuser = {
//                     name: displayName,
//                     email: email,
//                     photo: photoURL
//                 }
//                 console.log(result.user)
//                 setUser(logInuser)

//             })
//             .catch(error => {
//                 setError(error.message)
//             })

//     }

//     const userSignOut = () => {
//         const auth = getAuth();
//         signOut(auth)
//             .then(() => {
//                 setUser({})
//                 setError('sign out successfully')
//             })
//             .catch((error) => {
//                 setError(error.message)
//             });
//     }

//     const returnObject = {
//         user: user,
//         error: error,
//         googleFun: useGoogleUser,
//         signOutGoogle: userSignOut


//     }

//     return returnObject


// }

// export default useFireBase