import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_BG, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

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

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid, email, displayName, photoURL}));
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
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
          navigate("/browse");
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
          src={NETFLIX_BG}
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
            ref={name}
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