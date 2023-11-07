import React from 'react'
import { FC, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Image from 'next/image';



const CardPopup = (props) => {
  return (
    (props.trigger) ? (
    <div className='z-20 card flex m-1 flex-col w-auto h-auto md:w-[500px] xl:w-[700px] md:h-[250px] justify-center items-center border-red border-2 bg-[#272727] rounded-3xl'>
      <Card className='p-2'>
        <CardHeader className='flex justify-center items-center p-2 pb-3'>
          <Image alt='companylogo' src={'/logoipsum-284.svg' || props.logo} width={100} height={100} />
        </CardHeader>
        <CardBody className='text-center text-base pb-2'>
          {props.text}
        </CardBody>
      </Card>
      { props.children }
    </div>)
    : ""
  )
}

export default CardPopup