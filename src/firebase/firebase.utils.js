import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyA-1ROjpwJZ3yseypLu05cBQ8Jykn8FAYE",
    authDomain: "crwn-db-f634a.firebaseapp.com",
    projectId: "crwn-db-f634a",
    storageBucket: "crwn-db-f634a.appspot.com",
    messagingSenderId: "835497468325",
    appId: "1:835497468325:web:4d61fe5c22dff91330084c",
    measurementId: "G-84H39999LY"
};

export const createUserProfileDocument = async ( userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            console.log('error creating user', error.message);

        }
    
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;