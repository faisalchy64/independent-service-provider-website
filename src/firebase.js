import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBROeiaMtDSeRk3YyQJEG8fWQIH-H28r1o",
    authDomain: "independent-service-prov.firebaseapp.com",
    projectId: "independent-service-prov",
    storageBucket: "independent-service-prov.appspot.com",
    messagingSenderId: "322487903106",
    appId: "1:322487903106:web:1d365c6e31bd1a603f259b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
