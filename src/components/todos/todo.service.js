import { collection, doc, addDoc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import {db} from "../../config/firebase.config";


const colName = "todos";

const colRef = collection(db, colName);

export const create = async (description) => {
    return addDoc(colRef, {
        description, done: false
    });
}

export const findAll = async () => {
    const docSnap = await getDocs(colRef);
    return docSnap.docs.map(mapDoc);
}

export const findAllInRealtime = (onNext) => {
    return onSnapshot(colRef, {
        next: (docSnap) => {
            console.log(docSnap);
            onNext(docSnap.docs.map(mapDoc))
        },
    });
}

export const done = (id) => {
    const docRef = doc(colRef, id);
    return updateDoc(docRef, {done: true});
}

export const mapDoc = (doc) => ({id: doc.id, ...doc.data()});