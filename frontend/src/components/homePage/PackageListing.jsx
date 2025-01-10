import React from 'react';
import { useNavigate } from 'react-router-dom';
import SinglePackage from '../reusable/SinglePackage';
import ReusableButton from '../reusable/ReusableButton';

const PackageListing = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact')
    }

    return (
        <div className="min-h-[90vh] bg-white px-4">
            <h2 className="kaushan-script-regular text-4xl text-center my-10 md:my-20">
                Our popular packages
            </h2>
            <div className="flex justify-center flex-wrap gap-8 ">
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
            </div>
            <div className='flex justify-center mb-10'>
                <ReusableButton 
                    hanleClick={handleClick}
                    content={'Explore More'}
                />
            </div>
        </div>
    )
}

export default PackageListing
