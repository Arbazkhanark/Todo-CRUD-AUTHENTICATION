// import {initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth";


// const firebaseConfig = {
//     apiKey: "AIzaSyBoxCdr6So340EwahaVx9bf7GwxRByGxms",
//     authDomain: "todo-db27a.firebaseapp.com",
//     projectId: "todo-db27a",
//     storageBucket: "todo-db27a.appspot.com",
//     messagingSenderId: "896452323530",
//     appId: "1:896452323530:web:0aee7253bfd436a617ac33"
//   };


//   const app =initializeApp(firebaseConfig);
//   export const auth =getAuth(app);
//   export default app;




import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBoxCdr6So340EwahaVx9bf7GwxRByGxms",
  authDomain: "todo-db27a.firebaseapp.com",
  projectId: "todo-db27a",
  storageBucket: "todo-db27a.appspot.com",
  messagingSenderId: "896452323530",
  appId: "1:896452323530:web:0aee7253bfd436a617ac33"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access the DataBase
const db=firebase.firestore();

export default firebase;
export {db};
