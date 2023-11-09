import React from 'react';

const Textbox = (props: any) => {
  return (
    <div className='flex grow flex-col items-center gap-5 self-stretch lg:w-1/2 lg:items-start'>
      <span className='text-white w-max select-none align-middle font-spline text-xl font-medium'>
        {props.label}
      </span>
      <input
        placeholder={props.placeholder}
        required
        name={props.name}
        type={props.type}
        pattern={props.pattern}
        value={props.value}
        onChange={props.onChange}
        className='h-[50px] grow self-stretch rounded-[10px] bg-background pl-[30px]'
      />
    </div>
  );
};

export default Textbox;
