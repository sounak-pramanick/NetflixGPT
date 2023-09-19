import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSignForm(!isSignInForm);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm) {
      // Sign Up form
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        })
    }
    else {
      // Sign In form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });

    }
  }

  return (
    <div className="">
      <Header />
      <div className="absolute w-screen h-screen">
        <img 
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
          alt="netflix-background"
          className="w-full h-full bg-cover"
        />
      </div>
      <form 
        className="absolute bg-black bg-opacity-90 text-white w-3/12 mx-auto right-0 left-0 my-36 p-8"
      >
          <h1 
            className="font-bold text-3xl py-4"
          >
            {isSignInForm? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input 
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 rounded-md w-full mx-auto bg-gray-800 outline-none" 
          />}
          <input 
            type="text" 
            ref={email}
            placeholder="Email or phone number" 
            className="p-4 my-4 rounded-md w-full mx-auto bg-gray-800 outline-none" 
          />
          <input 
            type="password" 
            ref={password}
            placeholder="Password" 
            className="p-4 my-4 rounded-md w-full mx-auto bg-gray-800 outline-none" 
          />
          <button 
            className="p-4 my-6 bg-[#e50914] text-lg text-white rounded-md w-full mx-auto"
            onClick={handleButtonClick}
          >
            {isSignInForm? "Sign In" : "Sign Up"}
          </button>
          <p className="text-[#e87c03]">
            {errorMessage}
          </p>
          <p 
            className="text-sm cursor-pointer my-6"
            onClick={toggleSignInForm}
          >
            {isSignInForm? "New to Netflix? Sign Up now" : "Already registered? Sign In now"}
          </p>
      </form>
    </div>
  )
}

export default Login;