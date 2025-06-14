import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { toastError, toastSuccess } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

export const AuthContextt = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userTakip();
  }, []);

  //!register

  // https://firebase.google.com/docs/auth/web/start?hl=tr

  const createKullanici = async (email, password, displayName) => {
    await createUserWithEmailAndPassword(auth, email, password);

    toastSuccess("register işlemi başarılı");

    navigate("/");

    updateProfile(auth.currentUser, {
      displayName: displayName,
    }).catch((error) => {
      toastError("hata var ");
    });
  };

  //! Login

  const giris = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);

    toastSuccess("login işlemi başarılı");

    navigate("/");
  };

  //! Google ile giriş

  const googleGiris = () => {
    //?google hesaplarımıza erişme metodu
    const provider = new GoogleAuthProvider();

    //? açılır pencere ile giriş yapılması için firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccess("google ile giriş başarılı");

        navigate("/");
      })
      .catch((error) => {
        toastError("google ile giriş hatalı");
      });
  };

  //!çıkış

  const cikis = () => {
    signOut(auth)
      .then(() => {
        toastSuccess("çıkış başarılı");
      })
      .catch((error) => {
        toastError("çıkış hatalı");
      });
  };

  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setCurrentUser({
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setCurrentUser(false);
      }
    });
  };

  return (
    <AuthContextt.Provider value={{ createKullanici, giris, googleGiris, cikis, currentUser }}>
      {children}
    </AuthContextt.Provider>
  );
};

export default AuthContext;
