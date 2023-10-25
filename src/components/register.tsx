import React from 'react';
import Link from 'next/link';

const Register = () => {
    return (
        <div className=''>
            <div className='relative bg-background pt-[100px]'>
                <div className='bottom-[10px] left-5 p-10 text-center text-5xl lg:text-7xl'>
                <span className='text-white select-none'>Register</span>
                </div>
            </div>
            <div className='sm:px-[50px] pb-[100px] px-[10px]'>
                <div className='z-0 rounded-[50px] bg-grey px-[30px] py-[30px] md:px-[10px] w-auto'>
                    <form className='flex flex-col items-center gap-y-5'>
                        <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
                            <span className='text-white select-none align-middle text-xl font-medium'>
                                First Name*:
                            </span>
                            <input
                                placeholder='Enter Your First Name'
                                required
                                type='text'
                                className='h-[50px] self-stretch rounded-[50px] grow bg-background px-[30px] lg:text-left text-center'
                            />
                            <span className='text-white w-max select-none align-middle text-xl font-medium'>
                                Last Name*:
                            </span>
                            <input
                                placeholder='Enter Your Last Name'
                                required
                                type='text'
                                className='h-[50px] grow self-stretch rounded-[50px] bg-background px-[30px] lg:text-left text-center'
                            />
                        </div>
                        <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
                            <span className='text-white select-none align-middle text-xl font-medium'>
                                Email*:
                            </span>
                            <input
                                placeholder='Who do we reply to?'
                                required
                                type='text'
                                className='h-[50px] self-stretch rounded-[50px] grow bg-background px-[30px] lg:text-left text-center'
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
                                className='h-[50px] self-stretch rounded-[50px] grow bg-background px-[30px] lg:text-left text-center'
                            />
                            <span className='text-white w-max select-none align-middle text-xl font-medium'>
                                Year*:
                            </span>
                            <select className='h-[50px] grow self-stretch rounded-[50px] bg-background px-[10px] lg:text-left text-center'>
                                <option>1st Year</option>
                                <option>2nd Year</option>
                                <option>3rd Year</option>
                                <option>4th Year</option>
                                <option>5th Year</option>
                            </select>         
                        </div>
                        <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
                            <span className='text-white select-none align-middle text-xl font-medium lg:text-left text-center'>
                                Postal Address*:
                            </span>
                            <input
                                placeholder='What is your Address?'
                                required
                                type='text'
                                className='h-[50px] self-stretch rounded-[50px] grow bg-background px-[30px] lg:text-left text-center'
                            />
                            <span className='text-white w-max select-none align-middle text-xl font-medium'>
                                Pincode*:
                            </span>
                            <input
                                placeholder='Enter Your Pincode'
                                required
                                type='text'
                                className='h-[50px] grow self-stretch rounded-[50px] bg-background px-[30px] lg:text-left text-center'
                            />
                        </div>
                        <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
                            <span className='text-white select-none align-middle text-xl font-medium lg:text-left text-center'>
                                Why should we choose you ?*
                            </span>
                            <input
                                placeholder='Why should we choose you?'
                                required
                                type='text'
                                className='h-[50px] self-stretch rounded-[50px] grow bg-background px-[30px] lg:text-left text-center'
                            />
                        </div>
                        <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
                            <span className='text-white select-none align-middle text-xl font-medium text-center lg:text-left'>
                                Previous CA Experience*:
                            </span>
                            <select className='h-[50px] grow self-stretch rounded-[50px] bg-background px-[10px] lg:text-left text-center'>
                                <option>No</option>
                                <option>Yes</option>
                            </select> 
                            <span className='text-white w-max select-none align-middle text-xl font-medium'>
                                Phone Number*:
                            </span>
                            <input
                                placeholder='What is your contact number?'
                                required
                                type='text'
                                className='h-[50px] grow self-stretch rounded-[50px] bg-background px-[30px] lg:text-left text-center'
                            />
                        </div>
                        <div className='flex w-8/12 flex-col items-center gap-5 lg:flex-row'>
                            <span className='text-white select-none align-middle text-xl font-medium text-center lg:text-left'>
                                Whatsapp Number*:
                            </span>
                            <input
                                placeholder='What is your Whatsapp no?'
                                required
                                type='text'
                                className='h-[50px] self-stretch rounded-[50px] grow bg-background px-[30px] lg:text-left text-center'
                            />
                            <span className='text-white w-max select-none align-middle text-xl font-medium'>
                                Username*:
                            </span>
                            <input
                                placeholder='Choose your Username'
                                required
                                type='text'
                                className='h-[50px] grow self-stretch rounded-[50px] bg-background px-[30px] lg:text-left text-center'
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
                                className='h-[50px] self-stretch rounded-[50px] grow bg-background px-[30px] lg:text-left text-center'
                            />
                            <span className='text-white select-none align-middle text-xl font-medium text-center lg:text-left'>
                                Confirm Password*:
                            </span>
                            <input
                                placeholder='Confirm Password'
                                required
                                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                                type='password'
                                className='h-[50px] grow self-stretch rounded-[50px] bg-background px-[30px] lg:text-left text-center'
                            />
                        </div>
                        <p className='font-thin select-none text-xs text-center'>Password Requirements: [A LowerCase Letter, An UpperCase Letter, A Number, Minimum 8 Characters]</p>
                        <Link href={'/login'} className="text-center">Already a Campus Ambassador?</Link>
                        <button className='text-white mb-[10px] mt-[10px] h-[40px] w-[150px] select-none rounded-[50px] bg-red text-[20px] font-bold md:w-[200px]' type='submit'>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;