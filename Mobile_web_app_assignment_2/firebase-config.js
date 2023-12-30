
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC5qF7HWKYerbfATHOgkzJROao_zQjs7OQ',
  authDomain: 'mobilewebapplication-4a51c.firebaseapp.com',
  projectId: 'mobilewebapplication-4a51c',
  storageBucket: 'mobilewebapplication-4a51c.appspot.com',
  messagingSenderId: '413394939973',
  appId: '1:413394939973:web:7133c12574ebb6a1e7732c'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, doc, getDoc, setDoc };
