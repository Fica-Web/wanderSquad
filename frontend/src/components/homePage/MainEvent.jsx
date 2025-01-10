import React from 'react';
import mainEventHero from '../../assets/images/hero-02.jpg'

const MainEvent = () => {
    return (
        <div 
            style={{backgroundImage: `url(${mainEventHero})`}}
            className='background-img text-white flex justify-end items-center lg:px-36 sm:px-16'
        >
            <div className='sm:max-w-[370px] w-full p-4'>
                <img 
                    src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-03-b.jpg" alt="" 
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
