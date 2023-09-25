import React from 'react';
import { FaPlay } from 'react-icons/fa6';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[20%] px-12 bg-gradient-to-r from-black w-screen aspect-video text-white">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-lg w-1/4 py-6">{overview}</p>
        <div className="flex">
            <button className="flex justify-center items-center bg-white hover:bg-opacity-80 text-black px-4 py-2 rounded-md">
                <FaPlay className="text-lg mr-2" />
                Play
            </button>
            <button className="flex justify-center items-center bg-gray-800 bg-opacity-90 hover:bg-opacity-60 text-white px-4 py-2 mx-2 rounded-md">
                <AiOutlineInfoCircle className="text-lg mr-2" />
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle;