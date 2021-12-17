import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import initAuthentication from "../Authentication/Firease/Firebase.init";
initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // Google sign in
  const googleSignin = (location, navigate) => {
    const googleProgivder = new GoogleAuthProvider();
    signInWithPopup(auth, googleProgivder)
      .then((user) => {
        if (user) {
          swal({
            title: "Login Successfully",
            text: "Great you do well, Now you can do everything",
            icon: "success",
            button: "Oww",
          });
        }
        setError("");
        const uri = location?.state?.from || "/";
        navigate(uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // register
  const register = (email, password, navigate, location, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          swal({
            title: "Login Successfully",
            text: "Great you do well, Now you can do everything",
            icon: "success",
            button: "Oww",
          });
        }
        //   update name
        const newUser = { email, displayName: name };
        setUser(newUser);
        //   update profile
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        // location vhange error clear
        setError("");
        const uri = location?.state?.from || "/";
        navigate(uri);
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // sign in user
  const signin = (email, password, navigate, location) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        if (user) {
          swal({
            title: "Login Successfully",
            text: "Great you do well, Now you can do everything",
            icon: "success",
            button: "Oww",
          });
        }
        setError("");
        const uri = location?.state?.from || "/";
        navigate(uri);
      })

      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // log out user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        swal({
          title: "Sign-out Successfully",
          text: "you are now signed out",
          icon: "info",
          button: "I know!",
        });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // State tracking
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);
  return {
    user,
    googleSignin,
    register,
    logout,
    signin,
    error,
    isLoading,
  };
};
export default useFirebase;
