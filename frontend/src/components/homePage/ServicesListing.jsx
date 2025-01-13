import React from 'react';
import SingleService from '../reusable/SingleService';
import services from '../../data/services';

const ServicesListing = () => {
    return (
        <div className="min-h-[90vh] bg-white px-4 text-primary">
            <h2 className="kaushan-script-regular text-4xl text-center my-10 md:my-20">
                Our Services
            </h2>
            <div className='flex justify-center'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <SingleService
                            key={service.id}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesListing
