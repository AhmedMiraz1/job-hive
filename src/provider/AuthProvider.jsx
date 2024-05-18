import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const  AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)
    const [loading, setLoading ]=useState(true)
    console.log(user);

    const createUser= (email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }


     // update user profile
  const updateUserProfile = async (name, photo) => {
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
    const result = getAuth();
    return result.currentUser;
  };

  // sing in user
  const singInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login
  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  };

    // logout
    const logOut = () => {
        setUser(null);
        signOut(auth);
      };
    
      // observer
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
          setLoading(false);
        });
        return () => unsubscribe();
      }, []);
    



    const authInfo ={
            user, 
            loading,
            createUser,
            updateUserProfile,
            singInUser,
            googleLogin,
            logOut



    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;