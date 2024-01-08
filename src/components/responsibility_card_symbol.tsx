import { Center } from '@chakra-ui/react';
import React, { FC } from 'react';

const imgContainer = {
  backgroundColor: 'white',
  width: '90px',
  height: '90px',
  Position: 'relative',
  margin: 'auto',
  borderRadius: '50%',
  marginTop: '7%',
  //   margin: '50%',
  zIndex: 1,
};

interface CardProps {
  text: string;
  logo: any;
  heading: string;
}

const ResponsibilityCard_Symbol: FC<CardProps> = ({ logo, text, heading }) => {
  return (
    <div>
      <div
        style={{
          height: 'calc(25vh + 100px)',
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
            backgroundColor: '#404040',
            width: '100%',
            height: '45%',
            zIndex: 1,
            borderBottomRightRadius: '50%',
            borderBottomLeftRadius: '50%',
            borderTopRightRadius: '30px',
            borderTopLeftRadius: '30px',
            position: 'absolute',
            overflow: 'hidden',
          }}
        >
          <img style={imgContainer} src={logo}></img>
        </div>
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
            top: '40%',
            textAlign: 'center',
          }}
        >

            <p style={{ margin:"1vh", marginBottom:"1vh"}}>{text}</p>


          <h1>
            <b>{heading} </b>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityCard_Symbol;
