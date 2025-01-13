import React from 'react';

const SingleService = ({ service }) => {
    return (
        <div className="bg-white shadow-lg border rounded-lg p-5 py-10 hover:shadow-xl transition-shadow lg:max-w-[300px]">
            <div className="flex flex-col gap-6 items-center space-x-4 text-primary">
                <div className="p-4 bg-secondary rounded-full text-white text-3xl">
                    {<service.icon />}
                </div>
                <h2 className="text-xl font-semibold">
                    {service.title}
                </h2>
                <p className="">{service.description}</p>
            </div>
        </div>
    );
};

export default SingleService;

