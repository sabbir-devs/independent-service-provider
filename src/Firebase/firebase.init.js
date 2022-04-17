import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC8pay6BWHASxZAm9N5JJqi9uaxtQkjLz0",
  authDomain: "the-bodycoach-cf175.firebaseapp.com",
  projectId: "the-bodycoach-cf175",
  storageBucket: "the-bodycoach-cf175.appspot.com",
  messagingSenderId: "1043801257565",
  appId: "1:1043801257565:web:a2b395dfcc4a7b7668bfb4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;