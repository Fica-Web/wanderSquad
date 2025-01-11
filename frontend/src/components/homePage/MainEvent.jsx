import React from 'react';
import mainEventHero from '../../assets/images/hero-02.jpg';
import ReusableButton from '../reusable/ReusableButton';

const MainEvent = () => {
    return (
        <div 
            style={{backgroundImage: `url(${mainEventHero})`}}
            className='background-img text-white flex lg:justify-end justify-center items-center lg:px-36 md:px-16'
        >
            <div className='sm:max-w-[370px] w-full p-4'>
                <img 
                    src="https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg" alt="" 
                    className='max-h-[70vh]'
                />
                <h2 className='kaushan-script-regular text-4xl text-center my-6'>
                    Explore our upcoming event now!
                </h2>
                <div className='flex justify-center'>
                    <ReusableButton
                        content={'View collection'}
                    />
                </div>
            </div> 
        </div>
    )
}

export default MainEvent
