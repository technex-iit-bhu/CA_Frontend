import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Textbox from '../components/textbox';
import Navbar from './navbar';

const Login = () => {
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch('api/login', {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const access_token = await response.json();
      console.log(access_token);
      console.log('Parameters successfully posted to backend');
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (modalContent === 'successfully logged in') {
      Router.push('https://ca-frontend-ebon.vercel.app/');
    }
  };

  return (
    <div className=''>
        <div className='z-10 pb-10 lg:pb-10 xl:pb-10 absolute w-full'>
          <Navbar />
        </div>
      <div className='relative bg-background pt-[100px]'>
        <div className='bottom-[10px] left-5 p-10 text-center text-5xl lg:text-7xl'>
          <span className='text-white select-none'>Login</span>
        </div>
      </div>
      <div className='self-center px-[50px] pb-[100px] lg:px-[100px] xl:px-[400px]'>
        <div className='z-20 rounded-[50px] bg-grey px-[20px] py-[30px] sm:px-[30px] md:px-[50px]'>
          <form
            className='flex flex-col items-center gap-y-5'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col content-center gap-5 self-stretch lg:flex-row'>
              <Textbox
                label='Username:'
                placeholder='Enter Your Username'
                name='username'
                type='text'
                value={formData.username}
                onChange={handleChange}
              />
              <Textbox
                label='Password:'
                placeholder='Enter Your Password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Link href={'/register'} className='font-spline'>
              Haven't Registered Yet? Sign In
            </Link>
            <button
              className='text-white mb-[10px] mt-[10px] h-[40px] w-[150px] select-none rounded-[50px] bg-red font-spline text-[20px] font-bold md:w-[200px]'
              type='submit'
            >
              Login
            </button>
          </form>
          {showModal && (
            <div className='fixed inset-0 flex items-center justify-center bg-grey bg-opacity-50'>
              <div className='rounded-lg bg-grey p-5 shadow-lg'>
                <p>{modalContent}</p>
                <button
                  onClick={() => setShowModal(false)}
                  className='text-white m-4 rounded-full bg-red px-4 py-2'
                >
                  Okay
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
