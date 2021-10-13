import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCnNitj1V0b8IA0yw3ZFG6Ab9xyy3J_UvY",
    authDomain: "moha-milon.firebaseapp.com",
    projectId: "moha-milon",
    storageBucket: "moha-milon.appspot.com",
    messagingSenderId: "659847199785",
    appId: "1:659847199785:web:aa159e43ed0c092cfb7038",
    measurementId: "G-YBX6J5230S"
};



const fireBaseInit = () => {
    initializeApp(firebaseConfig);
}


export default fireBaseInit