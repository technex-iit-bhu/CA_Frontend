import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

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
      <div className='relative bg-background pt-[100px]'>
        <div className='bottom-[10px] left-5 p-10 text-center text-5xl lg:text-7xl'>
          <span className='text-white select-none'>Login</span>
        </div>
      </div>
      <div className='px-[10px] pb-[100px] sm:px-[100px] md:px-[175px]'>
        <div className='z-0 rounded-[50px] bg-grey px-[30px] py-[30px] md:px-[10px]'>
          <form
            className='flex flex-col items-center gap-y-5'
            onSubmit={handleSubmit}
          >
            <div className='flex w-8/12 flex-col items-center gap-5 md:flex-row'>
              <span className='text-white w-max select-none align-middle font-spline text-xl font-medium'>
                Username:
              </span>
              <input
                placeholder='Enter Your Username'
                required
                name='username'
                type='text'
                value={formData.username}
                onChange={handleChange}
                className='h-[50px] grow self-stretch rounded-[50px] bg-background pl-[30px]'
              />
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 md:flex-row'>
              <span className='text-white select-none align-middle font-spline text-xl font-medium'>
                Password:
              </span>
              <input
                placeholder='Enter Your Password'
                required
                name='password'
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                type='password'
                value={formData.password}
                onChange={handleChange}
                className='h-[50px] grow self-stretch rounded-[50px] bg-background pl-[30px]'
              />
            </div>
            <Link href={'/register'} className='font-spline'>
              Haven't Registered Yet?
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
