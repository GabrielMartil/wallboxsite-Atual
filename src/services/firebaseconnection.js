import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAM1EKbvaHHkJrTXe6eNq1Et_r2AuvUZZQ",
  authDomain: "wall-box-ct.firebaseapp.com",
  databaseURL: "https://wall-box-ct-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wall-box-ct",
  storageBucket: "wall-box-ct.appspot.com",
  messagingSenderId: "1041532038205",
  appId: "1:1041532038205:web:9d33dcebf5fbc13ae44e54",
  measurementId: "G-MV2VSRC1S6"
};

// Inicialize o Firebase apenas se ainda não foi inicializado
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Exporte as instâncias de autenticação e banco de dados
const auth = firebase.auth();
const db = firebase.database();

export { auth, db };
