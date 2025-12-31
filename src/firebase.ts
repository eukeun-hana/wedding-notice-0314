import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8Ld41vVXi5Na_W2fymCO7XTmFguoyjVY",
  authDomain: "wedding-guestbook-745e4.firebaseapp.com",
  projectId: "wedding-guestbook-745e4",
  storageBucket: "wedding-guestbook-745e4.firebasestorage.app",
  messagingSenderId: "37772656406",
  appId: "1:37772656406:web:387295abb4b5b329719a37",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
