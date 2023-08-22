'use client';

import { useCallback, useState } from 'react';
import Input from '../components/Input';

const Auth = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [variant, setVariant] = useState<'login' | 'signup'>('login');

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === 'login' ? 'signup' : 'login'));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/memorial.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <h2 className='text-white text-2xl font-semibold'>joestream.io</h2>
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === 'login' ? 'Sign In' : 'Sign Up'}
            </h2>
            <div className='flex flex-col gap-4'>
              {variant === 'signup' && (
                <Input
                  label='Username'
                  onChange={(e: any) => setUsername(e.target.value)}
                  id='username'
                  type='username'
                  value={username}
                />
              )}

              <Input
                label='Email'
                onChange={(e: any) => setEmail(e.target.value)}
                id='email'
                type='email'
                value={email}
              />
              <Input
                label='Password'
                onChange={(e: any) => setPassowrd(e.target.value)}
                id='password'
                type='password'
                value={password}
              />
              <button className='bg-blue-700 py-3 text-white rounded-md w-full mt-10 hover:bg-blue-900 transition'>
                {variant === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
              <p className='text-neutral-500 mt-12'>
                {variant === 'login'
                  ? `First time here ?   `
                  : 'Already have an account ?'}

                <span
                  onClick={toggleVariant}
                  className='text-white ml-1 hover:underline curser-pointer'
                >
                  {variant === 'login' ? 'Sign Up' : 'Sign In'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
