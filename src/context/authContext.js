import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../config/firebase';
import React, { useState, useContext, useEffect } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState();

  const signUpWithFirebase = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithFirebase = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutWithFirebase = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setFirebaseUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        firebaseUser,
        signUpWithFirebase,
        signInWithFirebase,
        signOutWithFirebase,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthContext, AuthProvider };
