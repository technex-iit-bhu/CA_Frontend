// import React from 'react';
// import Image from 'next/image';
// const ContactUs = () => {
//   return (
//     //<div className='relative mb-[20px] flex flex-col bg-background pl-[10px] pt-[200px]'>
//     //     <div className=' absolute bottom-3 flex flex-col -space-y-14 ef:-space-y-16 sm:text-left md:-space-y-32 '>
//     //       <span className='text-[62px] text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
//     //         FAQs
//     //       </span>
//     //       <span className='text-white z-10 ml-1 transform select-none text-[25px] transition duration-700 hover:scale-110 ef:text-4xl md:ml-2 md:text-7xl lg:ml-3'>
//     //         FAQs
//     //       </span>
//     //     </div>
//     //   </div>
//     <div className='relative flex flex-col gap-[100px] bg-background p-[120px] '>
//       <div className='absolute bottom-[250px] right-5 flex gap-[4px] text-5xl sm:text-center md:p-2 lg:bottom-[120px] lg:p-20 lg:text-7xl font-spline'>
//   <span className='text-red opacity-20'>
//     CONTACT
//   </span>

//   <span className='text-white z-10 ml-1 transform select-none text-[25px] transition duration-700 hover:scale-110 ef:text-4xl md:ml-2 md:text-7xl lg:ml-3' style={{ margin: '-30px 0 0 0' }}>
//     <span className='text-red'>Contact</span>
//     <span className='text-white'>Us</span>
//   </span>
// </div>

//       <div className='flex flex-col items-center gap-5 md:flex-row md:justify-evenly lg:flex-row lg:justify-evenly lg:gap-0'>
//         <div className='flex items-center'>
//           <div className='flex items-center justify-center gap-1 lg:gap-6'>
//             <div className=''>
//               <Image
//                 src={'/phone-call.webp'}
//                 alt='phone logo'
//                 width={30}
//                 height={30}
//                 className=''
//               />
//             </div>
//             <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
//               <h2 className='font-bold text-red'>Rhythm</h2>
//               <div className=''>+91 0000000000</div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className='flex items-center justify-center gap-1 lg:gap-6'>
//             <div>
//               <Image
//                 src={'/phone-call.webp'}
//                 alt='phone logo'
//                 width={30}
//                 height={30}
//                 className=''
//               />
//             </div>
//             <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
//               <h2 className='font-bold text-red'>Rhythm</h2>
//               <div>+91 0000000000</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ContactUs;

import React from 'react';
import Image from 'next/image';
const ContactUs = () => {
  return (
    <div className='bg-background'>
      <div className='relative mb-[20px] flex flex-col bg-background pl-[10px] pt-[100px] justify-center items-center'>
  <div className='flex flex-col -space-y-14 ef:-space-y-16 sm:text-left md:-space-y-32'>
    <span className='text-[62px] text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
      CONTACT
    </span>
    <span className='text-white z-10 ml-1 transform select-none text-[25px] transition duration-700 hover:scale-110 ef:text-4xl md:ml-2 md:text-7xl lg:ml-3'>
     <span className='text-red'>Contact</span>US
    </span>
  </div>
</div>

      <br></br><br/><br/>
        <div className='flex flex-col items-center gap-5 md:flex-row md:justify-evenly lg:flex-row lg:justify-evenly lg:gap-0'>
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
              <h2 className='font-bold text-red'>Rhythm</h2>
              <div className=''>+91 0000000000</div>
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
              <h2 className='font-bold text-red'>Rhythm</h2>
              <div>+91 0000000000</div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
  )};

  export default ContactUs;