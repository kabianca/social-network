// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrzR1xzZ2-Q_hG4zRYnLq2MXXjNgIhw68',
  authDomain: 'lab-social-network-e1523.firebaseapp.com',
  projectId: 'lab-social-network-e1523',
  storageBucket: 'lab-social-network-e1523.appspot.com',
  messagingSenderId: '47563089661',
  appId: '1:47563089661:web:adfdfb2ede7d7e01fb8094',
  measurementId: 'G-QDZNKQ2C7E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
