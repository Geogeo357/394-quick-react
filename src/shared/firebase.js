import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCnumXTx5kATT1r2D2op9kLV7_oo66d5Ng",
    authDomain: "course-scheduler-59ed2.firebaseapp.com",
    databaseURL: "https://course-scheduler-59ed2.firebaseio.com",
    projectId: "course-scheduler-59ed2",
    storageBucket: "course-scheduler-59ed2.appspot.com",
    messagingSenderId: "373671798929",
    appId: "1:373671798929:web:16f5d55be173c2103b3730"
  };
  
  firebase.initializeApp(firebaseConfig);

export default firebase;