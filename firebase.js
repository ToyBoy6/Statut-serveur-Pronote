import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import {
    getAuth,
    setPersistence,
    browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import {
    getDatabase,
    ref,
    get,
    set,
    onValue
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDc9Irgn2F5fGGI04HTee1-cb_iyRSAyPg",
    authDomain: "statut-serveur-pronote.firebaseapp.com",
    databaseURL: "https://statut-serveur-pronote-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "statut-serveur-pronote",
    storageBucket: "statut-serveur-pronote.firebasestorage.app",
    messagingSenderId: "819040055890",
    appId: "1:819040055890:web:76ff814b0ebe406b27e58b",
    measurementId: "G-48BEEW1XY2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const persistenceReady = setPersistence(
    auth,
    browserLocalPersistence
);

export {
    ref,
    get,
    set,
    onValue
};

export { app };