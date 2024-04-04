import React from 'react'
import View_csv_buttons from '../Buttons/View_csv_buttons';
import Sheet from '../Charts/Sheet';

const MainPage = () => {
  return (
    <div className='h-[545px]' >
        <div className='flex flex-col ' >
        <View_csv_buttons/>
        <div className='h-[480px] flex justify-center items-center'>
            <Sheet/>
            </div>
        </div>
        </div>

  )
}

export default MainPage
