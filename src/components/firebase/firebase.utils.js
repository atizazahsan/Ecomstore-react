import firebase from 'firebase/app';

import 'firebase/firestore'; // default for database
import 'firebase/auth'; // default for authentication


const config = {
  apiKey: "AIzaSyA1snnghNDOnBt4mlJoQufj29XHH76kTWs",
  authDomain: "store-db-1c76b.firebaseapp.com",
  databaseURL: "https://store-db-1c76b.firebaseio.com",
  projectId: "store-db-1c76b",
  storageBucket: "store-db-1c76b.appspot.com",
  messagingSenderId: "684073411475",
  appId: "1:684073411475:web:2e0d326eb10e60f2253e66",
  measurementId: "G-65M0JQLMVR"
};

export const createUserProfileDoc = async (userAuth , additionalData) => {
  if(!userAuth) return ;
  
}
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' }); // to trigger google pop up when use sign in

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

