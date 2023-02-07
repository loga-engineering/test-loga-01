import {
    collection, doc, addDoc, getDocs, onSnapshot, updateDoc, query, where, QueryDocumentSnapshot
} from "firebase/firestore";

import {db} from "../../config/firebase.config";
import {DocumentReference, Query, Unsubscribe} from "@firebase/firestore";
import {Todo, TodoDataConverter} from "./todo.model";
import {User} from "firebase/auth";


const colName = "todos";

const colRef = collection(db, colName).withConverter<Todo>(new TodoDataConverter());

export const create = async (description: string): Promise<DocumentReference<Todo>> => {
    return addDoc<Todo>(colRef, {
        description, done: false
    });
}

export const findAll = async (): Promise<Todo[]> => {
    const docSnap = await getDocs(colRef);
    return docSnap.docs.map(mapDoc);
}

export const findAllInRealtime = (onNext: (snapshot: Todo[]) => void): Unsubscribe => {
    return findInRealtime(colRef, onNext);
}

export const findNotDoneInRealtime = (onNext: (snapshot: Todo[]) => void): Unsubscribe => {
    const _query = query(colRef, where("done", "==", false));
    return findInRealtime(_query, onNext);
}

export const findInRealtime = (_query: Query<Todo>, onNext: (snapshot: Todo[]) => void): Unsubscribe => {
    return onSnapshot(_query, {
        next: (docSnap) => onNext(docSnap.docs.map(mapDoc)),
    });
}

export const toggleDone = async (id: string, done: boolean, user: User) => {
    const docRef = doc(colRef, id);
    await updateDoc(docRef, {done});

    return addDoc(collection(docRef, "actions"), {
        done,
        date: new Date(),
        user: user?.uid ?? "unknown",
        userName: user?.displayName ?? "unknown",
    });
}

export function mapDoc<T>(doc: QueryDocumentSnapshot<T>): T {
    return doc.data();
}