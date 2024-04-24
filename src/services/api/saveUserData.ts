import firestore from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const writeToFirestore = async (data: any) => {
    const ref = collection(firestore, 'users');

    // Replace 'collectionName' with the name of your Firestore collection
    try {
        await addDoc(ref, data);
    } catch (error) {
        console.error('Error writing data to Firestore: ', error);
    }
}

export default writeToFirestore;
