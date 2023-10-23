import React from 'react';


const Dashboard = () => {
    return (
        <div className=''>
            <div className='flex flex-col bg-background pt-[200px] relative pl-[120px] md:mb-[50px] mb-[100px]'>
                <div className='flex text-5xl absolute align-left left-5 lg:text-7xl lg:p-10 md:p-10 bottom-[10px] sm:text-center'>
                    <span className='text-white select-none'>Dashboard</span>
                </div>
            </div>
            <div className='px-[30px] md:px-[50px]'>
                <div className='bg-custom-gradient px-[50px] md:px-[30px] py-[30px] rounded-[50px] z-0'>
                    <div className='flex lg:flex-row flex-col'>
                        <div className='flex flex-col mt-[-80px]'>
                            <div className='select-none bg-background w-[150px] h-[150px] rounded-full border-4 border-red lg:self-start self-center'></div>
                            <div className='flex flex-col lg:pl-[20px] lg:pr-[60px] pb-[30px]'>
                                <p className='select-none lg:self-start text-white font-bold text-[30px] self-center lg:text-left text-center'>Shivansh Bhatnagar</p>
                                <p className='select-none lg:self-start text-white text-[20px] self-center'>Rank:3</p>
                                <p className='select-none lg:self-start text-white text-[20px] self-center'>CA Id:000000000</p>
                            </div>
                        </div>
                        <div className='lg:h-[250px] lg:w-[2px] h-[2px] w-auto bg-red'></div>
                        <div className='flex sm:flex-row flex-col px-[10px] lg: lg:pb-[100px] md:pb-[30px] justify-center self-center grow lg:pt-0 md:pt-[30px] py-[30px]'>
                            <div className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] bg-background md:rounded-[50px] rounded-[25px] flex flex-col mr-[10px]'>
                                <p className='select-none text-white font-bold md:text-[20px] text-[10px] self-center md:mt-[30px] mt-[15px]'>Tasks Done</p>
                                <p className='select-none text-white font-bold md:text-[80px] text-[40px] self-center'>69</p>
                            </div>
                            <div className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] bg-background md:rounded-[50px] rounded-[25px] flex flex-col mr-[10px] sm:mt-0 mt-[10px]'>
                                <p className='select-none text-white font-bold md:text-[20px] text-[10px] self-center md:mt-[30px] mt-[15px]'>Total Tasks</p>
                                <p className='select-none text-white font-bold md:text-[80px] text-[40px] self-center'>200</p>
                            </div>
                            <div className='md:h-[200px] md:w-[200px] h-[100px] w-[100px] bg-background md:rounded-[50px] rounded-[25px] flex flex-col mr-[10px] sm:mt-0 mt-[10px]' >
                                <p className='select-none text-white font-bold md:text-[20px] text-[10px] self-center md:mt-[30px] mt-[15px]'>Points</p>
                                <p className='select-none text-white font-bold md:text-[80px] text-[40px] self-center'>232</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-auto bg-background z-10 mb-[20px] rounded-[50px] p-[20px] px-[30px] flex flex-col'>
                        <p className='select-none text-white font-bold text-[20px] md:self-start self-center'>Next Milestone</p>
                        <p className='select-none text-white text-[15px] md:w-4/6 w-fit md:self-start self-center'>Go and find a girl you virgin.  Go and earn some money, so that atleast someone is attracted to your money if not YOU ! NO !bros before hoes</p>
                        <button className='select-none text-white font-bold text-[20px] bg-red md:w-[200px] w-[150px] h-[40px] rounded-[50px] md:self-end self-center mt-[10px] mb-[10px]'>Courses</button>
                    </div>
                    <div className='h-auto bg-background z-10 mb-[20px] rounded-[50px] p-[20px] px-[30px] flex flex-col'>
                        <p className='select-none text-white font-bold text-[20px] md:self-start self-center'>Rewards at the end of the CA Program</p>
                        <p className='select-none text-white text-[15px] md:w-4/6 w-fit md:self-start self-center'>istg youre still here ???? bitch go study, GSoC nikalo jaake, yeh CA, VA tab banna jab DU ke ho. </p>
                        <button className='select-none text-white font-bold text-[20px] bg-red md:w-[200px] w-[150px] h-[40px] rounded-[50px] md:self-end self-center mt-[10px] mb-[10px]'>Awards</button>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Dashboard;