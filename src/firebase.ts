// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB-1nc2HH0liWMiPW-TNWF1dHvRKfWxnMk',
    authDomain: 'solobank-efcfd.firebaseapp.com',
    projectId: 'solobank-efcfd',
    storageBucket: 'solobank-efcfd.firebasestorage.app',
    messagingSenderId: '699678024447',
    appId: '1:699678024447:web:511a17732e8bd2287b22ca',
    measurementId: 'G-3YW8G7NMFL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
