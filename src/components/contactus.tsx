import React from 'react'
import Image from 'next/image';
const Contactus=()=>{
    return(<div className='flex flex-col bg-background p-[120px] gap-[100px] relative '>
            <div className='flex gap-[4px] lg:text-7xl text-5xl absolute align-right right-5 lg:bottom-[120px] lg:p-20 md:p-2 bottom-[250px] sm:text-center  '>
                <span className='text-red'>Contact</span>
                <span className='text-white'>Us</span>
            </div>
            <div className='flex lg:flex-row flex-col md:flex-row lg:justify-evenly md:justify-evenly items-center lg:gap-0 gap-5'>
            <div className='flex items-center'>
                <div className='flex lg:gap-6 gap-1 items-center justify-center'>
                    <div className=''>
                    <Image 
                    src={"/phone-call.webp"}
                    alt='phone logo'
                    width={30}
                    height={30}
                    className=''
                    />
                    </div>
                    <div className='flex flex-col justify-center lg:text-3xl md:text-xl text-xs '>
                        <h2 className='text-red font-bold'>Rhythm</h2>
                        <div className=''>+91 0000000000</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex lg:gap-6 gap-1 items-center justify-center'>
                    <div>
                    <Image 
                    src={"/phone-call.webp"}
                    alt='phone logo'
                    width={30}
                    height={30}
                    className=''
                    />
                    </div>
                    <div className='flex flex-col justify-center lg:text-3xl md:text-xl text-xs '>
                        <h2 className='text-red font-bold'>Rhythm</h2>
                        <div>+91 0000000000</div>
                    </div>
                </div>
            </div>
           </div>
        
    </div>)

}
export default Contactus;