import React from 'react'

const ReusableButton = ({ content, hanleClick }) => {
    return (
        <button
            onClick={hanleClick}
            className='bg-gray-500 text-white p-2 px-5 md:px-8 rounded-full mx-auto my-10'
        >
            { content }
        </button>
    )
}

export default ReusableButton
