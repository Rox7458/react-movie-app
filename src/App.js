import React from "react";

import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import AuthContext from "./context/AuthContext";
// package.json a toast kütüphanesini yükledik, indek.js ye import teşekkürü ettik, App.js ye <ToastContainer/> ekledik, bütün toastları kendimize göre ayarlayıp helper dosyasının altına topladık
const App = () => {
  return (
    <div className="dark:bg-[#23242a] min-h-screen">
      <AuthContext>
        <AppRouter />
        <ToastContainer />
      </AuthContext>
    </div>
  );
};

export default App;
