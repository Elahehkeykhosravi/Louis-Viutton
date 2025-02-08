import React from 'react'
import { useState } from 'react'
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";


export const Hero = () => {
    const [isMuted , setMuted] =useState(true)
  return (
    <section className='relative h-screen w-full overflow-hidden'> 
    <div className='absolute inset-0'>
        <video className=" w-full h-full object-cover" 
        autoPlay 
        loop 
        muted={isMuted} 
        src="https://vod.freecaster.com/louisvuitton/9e2572b1-0f27-41f4-82eb-fedeb590c976/uBtEU176SbKYgzPS6RH1NyNW_5.mp4">

        </video>
        </div>
         {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-2xl md:text-6xl font-bold">Valentine’s Day</h1>

        {/* Buttons */}
        <div className="flex space-x-6 mt-6">
          <button className="text-lg border-b-2 border-white pb-1">Gifts for Her</button>
          <button className="text-lg border-b-2 border-white pb-1">Gifts for Him</button>
        </div>

        {/* Mute/Unmute Button */}
        <button
          className="absolute bottom-10 right-10 bg-transparent text-white px-4 py-2"
          onClick={() => setMuted(!isMuted)}
        >
            {isMuted ? <VolumeOffIcon fontSize="small" /> : <VolumeUpIcon fontSize="small" />}
        </button>
      </div>


    </section>
  )
}
