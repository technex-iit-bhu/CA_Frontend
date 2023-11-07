import React from 'react';

const Textbox = (props:any) => {
  return (
    <div className='flex lg:w-1/2 flex-col items-center gap-5 lg:items-start self-stretch grow'>
              <span className='text-white w-max select-none align-middle text-xl font-medium font-spline'>
                {props.label}
              </span>
              <input
                placeholder={props.placeholder}
                required
                name={props.name}
                type= {props.type}
                pattern={props.pattern}
                value={props.value}
                onChange={props.onChange}
                className='h-[50px] grow self-stretch rounded-[10px] bg-background pl-[30px]'
              />
    </div>
  );
};

export default Textbox;
