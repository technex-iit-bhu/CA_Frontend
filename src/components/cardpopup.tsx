import React from 'react';
import { Card, CardHeader, CardBody } from '@chakra-ui/react';
import Image from 'next/image';

const CardPopup = (props: any) => {
  return props.trigger ? (
    <div className='card m-1 w-[100%] h-[100%] flex flex-col items-center justify-center rounded-3xl border-2 border-red bg-[#272727] md:h-[250px] md:w-[500px] xl:w-[600px]'>
      <Card className='p-4'>
        <CardHeader className='flex items-center justify-center p-2 pb-3'>
          <Image
            alt='companylogo'
            src={'/logoipsum-284.svg' || props.logo}
            width={100}
            height={100}
          />
        </CardHeader>
        <CardBody className='mt-[2rem] pb-2 text-center text-base'>
          {props.text}
        </CardBody>
      </Card>
      {props.children}
    </div>
  ) : (
    ''
  );
};

export default CardPopup;
