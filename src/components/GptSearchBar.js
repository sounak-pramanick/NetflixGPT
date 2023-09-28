import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 p-2 rounded-md">
        <input 
          className="col-span-9 p-2 rounded-sm outline-none mx-2"
          type="text" 
          placeholder="What would you like to watch today?" 
        />
        <button
          className="col-span-3 bg-[#e50914] text-white p-2 rounded-sm mx-2"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;