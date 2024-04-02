// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ page, nextPage, prevPage }) => {
  return (
    <footer className="fixed bottom-0 w-full bg-gradient-to-r from-lime-100 to-lime-800">
      <div className='w-full h-24 flex flex-col items-center justify-center'>
        <div className="pt-2 flex items-center justify-center">
          {page < 2 && (
            <Link to={`/page${page + 1}`} onClick={nextPage}>
            <button className='w-16 p-1 rounded-lg bg-blue-400 mr-4'> NEXT </button>
          </Link>
          )}
          {page >= 1 && (
            
            <Link to={`/page${page - 1}`} onClick={prevPage}>
            <button className='w-24 p-1 rounded-lg bg-white'> PREVIOUS </button>
          </Link>
          )}
        </div>
        <h1 className='text-[20px] pt-5 text-black text-center'>
          © Developed By Devendra Singh Bhatia, Monish Shetty, Akash Patel, Utkarsh Pawade
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
