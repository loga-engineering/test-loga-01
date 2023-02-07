import {
    DocumentData, FirestoreDataConverter, QueryDocumentSnapshot,
    SnapshotOptions, WithFieldValue, PartialWithFieldValue, SetOptions
} from "@firebase/firestore";

export interface Todo extends DocumentData {
    id?: string;
    description: string;
    done: boolean;
}

export class TodoDataConverter implements FirestoreDataConverter<Todo> {
    fromFirestore(snapshot: QueryDocumentSnapshot, options?: SnapshotOptions): Todo {
        return <Todo>{
            id: snapshot.id,
            ...snapshot.data()
        };
    }

    toFirestore(modelObject: WithFieldValue<Todo>): DocumentData;
    toFirestore(modelObject: PartialWithFieldValue<Todo>, options: SetOptions): DocumentData;
    toFirestore(modelObject: WithFieldValue<Todo> | PartialWithFieldValue<Todo>, options?: SetOptions): DocumentData {
        const {id, ...others} = modelObject;
        return {...others};
    }

}