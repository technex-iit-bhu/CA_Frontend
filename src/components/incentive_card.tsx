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
        width: 'max(10px, 30vw)',
        // height: "max(150px, 10vh)",
        display: 'flex',
        border: '10px solid #A81F25',
        borderRadius: '30px',
        borderWidth: '3px',
        borderColor: '#C70039',
        backgroundColor: '#272727',
        margin: '10px',
        boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
      }}
    >
      <div style={{ margin: '10px' }}>
        <h2 style={{ padding: '10px', color: 'white' }}>{title}</h2>
        <p style={{ marginLeft: '5px', fontSize: '10px', color: 'white' }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default IncentiveCard;
