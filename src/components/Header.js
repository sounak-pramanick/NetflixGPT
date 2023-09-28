import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { NETFLIX_LOGO } from '../utils/constants';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid, email, displayName, photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className="flex justify-between items-center absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10">
      <img
        src={NETFLIX_LOGO}
        alt="logo"
        className="w-44"
      />
      {user && 
        <div
          className="flex p-2 items-center"
        >
          <button 
            className="bg-purple-700 text-white py-2 px-4 mx-4 rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img 
            src={user.photoURL}
            alt="userIcon"
          />
          <button 
            className="font-bold text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      }
    </div>
  )
}

export default Header;