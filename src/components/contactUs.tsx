import React from 'react';
import Image from 'next/image';
const ContactUs = () => {
  return (
    <div className='bg-background'>
      <div className='relative mb-[20px] flex flex-col items-center justify-center bg-background pl-[10px] '>
        <div className='flex flex-col -space-y-14 ef:-space-y-16 sm:text-left md:-space-y-32'>
          <span className='text-[62px] text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
            CONTACT
          </span>
          <span className='text-white z-10 ml-1 transform select-none text-center text-[25px] transition duration-700 hover:scale-110 ef:text-4xl md:ml-2 md:text-7xl lg:ml-3'>
            <span className='text-red'>Contact</span>US
          </span>
        </div>
      </div>

      <br></br>
      <br />
      <br />
      <div className='flex flex-wrap items-center justify-center gap-12'>
        <div className='flex  pb-5 '>
          <div className='flex items-center justify-center gap-1 lg:gap-2'>
            <div className=''>
              <Image
                src={'/phone-call.webp'}
                alt='phone logo'
                width={30}
                height={30}
                className=''
              />
            </div>
            <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
              <h2 className='font-bold text-red'>Rhythm S. Rajpurohit</h2>
              <div>+918955879550</div>
            </div>
          </div>
        </div>
        <div className='flex gap-20 pb-5'>
          <div className='flex items-center'>
            <div className='flex items-center justify-center gap-1 lg:gap-6'>
              <div className=''>
                <Image
                  src={'/phone-call.webp'}
                  alt='phone logo'
                  width={30}
                  height={30}
                  className=''
                />
              </div>
              <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
                <h2 className='font-bold text-red'>Vinamrah Nemani</h2>
                <div>+917870355406</div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center gap-1 lg:gap-6'>
              <div>
                <Image
                  src={'/phone-call.webp'}
                  alt='phone logo'
                  width={30}
                  height={30}
                  className=''
                />
              </div>
              <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
                <h2 className='font-bold text-red'>Niladri Mondal</h2>
                <div>+917602440074</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-20 pb-5'>
          <div>
            <div className='flex items-center justify-center gap-1 lg:gap-6'>
              <div>
                <Image
                  src={'/phone-call.webp'}
                  alt='phone logo'
                  width={30}
                  height={30}
                  className=''
                />
              </div>
              <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
                <h2 className='font-bold text-red'>Saransh Mishra</h2>
                <div>+919039913393</div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex pb-5'>
          <div className='flex items-center justify-center gap-1 lg:gap-6'>
            <div>
              <Image
                src={'/phone-call.webp'}
                alt='phone logo'
                width={30}
                height={30}
                className=''
              />
            </div>
            <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
              <h2 className='font-bold text-red'>Yashvardhan S. Chauhan</h2>
              <div>+917692980743</div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default ContactUs;
