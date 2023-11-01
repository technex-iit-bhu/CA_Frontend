import { Center } from '@chakra-ui/react';
import React from 'react';
// import Classes from 'src/styles/Incentive.module.css';

const imgContainer = {
  backgroundColor: 'white',
  width: '100px',
  height: '100px',
  Position: 'relative',
  marginLeft: '50px',
  borderRadius: '50%',
  marginTop: '15%',
  zIndex: 1,
};

const ResponsibilityCard_Symbol_Bottom = () => {
  return (
    <div>
      <div
        style={{
          height: 'calc(20vh + 100px)',
          //   height: '200px',
          width: '200px',
          position: 'relative',
          border: '10px solid #A81F25',
          borderRadius: '30px',
          borderWidth: '3px',
          borderColor: '#c70039',
          backgroundColor: '#272727',

          overflow: 'hidden',
          zIndex: -1,
        }}
      >
        <div
          style={{
            height: '50px',
            width: '150px',
            color: 'white',
            fontSize: 'auto',
            position: 'relative',
            marginLeft: '1%',
            left: '20px',
            top: '30px',
            textAlign: 'center',
          }}
        >
          BHUPENDRA JOGI
        </div>
      </div>

      <div
        style={{
          backgroundColor: '#404040',
          width: '200px',
          height: '170px',
          zIndex: 4,
          borderTopRightRadius: '50%',
          borderTopLeftRadius: '50%',
          borderBottomRightRadius: '30px',
          borderBottomLeftRadius: '30px',
          position: 'absolute',
          overflow: 'hidden',
          bottom: '0px',
        }}
      >
        <div style={imgContainer}></div>
      </div>
    </div>
  );
};

export default ResponsibilityCard_Symbol_Bottom;
