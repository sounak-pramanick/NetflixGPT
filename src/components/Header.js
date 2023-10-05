import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView, clearGptMovieResult } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(toggleGptSearchView());
        dispatch(clearGptMovieResult());
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }


  return (
    <div className="flex flex-col md:flex md:flex-row md:justify-between items-center absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10">
      <img
        src={NETFLIX_LOGO}
        alt="logo"
        className="w-36 md:w-44 cursor-pointer"
      />
      {user && 
        <div
          className="flex p-2 items-center"
        >
          {showGptSearch && 
            (<select className="bg-gray-900 text-white p-2 m-2 outline-none" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>)}
          <button 
            className="bg-purple-700 text-white py-1 px-2 mx-2 md:py-2 md:px-4 md:mx-4 rounded-sm md:rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img 
            className="hidden md:block"
            src={user.photoURL}
            alt="userIcon"
          />
          <button 
            className="font-bold text-white mx-1 md:mx-2"
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