import { Center } from '@chakra-ui/react';
import React from 'react';

const imgContainer = {
  backgroundColor: 'white',
  width: '70px',
  height: '70px',
  Position: 'relative',
  margin: 'auto',
  borderRadius: '50%',
  marginTop: '10%',
  //   margin: '50%',
  zIndex: 1,
};

const ResponsibilityCard_Symbol = () => {
  return (
    <div>
      <div
        style={{
          height: 'calc(20vh + 100px)',
          //   width: '200px',
          position: 'relative',
          border: '3px solid black',
          borderColor: 'black',
          outline: 'solid 3px #A81F25',
          outlineOffset: '-10px',
          borderRadius: '30px',
          borderWidth: '3px',
          backgroundColor: '#272727',

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
          <div style={imgContainer}></div>
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
            top: '190px',
            textAlign: 'center',
          }}
        >
          Bhupendra Jogi
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityCard_Symbol;
