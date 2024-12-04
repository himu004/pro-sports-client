/* eslint-disable react/prop-types */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import auth from "../firebase/firebase.init";
  import { AuthContext } from "./Context";
  import { useEffect, useState } from "react";
  import { GoogleAuthProvider } from "firebase/auth";
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signOutUser = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    const signUpWithGoogle = () => {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    };
  
    const updateUserProfile = (name, photoURL) => {
      setLoading(true);
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL
      });
    };
  
    const passwordResetEmail = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
    };
  
  
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        console.log('currently Logged in' , currentUser);
      });
  
      return () => {
        unSubscribe();
      };
    }, []);
  
    const userInfo = {
      user,
      loading,
      createUser,
      signInUser,
      signOutUser,
      signUpWithGoogle,
      updateUserProfile,
      passwordResetEmail
    };
  
    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  