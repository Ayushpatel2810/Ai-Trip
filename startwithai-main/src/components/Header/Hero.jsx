import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[60px] text-center mt-16'>
        Discover your next Trip with us
      </h1>
      <p className='text-xl text-gray-500 text-center'>
        Your personal trip planner and travel tutor, creating custom itineraries tailored to your interests and budget.
      </p>
      <Link to='/create-trip'>
        <Button>Get Started, it's free</Button>
      </Link>
    </div>
  );
};

export default Hero;