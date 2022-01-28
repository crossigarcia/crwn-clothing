import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCeUBG_xmN87sQgfE9CYpTmw-yfLtN4EhE",
  authDomain: "crwn-db-5e5c8.firebaseapp.com",
  projectId: "crwn-db-5e5c8",
  storageBucket: "crwn-db-5e5c8.appspot.com",
  messagingSenderId: "134109210484",
  appId: "1:134109210484:web:22716d46eddd09f9ec2e21",
  measurementId: "G-E86DRLPCM4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;