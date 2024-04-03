import React from 'react'
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div className=' h-18'>
      <div className=' h-16 flex justify-between p-2'>
        <Link to = "/page0">
          <button className=" bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded relative ">
            <span className="inline-block w-6 h-6 leading-6 text-center rounded-full bg-gray-800 text-white font-bold mr-2">1 </span>
              CSV Upload
            <div className="opacity-0 hover:opacity-100 duration-300 hover:mb-12 absolute left-0 right-0 z-10 bg-gray-900 text-white font-semibold text-center py-2 px-4 rounded">
              Upload your CSV data file to get started.
            </div>
          </button>
        </Link>

        <Link to = "/page1">
          <button className=" bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded relative">
            <span className="inline-block w-6 h-6 leading-6 text-center rounded-full bg-gray-800 text-white font-bold mr-2">2 </span>
              View CSV
            <div className="opacity-0 hover:opacity-100 duration-300 hover:mb-12 absolute left-0 right-0 z-10 bg-gray-900 text-white font-semibold text-center py-2 px-4 rounded">
              View your uploaded CSV data and make edits if needed.
            </div>
          </button>
        </Link>

        <Link to = "/page2">
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded relative">
            <span className="inline-block w-6 h-6 leading-6 text-center rounded-full bg-gray-800 text-white font-bold mr-2">3 </span>
              Visualized Data
            <div className="opacity-0 hover:opacity-100 duration-300 hover:mb-12 absolute left-0 right-0 z-10 bg-gray-900 text-white font-semibold text-center py-2 px-4 rounded">
              See your data come to life with interactive visualizations.
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Button