import React from 'react';
import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
  const [Name, setName] = useState('');
  const [Address, setAddress] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [College, setCollege] = useState('');
  const [whyca, setWhyca] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch('api/getProfile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.status === 200) {
          const fetchedDetails = await response.json();
          setName(
            `${fetchedDetails.userprofile.first_name} ${fetchedDetails.userprofile.last_name}`
          );
          setCollege(fetchedDetails.userprofile.college);
          setEmail(fetchedDetails.email);
          setAddress(fetchedDetails.userprofile.postal_address);
          setPhone(fetchedDetails.userprofile.phone_no);
          setWhyca(fetchedDetails.userprofile.why_choose);
        } else if (response.status === 401) {
          setModalContent('Login Again');
          setShowModal(true);
          return;
        } else {
          console.error('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Server error', error);
      }
    };

    fetchProfile();
  }, []);

  const handleDashboard = () => {
    window.location.href = '/dashboardPage';
  };
  const handleModalClose = () => {
    setShowModal(false);
    // window.location.href = '/';
    localStorage.removeItem('accessToken');
    router.push('/');
  };

  return (
    <div>
      {/* <div className='relative mb-[160px] flex flex-col  lg:pl-[68px] pl-[50px] pt-[80px] md:mb-[70px] lg:pb-[100px] md:pb-10'>
        <div className='flex flex-col sm:pb-10 -space-y-9 sm:-space-y-16 md:-space-y-16 lg:-space-y-20 xl:-space-y-25'>
          <span className='text-[62px]  font-bold text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem] font-spline'>
            Profile
          </span>
          <span className='text-white z-10 ml-1 select-none text-[25px]   ef:text-4xl md:ml-2 md:text-7xl lg:ml-3 font-spline'>Profile</span>
        </div>
      </div> */}
      <div className='z-10 pb-[110px] '>
        <Navbar />
      </div>
      <div className='relative  mb-[160px] flex flex-col bg-background pl-[50px] pt-[120px] ef:mb-[170px] ef:pt-[130px] sm:mb-[150px] sm:pt-[120px] md:mb-[180px] md:pb-0 md:pt-[190px] lg:pb-[100px] lg:pt-[150px]'>
        <div className=' absolute bottom-3 flex flex-col -space-y-14 ef:-space-y-16 sm:text-left md:-space-y-32 '>
          <span className='text-[62px] font-bold text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
            Profile
          </span>
          <span className='text-white z-10 ml-1 select-none text-[25px] ef:text-4xl md:ml-2 md:pt-3 md:text-6xl lg:ml-3'>
            Profile
          </span>
        </div>
      </div>
      <div className='px-[30px] md:px-[50px] '>
        <div className='z-0 mb-20 rounded-[50px] bg-grey px-[50px]  md:px-[30px]'>
          <div className='flex flex-col pb-10 lg:flex-row lg:pb-4 lg:pl-[0px]   lg:pt-4 '>
            <div className='mt-[-150px] flex flex-col'>
              <div className='h-[250px] w-[250px] select-none self-center rounded-full border-4 border-red bg-background '>
                <img
                  src='https://play-lh.googleusercontent.com/Oriscl3_nvmDPncct6gStmNuQW_4tqHVozy1skG0vd8Jk22KYNMYYJfKq0vcyU-NKdw'
                  alt='profile picture'
                  width={250}
                  height={250}
                  className='rounded-full '
                />
              </div>
              <div className='flex flex-col  lg:w-[500px] lg:pl-[20px] '>
                <p className='text-white flex select-none flex-wrap self-center text-center font-spline text-[30px] font-bold lg:self-start lg:text-left lg:text-[50px]'>
                  {Name}
                </p>
                <p className='text-white flex select-none flex-wrap self-center font-spline text-[15px] lg:self-start lg:text-[20px]'>
                  {whyca}
                </p>
              </div>
            </div>
            <div className='m-6 h-[2px] w-auto bg-red lg:h-[400px] lg:w-[2px] lg:self-center '></div>
            <div className='flex grow flex-col justify-center gap-[8px] self-center   lg:w-[200px] lg:pl-[30px] lg:pr-[30px] '>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2  p-6 font-spline md:rounded-[50px]'>
                <p className='text-white select-none text-[15px] font-bold '>
                  College:
                </p>
                <p className='text-white select-none text-right font-spline sm:text-[15px]'>
                  {College}
                </p>
              </div>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2 p-6 font-spline md:rounded-[50px]'>
                <p className='text-white select-none  text-[15px] font-bold '>
                  Email-id:
                </p>
                <p className='text-white select-none text-right font-spline text-[15px]'>
                  {Email}
                </p>
              </div>

              <div className='mr-[10px] flex flex-row gap-[15px] rounded-[25px] bg-black2 p-6 font-spline md:rounded-[50px]'>
                <p className='text-white select-none  text-[15px] font-bold '>
                  Phone No:
                </p>
                <p className='text-white select-none text-right font-spline text-[15px]'>
                  {Phone}
                </p>
              </div>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2 p-6 md:rounded-[50px]'>
                <p className='text-white select-none font-spline text-[15px] font-bold '>
                  Address:
                </p>
                <p className='text-white select-none text-right font-spline '>
                  {Address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto mb-[100px] flex w-[100px] items-center justify-center rounded-full bg-red p-6 md:w-[200px] md:p-6 lg:w-[393px] lg:p-6 '>
        <button
          className='font-spline sm:text-xl lg:text-4xl'
          onClick={handleDashboard}
        >
          Dashboard
        </button>
      </div>
      {showModal && (
        <div
          className='fixed inset-0 flex items-center justify-center bg-grey bg-opacity-50'
          onClick={() => setShowModal(false)}
        >
          <div className='h-50 flex w-[30%] flex-col rounded-lg bg-grey p-5 shadow-lg'>
            <p className='self-center'>{modalContent}</p>
            <button
              onClick={handleModalClose}
              className='text-white m-4 self-center rounded-full bg-red px-4 py-2 lg:w-[50%]'
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
