// import { Button } from '@/components/ui/button';
// import { getPlaces } from '@/config/GlobalAPI';
// import React, { useEffect } from 'react'

// const InfoSection = ({trip}) => {
//     useEffect(()=> {
//      trip && getphoto();
//     },[trip])

//     const getphoto = async()=> {
//         const data = {
//             textQuery: trip?.userselection?.place
//         }
//        const result = await getPlaces(data).then((res)=> {
//         console.log(res.data);
//        })
//     }
//   return (
//     <div>
//       <div className='flex justify-between items-center'>
//       <div className='my-5 flex flex-col gap-2'>
//         <h2 className='font-bold text-2xl'>{trip?.userselection?.place}</h2>
//         <div className='flex gap-5'>
//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>📅 {trip?.userselection?.days} Days</h2>
//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>💰 {trip?.userselection?.budget} Budget</h2>
//             <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>🍾 No of {trip?.userselection?.people}</h2>
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default InfoSection
import PropTypes from 'prop-types';
import { getPlaces } from '@/config/GlobalAPI';
import { useEffect } from 'react';

const InfoSection = ({ trip }) => {
    const getPhoto = async () => {
        const place = trip?.userselection?.place; // This should be a string
        if (!place) return;
        const data = { textQuery: place };
        // Make sure getPlaces expects a string, not an object
        await getPlaces(data.textQuery).then((res) => {
          console.log(res.data);
        });
      };

    useEffect(() => {
        if (trip) {
            getPhoto();
        }
        // eslint-disable-next-line
    }, [trip]);

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.place}</h2>
                    <div className='flex gap-5'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>
                            📅 {trip?.userSelection?.days} Days
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>
                            💰 {trip?.userSelection?.budget} Budget
                        </h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>
                            🍾 No of {trip?.userSelection?.people}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

InfoSection.propTypes = {
    trip: PropTypes.shape({
        userSelection: PropTypes.shape({
            place: PropTypes.string,
            days: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            budget: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            people: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    }),
};

export default InfoSection;