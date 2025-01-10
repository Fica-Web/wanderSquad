import React from 'react';
import SinglePackage from '../reusable/SinglePackage';

const PackageListing = () => {
    return (
        <div className="min-h-[90vh] bg-white px-4">
            <h2 className="kaushan-script-regular text-4xl text-center my-10 md:my-20">
                Our popular packages
            </h2>
            <div className="flex justify-center flex-wrap gap-8 mb-10">
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
                <SinglePackage />
            </div>
        </div>
    )
}

export default PackageListing
