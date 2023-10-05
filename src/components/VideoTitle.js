import React from 'react';
import { FaPlay } from 'react-icons/fa6';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 mt-[35%] md:mt-0 pt-[30%] md:pt-[15%] px-6 md:px-12 bg-gradient-to-r from-black w-screen aspect-video text-white">
        <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
        <p className="hidden md:inline-block text-md w-1/4 py-6">{overview}</p>
        <div className="flex">
            <button className="flex justify-center items-center bg-white hover:bg-opacity-80 text-black px-2 py-1 md:px-4 md:py-2 my-2 md:my-0 rounded-md">
                <FaPlay className="text-sm md:text-lg mr-2" />
                Play
            </button>
            <button className="hidden md:flex justify-center items-center bg-gray-800 bg-opacity-90 hover:bg-opacity-60 text-white px-4 py-2 mx-2 rounded-md">
                <AiOutlineInfoCircle className="text-lg mr-2" />
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;