import React from 'react'

const SinglePackage = () => {
    return (
        // <div className="bg-white shadow-lg rounded-lg overflow-hidden md:min-w-[350px] transition-transform transform hover:scale-105">
        //     <img
        //         src="https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?cs=srgb&dl=pexels-freestockpro-2144326.jpg&fm=jpg"
        //         alt="Travel Destination Image"
        //         className="w-full h-56 object-cover"
        //     />
        //     <div className="p-4">
        //         <h3 className="text-lg font-semibold text-gray-800 mb-2">
        //             Dubai
        //         </h3>
        //         <p className="text-gray-600 mb-4">
        //             5 Days & $ Nights
        //         </p>
        //         <div className="flex justify-between items-center">
        //             <span className="text-xl font-bold text-green-600">$49.99</span>
        //             <button className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors">
        //                 Book Now
        //                 {/* <FaCartShopping /> */}
        //             </button>
        //         </div>
        //     </div>
        // </div>
        <div
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            // onClick={() => handlePackageClick(pkg)}
          >
            {/* Image */}
            <img
              src='https://images.pexels.com/photos/2144326/pexels-photo-2144326.jpeg?cs=srgb&dl=pexels-freestockpro-2144326.jpg&fm=jpg'
            //   alt={pkg.name}
              className="w-full h-119 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 space-y-1 bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <h2 className="text-lg font-Bevas text-white">Dubai</h2>
              <p className="text-sm font-Bevas text-white">5 Days & $ Nights</p>
            </div>
          </div>
    )
}

export default SinglePackage
