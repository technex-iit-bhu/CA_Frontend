import React from 'react';

const ResponsibilityCard = () => {
  return (
    <div>
      <div>
        <div
          style={{
            height: 'calc(20vh + 100px)',
            width: '200px',
            // display: 'flex',
            border: '10px solid #A81F25',
            borderRadius: '30px',
            borderWidth: '3px',
            borderColor: '#c70039',
            backgroundColor: '#272727',
            // margin: '10px',
            boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 1)',
            overflow: 'hidden',
            zIndex: 0,
          }}
        >
          <div
            style={{
              height: 'auto',
              width: 'auto',
              color: 'white',
              fontSize: 'auto',
              display: 'block',
              position: 'absolute',
              marginLeft: '45px',
              marginTop: '30px',
              marginBottom: '100px',
              textAlign: 'center',
            }}
          >
            SOCIAL MEDIA
          </div>
          <div
            style={{
              height: 'auto',
              width: 'auto',
              color: 'white',
              fontSize: 'auto',
              position: 'relative',
              display: 'flex',
              //   margin: '10px',
              marginTop: '80px',
              overflow: 'wrap',
              textAlign: 'center',
              wordWrap: 'break-word',
            }}
          >
            Harnessing the power of social media to create awareness and
            generate buzz around the college fest.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilityCard;
