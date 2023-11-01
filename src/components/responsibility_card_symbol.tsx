import { Center } from '@chakra-ui/react';
import React from 'react';

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

const ResponsibilityCard_Symbol = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#404040',
          width: '200px',
          height: '170px',
          zIndex: 1,
          borderBottomRightRadius: '50%',
          borderBottomLeftRadius: '50%',
          borderTopRightRadius: '30px',
          borderTopLeftRadius: '30px',
          position: 'absolute',
          overflow: 'hidden',
        }}
      >
        <div style={imgContainer}></div>
      </div>

      <div
        style={{
          height: 'calc(20vh + 100px)',
          width: '200px',
          position: 'relative',
          border: '10px solid #A81F25',
          borderRadius: '30px',
          borderWidth: '3px',
          borderColor: '#c70039',
          backgroundColor: '#272727',

          boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 1)',
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
            // marginLeft: '1%',
            left: '20px',
            top: '190px',
            textAlign: 'center',
          }}
        >
          BHUPENDRA JOGI
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityCard_Symbol;
