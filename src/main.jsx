import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCNVFavbDVRXIK-vFd96PDG3EHpnEyxo_s",
    authDomain: "los-almendros-frutos-secos.firebaseapp.com",
    projectId: "los-almendros-frutos-secos",
    storageBucket: "los-almendros-frutos-secos.appspot.com",
    messagingSenderId: "516709515240",
    appId: "1:516709515240:web:b0dfa8c83d8de4e1342e5d",
    measurementId: "G-RGLVZJ5JKK"
  }; 

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
       <App />
    </ChakraProvider>
);
