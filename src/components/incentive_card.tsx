// import { randomUUID } from "crypto";
import { ClassNames } from '@emotion/react';
import React, { FC } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import 'src/styles/Incentive.module.css';

interface CardProps {
  title: any;
  text: string;
}
//
const IncentiveCard: FC<CardProps> = ({ title, text }) => {
  return (
    <div
      style={{
        // width: 'max(10px, 20vw)',
        // height: "max(150px, 10vh)",
        display: 'flex',
        border: '3px solid black',
        borderColor: 'black',
        outline: 'solid 3px #A81F25',
        outlineOffset: '-.7vw',
        borderRadius: '30px',
        borderWidth: '3px',
        backgroundColor: '#272727',
        margin: '10px',

        // boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
      }}
    >
      <div style={{ margin: '10px' }}>
        <h2 style={{ padding: '10px', color: 'white' }}>{title}</h2>
        <p
          style={{
            margin: '10px',
            // marginLeft: '5px',
            fontSize: '10px',
            color: 'white',
            padding: 'auto',
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default IncentiveCard;
