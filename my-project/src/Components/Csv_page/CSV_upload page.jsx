import React from 'react'
import Upload_page_button from '../Buttons/Upload_page_button';
import Upload_button from '../Buttons/Upload_button';

const MainPage = () => {
  return (
    <div className='h-[545px]' >
        <div className='flex flex-col' >
        <Upload_page_button/>
        <div className='h-[420px] flex justify-center items-center'>
            <Upload_button/>
            </div>
        </div>
        </div>

  )
}

export default MainPage