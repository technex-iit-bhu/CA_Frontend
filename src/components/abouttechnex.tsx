import React, { FC,useEffect,useState } from 'react';
import { HeadingTexts } from './ourReach';
import { ArrowRightIcon } from '../../node_modules/@chakra-ui/icons/dist/ArrowRight';



const Carousel = () => {
  const images = [
    'https://media.architecturaldigest.com/photos/641b2b8252ae61ead67e92d9/16:9/w_2240,c_limit/GettyImages-1474485122.jpg',
    'https://dancingastronaut.com/wp-content/uploads/2022/06/imgonline-com-ua-twotoone-3h3siEMcoQW7.jpg',
    'https://consequence.net/wp-content/uploads/2023/03/Taylor-Swift-1.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change images every 7 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          style={{
            width: '560px', 
            height: '340px', 
            borderRadius: '29px',
            marginRight: '20px', 
            marginBottom: '20px', 
            border: '4px solid #900D09', 
            boxShadow: '2px 2px 4px black',
            transition:'transform ease' ,
          }}
        />
      </div>
    </div>
  );
};
const AboutTechnex: FC = () => {
  return (
    <div className='bg-[#191919]' id='aboutUs'>
      <div className='md:ml-22 ml-1'>
        <div className='flex flex-col -space-y-9 sm:-space-y-16 sm:pb-10 md:-space-y-16 lg:-space-y-20 xl:-space-y-24'>
          <span className='font-spline text-6xl font-bold text-[#A81F25] opacity-20 sm:text-[10rem] lg:text-[14rem] xl:text-[19rem]'>
            Technex
          </span>
          <span className='text-white z-10 ml-4 transform select-none text-2xl transition duration-700 hover:scale-110 sm:ml-8 sm:pl-1 sm:text-[60px] lg:pl-5 lg:text-[82px] xl:pl-9'>
            About <span className='text-red'>Technex</span>
          </span>
        </div>


        <div className='z-0 ml-3 pb-10 sm:ml-8 lg:ml-12 xl:ml-14 font-spline'>

  <div className="flex">
    <div className="left-column">
      <p className="mr-3 border-b-2 border-[#A81F25] p-3 pr-5 pt-10 tracking-wide lg:w-[850px]">
        TECHNEX&apos;23, IIT BHU is one of the largest and oldest college
        fests in India.&nbsp; Embodying the true spirit of youth,{' '}
        <span className="text-[#A81F25]">
          Technex provides a platform for young talent from all over India
          to showcase their varied skills.
        </span>
        &nbsp; Technex is an annual technical festival organized by the
        students of Indian Institute of Technology (IIT) BHU,&nbsp;
        Varanasi.<br></br>
        The festival provides a platform for students to showcase their
        technical and creative abilities through{' '}
        <span className="text-[#A81F25]">
          various competitions, workshops, guest lectures, and exhibitions
        </span>
        . It attracts a large number of students from all over the country
        and provides a unique opportunity for them to showcase their skills
        and network with their peers and industry professionals.{' '}
        <span className="text-[#A81F25]">
          Technex is a celebration of innovation and technology, and a
          platform for students to learn, grow, and excel in their field of
          interest.
        </span>
      </p>
    </div>
  </div>
<br/>
<br/>
<br/>
  <div className="flex justify-center">
    <div className="centered-carousel">
      <Carousel />
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default AboutTechnex;
