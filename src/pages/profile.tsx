import React from 'react'


export default function profile ()  {
  return (
    <div>
        <div className='flex flex-col bg-background pt-[200px] relative pl-[120px] md:mb-[50px] mb-[100px]'>
          <div className='flex text-5xl absolute align-left left-5 lg:text-7xl lg:p-10 md:p-10 bottom-[10px] sm:text-center'>
            <span className='text-white select-none'>Profile</span>
          </div>
        </div>
        <div className='px-[50px] md:px-[70px] '>
                <div className='bg-grey px-[50px] md:px-[30px]  py-[30px] rounded-[50px] mb-20 z-0'>
                    <div className='flex lg:flex-row flex-col  lg:pl-[50px] '>
                        <div className='flex flex-col mt-[-110px]'>
                            <div className='select-none bg-background w-[300px] h-[300px] rounded-full border-4 border-red lg:self-start self-center'></div>
                            <div className='flex flex-col lg:pl-[70px] lg:pr-[100px] pt-[20px] pb-[30px] lg:w-[500px]'>
                                <p className='select-none lg:self-start text-white font-bold text-[60px] self-center flex flex-wrap lg:text-left text-center'>Amuse Bouche Sharma</p>
                                <p className='select-none lg:self-start text-white text-[25px] self-center flex flex-wrap'>Hello I am a keen enthusiast in Machine Learning, Meko IG mein lelo plz
                                I do bohot saara machine learning with my machine. </p>
                            </div>
                        </div>
                        <div className='lg:h-[800px] lg:w-[2px] h-[2px] w-auto bg-red'></div>
                        <div className='flex flex-col lg:pl-[100px] lg:pr-[100px]  lg:w-[400px] justify-center  self-center grow pt-[50px] gap-20 '>
                            <div className='  lg:h-[80px] lg:w-[500px]   md:rounded-[50px] bg-black2 p-4 rounded-[25px] flex flex-row   mr-[10px] gap-[20px]'>
                                <p className='select-none text-white font-bold sm:text-[25px] text-[10px] self-center '>College:</p>
                                <p className='select-none text-white sm:text-[25px] text-[10px] self-center   '> IIT BHU, they hate your guts</p>
                            </div>
                            <div className='  lg:h-[80px] lg:w-[500px]   md:rounded-[50px] bg-black2 p-4 rounded-[25px] flex flex-row   mr-[10px] gap-[20px]'>
                                <p className='select-none text-white font-bold sm:text-[25px] text-[10px] self-center '>Email-id:</p>
                                <p className='select-none text-white sm:text-[25px] text-[10px] self-center flex-wrap  '>random.mat 22@itbhu.ac.in</p>
                            </div>
                            
                            <div className='lg:h-[80px] lg:w-[500px]   md:rounded-[50px] bg-black2 p-4 rounded-[25px] flex flex-row   mr-[10px] gap-[20px]' >
                                <p className='select-none text-white font-bold sm:text-[25px] text-[10px] self-center  '>Phone No:</p>
                                <p className='select-none text-white  sm:text-[25px] text-[10px] self-center'>9004189582</p>
                            </div>
                            <div className='  lg:h-[80px] lg:w-[500px]   md:rounded-[50px] bg-black2 p-4 rounded-[25px] flex flex-row   mr-[10px] gap-[20px]' >
                                <p className='select-none text-white font-bold sm:text-[25px] text-[10px] self-center  '>Address: </p>
                                <p className='select-none text-white  sm:text-[25px] text-[10px] self-center'>At home, IITB, Powai, Bombay</p>
                            </div>
                        </div>
                    </div>
                </div>    
        </div>
        <div className='flex items-center justify-center lg:p-6 md:p-6 p-6 bg-red lg:w-[393px] md:w-[200px] w-[100px] mx-auto mb-[100px] rounded-full '><button className='lg:text-4xl sm:text-xl'>Dashboard</button></div>
    </div>
  )
}
