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
            <h2 className="kaushan-script-regular text-primary text-4xl text-center my-10 md:my-20">
                Our popular packages
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 md:px-16">
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
            </div>
            <div className='flex justify-center my-10'>
                <ReusableButton 
                    handleClick={handleClick}
                    content={'Explore More'}
                    color={'border-secondary text-secondary'}
                />
            </div>
        </div>
    )
}

export default PackageListing