import React from 'react'

const Banner = () => {
  return (
    <div className=' bg-gray-200 w-[90%] h-[300px] m-auto px-20 rounded-3xl flex items-center justify-between'>
        <div className=' flex items-start flex-col justify-between h-[250px] w-[50%]'>
            <h1 className=' text-[30px] font-semibold'>Lets make things happen</h1>
            <p className='text-[17px]'>Our agency specializes in providing a wide range of services including social media management, digital marketing, brand collabs, content strategy, video editing, advertising campaigns, and social media optimization.</p>
            <button className=' bg-black text-white text-[20px] p-3 px-4 rounded-md mt-6'>Get your free proposal</button>
        </div>
        <div>
            <img width={350} className='rounded-xl' src="https://assets-global.website-files.com/6491c6f67cd22366fdc73f83/6491de708cef894980a39679_IllustrationCTA.svg" alt="" />
        </div>
    </div>
  )
}

export default Banner