import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState, useEffect, useContext, createContext } from "react";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyC6isJfJuptL2L5LMN2ca_SiVwUn6QkWfs",
  authDomain: "fir-auth-routes.firebaseapp.com",
  projectId: "fir-auth-routes",
  storageBucket: "fir-auth-routes.appspot.com",
  messagingSenderId: "578475555889",
  appId: "1:578475555889:web:0147de1b86a47c792c6910",
});

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  useEffect(() => {
          const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError);
          return () => unsubscribe();
  }, []);
  return <AuthContext.Provider value={{ user, error}} {...props}/>
};

export const useAuthState = () => {
        const auth = useContext(AuthContext);
        return { ...auth, isAuthenticated: auth.user != null };
}