import React, {useState} from 'react';
import Link from 'next/link';
import axios from 'axios';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://ca-backend-467n.onrender.com/auth/login/', {
        username,
        password,
      });
      const access_token = response.data.access_token;
      console.log("Parameters successfully posted to backend");     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=''>
      <div className='relative bg-background pt-[100px]'>
        <div className='bottom-[10px] left-5 p-10 text-center text-5xl lg:text-7xl'>
          <span className='text-white select-none'>Login</span>
        </div>
      </div>
      <div className='sm:px-[100px] pb-[100px] md:px-[175px] px-[10px]'>
        <div className='z-0 rounded-[50px] bg-grey px-[30px] py-[30px] md:px-[10px]'>
          <form className='flex flex-col items-center gap-y-5' onSubmit={handleSubmit}>
            <div className='flex w-8/12 flex-col items-center gap-5 md:flex-row'>
              <span className='text-white w-max select-none align-middle text-xl font-medium font-spline'>
                Username:
              </span>
              <input
                placeholder='Enter Your Username'
                required
                type='text'
                value={username}
                className='h-[50px] grow self-stretch rounded-[50px] bg-background pl-[30px]'
              />
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 md:flex-row'>
              <span className='text-white select-none align-middle text-xl font-medium font-spline'>
                Password:
              </span>
              <input
                placeholder='Enter Your Password'
                required
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                type='password'
                value={password}
                className='h-[50px] self-stretch grow rounded-[50px] bg-background pl-[30px]'
              />
            </div>
            <Link href={'/register'} className='font-spline'>Haven't Registered Yet?</Link>
            <button className='text-white mb-[10px] mt-[10px] h-[40px] w-[150px] select-none rounded-[50px] bg-red text-[20px] font-bold md:w-[200px] font-spline' type='submit'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
