import {signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User} from "firebase/auth";

import {auth} from "../../config/firebase.config";

export const logout = () => signOut(auth);

export const loginWithGoogle = async (): Promise<boolean> => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user: User = result.user;
        console.log({credential, token, user});
        return true;
    } catch (error) {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({errorCode, errorMessage, email, credential});
        return false;
    }
}

export const authState = (observer) => onAuthStateChanged(auth, observer);
