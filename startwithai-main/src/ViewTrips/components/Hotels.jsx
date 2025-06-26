// import React from 'react'
// import { Link } from 'react-router-dom'

// const Hotels = ({trip}) => {
//   return (
//     <div>
//      <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>

//      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3'>
//         {trip?.tripdata?.hotel_options?.map((hotel,index) => (
//             <Link to = {'https://www.google.com/maps/search/?api=1&query='+hotel?.hotel_name + ","+hotel?.hotel_address} key={index} target='_blank' rel='noreferrer'>
//             <div className='hover:scale-105 transition-all cursor-pointer'>
//               <div className='my-2 flex flex-col gap-2'>
//                 <h2 className='font-medium'>📍{hotel?.hotel_name}</h2>
//                 <h2 className='text-xs text-gray-500'>{hotel?.hotel_address}</h2>
//                 <h2 className='text-sm'>{hotel?.hotel_price}</h2>
//                 <h2 className='text-sm'>{hotel?.hotel_rating}</h2>
//               </div>
//             </div>
//             </Link>
//         ))}
//      </div>
//     </div>
//   )
// }

// export default Hotels
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>Hotel Recommendation</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3'>
        {trip?.tripdata?.hotel_options?.map((hotel, index) => (
          <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotel_name + "," + hotel?.hotel_address} key={index} target='_blank' rel='noreferrer'>
            <div className='hover:scale-105 transition-all cursor-pointer'>
              <div className='my-2 flex flex-col gap-2'>
                <h2 className='font-medium'>📍{hotel?.hotel_name}</h2>
                <h2 className='text-xs text-gray-500'>{hotel?.hotel_address}</h2>
                <h2 className='text-sm'>{hotel?.hotel_price}</h2>
                <h2 className='text-sm'>{hotel?.hotel_rating}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

Hotels.propTypes = {
  trip: PropTypes.shape({
    tripdata: PropTypes.shape({
      hotel_options: PropTypes.arrayOf(
        PropTypes.shape({
          hotel_name: PropTypes.string,
          hotel_address: PropTypes.string,
          hotel_price: PropTypes.string,
          hotel_rating: PropTypes.string,
        })
      ),
    }),
  }),
}

export default Hotels