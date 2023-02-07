// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {FirebaseOptions} from "@firebase/app";


const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

//
// const firebaseConfig: FirebaseOptions = {
//     apiKey: "AIzaSyD3BFa8x-_aP8EfmJWPxclv3c3DuG3Ju6M",
//     authDomain: "test-loga-01.firebaseapp.com",
//     projectId: "test-loga-01",
//     storageBucket: "test-loga-01.appspot.com",
//     messagingSenderId: "490432017893",
//     appId: "1:490432017893:web:4dce644b1f4227e94ceb0c"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);



