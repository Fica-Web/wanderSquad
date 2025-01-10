import React from 'react';
import mainEventHero from '../../assets/images/hero-02.jpg'

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
                    <button className='border-2 p-3 px-7 font-semibold font-mono hover:scale-105'>
                        VIEW COLLECTION
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default MainEvent
