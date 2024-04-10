import firestore from "../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const writeToFirestore = (data: any) => {
    const ref = collection(firestore, 'users');

    // Replace 'collectionName' with the name of your Firestore collection
    addDoc(ref, data)
        .then(() => {
            console.log('Data successfully written to Firestore');
        })
        .catch((error: any) => {
            console.error('Error writing data to Firestore: ', error);
        });
}

export default writeToFirestore;
