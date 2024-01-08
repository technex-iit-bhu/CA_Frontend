import { Center } from '@chakra-ui/react';
import React, { FC } from 'react';

// import Classes from 'src/styles/Incentive.module.css';

const imgContainer = {
  backgroundColor: 'white',
  width: '90px',
  height: '90px',
  Position: 'relative',
  margin: 'auto',
  borderRadius: '50%',
  marginTop: '8%',
  //   margin: '50%',
  zIndex: 1,
};

interface CardProps {
  text: string;
  heading: string;
  logo: string;
}

const ResponsibilityCard_Symbol_Bottom: FC<CardProps> = ({
  logo,
  text,
  heading,
}) => {
  return (
    <div>
      <div
        style={{
          height: 'calc(25vh + 100px)',
          //   height: '200px',
          //   width: '200px',
          position: 'relative',
          border: '3px solid black',
          borderColor: 'black',
          outline: 'solid 3px #A81F25',
          outlineOffset: '-10px',
          borderRadius: '30px',
          borderWidth: '3px',
          backgroundColor: '#272727',
          marginLeft: '10px',

          overflow: 'hidden',
          zIndex: -1,
        }}
      >
        <div
          style={{
            height: '50px',
            // width: '150px',
            color: 'white',
            fontSize: 'auto',
            position: 'relative',
            // marginLeft: '1%',
            // left: '16%',

            alignContent: 'center',
            top: '30px',
            textAlign: 'center',
          }}
        >

            <h1><b>{heading}</b></h1>
            <p style={{ margin:"1vh", marginTop:"1vh"}}>{text}</p>
            

        </div>
        <div
          style={{
            backgroundColor: '#404040',
            width: '100%',
            height: '45%',
            zIndex: 4,
            borderTopRightRadius: '50%',
            borderTopLeftRadius: '50%',
            borderBottomRightRadius: '30px',
            borderBottomLeftRadius: '30px',
            position: 'absolute',
            overflow: 'hidden',
            bottom: '0px',
            alignContent: 'center',
          }}
        >
          <img style={imgContainer} src={logo}></img>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityCard_Symbol_Bottom;
