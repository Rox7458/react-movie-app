import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react'
import { auth } from '../auth/firebase';
import { toastError, toastSuccess } from '../helpers/ToastNotify';
import { useNavigate } from 'react-router-dom';


export const AuthContextt=createContext()

const AuthContext = ({children}) => {

const navigate=useNavigate()

  //!register
  //!register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr


const createKullanici=async(email,password,displayName)=>{

await createUserWithEmailAndPassword(auth, email, password);

toastSuccess("register işlemi başarılı")

navigate("/")
}


//! Login

const giris=async(email,password)=>{
await signInWithEmailAndPassword(auth, email, password);

toastSuccess("login işlemi başarılı");

navigate("/");


}


//! Google ile giriş

const googleGiris=()=>{

//?google hesaplarımıza erişme metodu
const provider = new GoogleAuthProvider();

//? açılır pencere ile giriş yapılması için firebase metodu
signInWithPopup(auth, provider)
  .then((result) => {
    
    toastSuccess("google ile giriş başarılı");

    navigate("/");


  })
  .catch((error) => {
    
toastError("google ile giriş hatalı")

  });



}




  return <AuthContextt.Provider value={{createKullanici,giris,googleGiris}}>{children}</AuthContextt.Provider>;
}

export default AuthContext