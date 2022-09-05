import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import React, { useState, useContext, useEffect } from 'react';

const AuthContext = React.useContext();

const AuthProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState();
  const [appUser, setAppUser] = useState();

  const createAppUser = (firstName, lastName, email, role) => {
    return Object.create(
      {},
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: role,
      },
    );
  };

  const signUpWithFirebase = (email, password) => {
    return createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      setFirebaseUser(user);
      setAppUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    signUpWithFirebase,
    firebaseUser,
    appUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
