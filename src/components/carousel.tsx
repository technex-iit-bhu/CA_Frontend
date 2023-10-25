import React from "react";
import Slider from "react-slick";
import Head from "next/head";
import IncentiveCard from "./incentive_card";
import { v4 as uuidv4 } from 'uuid';
import "src/styles/Incentive.module.css";


const titletext = ["Paisa Hi ",  <span key={uuidv4()} style={{color: "#C70039"}}>Paisa</span>, " Hoga"];
const lor = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque animi nihil deleniti modi hic voluptatibus dolorem. Ea eaque repellendus odio rem illo perferendis eveniet? Molestias doloremque id pariatur reiciendis iste!`

const IncentivesCarousel = () => {

        
        const settings = {
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        //   centerMode: true,
          


          responsive: [
            {
              breakpoint: 624,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
          autoplaySpeed: 5000,
              },
            },
            {
              breakpoint: 264,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
          autoplaySpeed: 5000,
              },
            },
            {
                breakpoint: 100,
                settings: {
                    infinite: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  mobileFirst: true,
                  adaptiveHeight: true,

            autoplaySpeed: 5000,
                },
              },
            
          ],

        };

        return (
            <div style={{justifyContent: "center", margin:"30px"}}>
            <Head>
  <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
</Head>
        <Slider {...settings}>
            
            <div>
            <IncentiveCard title={titletext} text={lor} />
            <div style={{marginLeft: "max(20px, 15vw)"}}>
            <IncentiveCard title={titletext} text={lor} />
            </div>

            </div>


            <div>
            <IncentiveCard title={titletext} text={lor} />
            <div style={{marginLeft: "max(20px, 15vw)"}}>
            <IncentiveCard title={titletext} text={lor} />
            </div>

            </div>

            <div>
            <IncentiveCard title={titletext} text={lor} />
            <div style={{marginLeft: "max(20px, 15vw)"}}>
            <IncentiveCard title={titletext} text={lor} />
            </div>

            </div>

            <div>
            <IncentiveCard title={titletext} text={lor} />
            <div style={{marginLeft: "max(20px, 15vw)"}}>
            <IncentiveCard title={titletext} text={lor} />
            </div>

            </div>

            




            
     

            


            


  


           

        </Slider>
        
        </div>);
}

export default IncentivesCarousel;
