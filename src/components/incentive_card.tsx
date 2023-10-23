import React, { FC } from "react";
import "src/styles/Incentive.module.css"

interface CardProps {
    title: any,
    text: string,
  }
// 
const IncentiveCard: FC<CardProps> = ({title, text}) => {
    return(
    <div className="container">
        <div style={{margin: "10px"}}>
        <h2 style={{padding: "10px", color:"white"}}>{title}</h2>
        <p style={{marginLeft:"5px", fontSize:"10px", color:"white"}}>{text}</p>
        </div>
    </div>);
}


export default IncentiveCard;