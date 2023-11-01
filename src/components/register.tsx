import React, { useState } from 'react';
import Link from 'next/link';
import axios, { AxiosError } from 'axios';
import Router from 'next/router';
const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    college: '',
    year: 1,
    phone_no: '',
    whatsapp_no: '',
    postal_address: '',
    pin_code: 0,
    why_choose: '',
    were_you_ca: false,
    points: 0,
  });

  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  //   const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement> | any) => {
  //     e.preventDefault();
  //     console.log('Form Submitted');

  //     if (formData.password !== formData.confirmPassword) {
  //       setModalContent('Passwords do not match!');
  //       setShowModal(true);
  //       return;
  //     }

  //     try {
  //       const response = await fetch(
  //         'https://ca-backend-467n.onrender.com/auth/register/',
  //         {
  //           mode: 'no-cors',
  //           method: 'post',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify(formData),
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();

  //       if (response.status === 200) {
  //         console.log('Success');
  //         setModalContent('Verification link has been sent by email!');
  //         setShowModal(true);
  //       } else if (response.status === 409) {
  //         console.log('Error 409');
  //         setModalContent(
  //           data.username ||
  //             data.email ||
  //             'Conflict Error! Verify Username or email again if they were registered'
  //         );
  //         setShowModal(true);
  //       } else if (response.status === 226) {
  //         console.log('Error226');
  //         setModalContent(data.error);
  //         setShowModal(true);
  //       } else {
  //         console.log('Any other Error Occured');
  //         setModalContent('An error occurred!');
  //         setShowModal(true);
  //       }
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Form Submitted');

    if (formData.password !== formData.confirmPassword) {
      setModalContent('Passwords do not match!');
      setShowModal(true);
      return;
    }

    try {
      const response = await axios.post(
        'https://ca-backend-467n.onrender.com/auth/register/',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Success', response.data);
      setModalContent('Verification link has been sent by email!');
      setShowModal(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response);
        const status = error.response?.status;
        const data = error.response?.data;

        if (status === 409) {
          setModalContent(
            data.username ||
              data.email ||
              'Conflict Error! Verify Username or email again if they were registered'
          );
        } else if (status === 226) {
          setModalContent(data.error);
        } else {
          setModalContent('An error1 occurred!');
        }
      } else {
        console.error('Error:', error);
        setModalContent('An error2 occurred!');
      }
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (modalContent === 'Verification link has been sent by email!') {
      Router.push('https://ca-frontend-ebon.vercel.app/');
    }
  };

  return (
    <div className=''>
      <div className='relative bg-background pt-[100px]'>
        <div className='bottom-[10px] left-5 p-10 text-center text-5xl lg:text-7xl'>
          <span className='text-white select-none'>Register</span>
        </div>
      </div>
      <div className='px-[10px] pb-[100px] sm:px-[50px]'>
        <div className='z-0 w-auto rounded-[50px] bg-grey px-[30px] py-[30px] md:px-[10px]'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center gap-y-5'
          >
            <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
              <span className='text-white select-none align-middle text-xl font-medium'>
                First Name*:
              </span>
              <input
                placeholder='Enter Your First Name'
                required
                type='text'
                name='first_name'
                value={formData.first_name}
                onChange={handleChange}
                className='h-[50px] grow self-stretch rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
              <span className='text-white w-max select-none align-middle text-xl font-medium'>
                Last Name*:
              </span>
              <input
                placeholder='Enter Your Last Name'
                required
                type='text'
                name='last_name'
                value={formData.last_name}
                onChange={handleChange}
                className='h-[50px] grow  self-stretch rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
              <span className='text-white select-none align-middle text-xl font-medium'>
                Email*:
              </span>
              <input
                placeholder='Who do we reply to?'
                required
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='h-[50px] grow  self-stretch rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
              <span className='text-white select-none align-middle text-xl font-medium'>
                College*:
              </span>
              <input
                placeholder='In which Institute do you study?'
                required
                type='text'
                name='college'
                value={formData.college}
                onChange={handleChange}
                className='h-[50px] grow  self-stretch rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
              <span className='text-white w-max select-none align-middle text-xl font-medium'>
                Year*:
              </span>
              <select
                className='h-[50px] grow  self-stretch rounded-[50px] bg-background px-[10px] text-center text-black lg:text-left'
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: +(e.target.value.charAt(0)) })
                }
              >
                <option value='1st Year'>1st Year</option>
                <option value='2nd Year'>2nd Year</option>
                <option value='3rd Year'>3rd Year</option>
                <option value='4th Year'>4th Year</option>
                <option value='5th Year'>5th Year</option>
              </select>
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
              <span className='text-white select-none text-center align-middle text-xl font-medium lg:text-left'>
                Postal Address*:
              </span>
              <input
                placeholder='What is your Address?'
                required
                type='text'
                name='postal_address'
                value={formData.postal_address}
                onChange={handleChange}
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
              <span className='text-white w-max select-none align-middle text-xl font-medium'>
                Pincode*:
              </span>
              <input
                placeholder='Enter Your Pincode'
                required
                type='tel'
                pattern='[0-9]{6}'
                name='pin_code'
                value={formData.pin_code}
                onChange={handleChange}
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
              <span className='text-white select-none text-center align-middle text-xl font-medium lg:text-left'>
                Why should we choose you ?*
              </span>
              <input
                placeholder='Why should we choose you?'
                required
                type='text'
                name='why_choose'
                value={formData.why_choose}
                onChange={handleChange}
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
              <span className='text-white select-none text-center align-middle text-xl font-medium lg:text-left'>
                Previous CA Experience*:
              </span>
              <select
                value={formData.were_you_ca ? 'Yes' : 'No'}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    were_you_ca: e.target.value === 'Yes',
                  })
                }
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[10px] text-center text-black lg:text-left'
              >
                <option>No</option>
                <option>Yes</option>
              </select>
              <span className='text-white w-max select-none align-middle text-xl font-medium'>
                Phone Number*:
              </span>
              <input
                placeholder='What is your contact number?'
                required
                type='tel'
                pattern='[0-9]{10}'
                name='phone_no'
                value={formData.phone_no}
                onChange={handleChange}
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
              <span className='text-white select-none text-center align-middle text-xl font-medium lg:text-left'>
                Whatsapp Number*:
              </span>
              <input
                placeholder='What is your Whatsapp no?'
                required
                type='tel'
                pattern='[0-9]{10}'
                name='whatsapp_no'
                value={formData.whatsapp_no}
                onChange={handleChange}
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
              <span className='text-white w-max select-none align-middle text-xl font-medium'>
                Username*:
              </span>
              <input
                placeholder='Choose your Username'
                required
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
            </div>
            <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
              <span className='text-white select-none align-middle text-xl font-medium'>
                Password*:
              </span>
              <input
                placeholder='Password'
                required
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
              <span className='text-white select-none text-center align-middle text-xl font-medium lg:text-left'>
                Confirm Password*:
              </span>
              <input
                placeholder='Confirm Password'
                required
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                className='h-[50px] grow self-stretch  rounded-[50px] bg-background px-[30px] text-center text-black lg:text-left'
              />
            </div>
            <p className='select-none text-center text-xs font-thin'>
              Password Requirements: [A LowerCase Letter, An UpperCase Letter, A
              Number, Minimum 8 Characters]
            </p>
            <Link href={'/login'} className='text-center'>
              Already a Campus Ambassador?
            </Link>
            <button
              className='text-white mb-[10px] mt-[10px] h-[40px] w-[150px] select-none rounded-[50px] bg-red text-[20px] font-bold md:w-[200px]'
              type='submit'
            >
              Register
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

export default Register