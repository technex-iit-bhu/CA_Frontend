import { randomUUID } from "crypto";
import React, { FC } from "react";



interface CardProps {
    title: any,
    text: string,
  }
// 
const IncentiveCard: FC<CardProps> = ({title, text}) => {
    return(
    <div style={{
        width: "max(300px,30vw)",
        height: "max(150px,20vh)",
        display: "block",
        border: "10px solid #C70039",
        borderRadius: "30px",
        borderWidth: "3px",
        borderColor: "#C70039",
        backgroundColor: "#323232",
        margin: "10px",
        boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.5)",
        overflow: "hidden"




    }}>
        <div style={{margin: "1vw"}}>
        <h2 style={{padding: "10px", color:"white"}} >{title}</h2>
        <p style={{marginLeft:"5px", fontSize:"10px", color:"white"}}>{text}</p>
        </div>
    </div>);
}


export default IncentiveCard;