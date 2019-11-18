import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKLVynrfXc8bKdqd7eigvHDmEo86qmI7o",
    authDomain: "crwn-db-ccc5b.firebaseapp.com",
    databaseURL: "https://crwn-db-ccc5b.firebaseio.com",
    projectId: "crwn-db-ccc5b",
    storageBucket: "crwn-db-ccc5b.appspot.com",
    messagingSenderId: "88568229932",
    appId: "1:88568229932:web:52ac813169bae22e3a6189",
    measurementId: "G-4MGS00TDGG"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error Creating User', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;