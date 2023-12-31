import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  updatePassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  initializeFirestore,
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDN8rz3IiGnd2SHMKT0i0RT1FyWBjmss8w",
  authDomain: "telephone-directory-b104a.firebaseapp.com",
  databaseURL: "https://telephone-directory-b104a-default-rtdb.firebaseio.com",
  projectId: "telephone-directory-b104a",
  storageBucket: "telephone-directory-b104a.appspot.com",
  messagingSenderId: "826839994254",
  appId: "1:826839994254:web:aa42aeec04578835ed9edf",
  measurementId: "G-TBV5JGKFVS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
     await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (event,name, email, password) => {
  event.preventDefault()
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name:name,
      authProvider: "local",
      email:user.email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const UpdatePassword = async (newPassword) => {
  const user = auth.currentUser;
  updatePassword(user, newPassword).then(() => {
    alert("Update Password Successfully")
    logout()
  }).catch((error) => {
    console.log(error,"error")
   alert("Something Want Wrong")
  });
  
}

const logout = () => {
   signOut(auth);
};

export {
  auth,
  db,
  UpdatePassword,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};