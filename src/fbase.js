// firebase auth의 configuration입니다. value들은 .env파일에 저장해두었으며, .env파일은 보안을 위해 .gitignore에 등록돼야합니다.
// firebase auth의 구글 계정은 : utdallas.kisa@gmail.com 입니다. 비밀번호는 kisa president에게 문의하새요.
// version: ^9.15.0 (npm install firebase@9.15.0)
// 참고 사이트: https://firebase.google.com/docs/web/setup?authuser=0&hl=ko
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //firebase authentication
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// kisa web's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase auth
export const authService = getAuth(app);
export const dbService = getFirestore(app);
export const storageService = getStorage();
