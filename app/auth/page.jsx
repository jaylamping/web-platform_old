'use client';

import { useState } from 'react';
import Input from '../components/Input';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="relative h-full w-full bg-[url('/images/memorial.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <h2 className='text-white text-2xl font-semibold'>joestream.io</h2>
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>Sign In</h2>
            <div className='flex flex-col gap-4'>
              <Input
                label='Username'
                onChange={(e) => setUsername(e.target.value)}
                id='username'
                type='username'
                value={username}
              />
              <Input
                label='Email'
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                type='email'
                value={email}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
