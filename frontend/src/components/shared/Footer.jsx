import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import navOptions from '../../data/navOptions';

const Footer = () => {
    return (
        <div className='bg-primary text-white w-full'>
            <div className='w-full flex justify-around p-10 py-20'>
                <div className='lg:w-1/2 '>
                    <p className=''>
                        WanderSquad is as a leading travel agency committed to unveiling the most extraordinary global destinations. Trough our individually tailored assistance and guidance, you can set forth on a journey of unparalleled experiences, whether your pursuit is unwinding, voyaging, or engaging in cultural submersion.
                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                    {navOptions.map((option) => (
                        <Link
                            key={option.name}
                            to={option.link}
                            className='hover:text-secondary'
                        >
                            {option.name}
                        </Link>
                    ))}
                </div>
                <div className=''>
                    <h3 className='text-xl font-semibold'>
                        Contact Us
                    </h3>
                    <div className='my-8'>
                        <div className='flex gap-2 items-center text-secondary my-3'>
                            <IoIosMail className='text-2xl' />
                            <p className='text-white'>
                                hello@wandersquad.com
                            </p>
                        </div>
                        <div className='flex gap-2 items-center text-secondary'>
                            <FaPhoneAlt className='text-lg' />
                            <p className='text-white'>
                                +91 8123456789
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>

            </div>
        </div>
    )
}

export default Footer
