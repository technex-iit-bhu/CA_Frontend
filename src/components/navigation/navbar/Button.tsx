const Button = () => {
    return (
    <nav className="hidden md:block ">
        <ul className="flex gap-x-6 text-richblack-25 ">
            <li className=" hover:text-red">
                <div className={`group relative flex cursor-pointer items-center text-white gap-1}`}>About</div>
            </li>
            <li className=" hover:text-red">
                <div className={`group relative flex cursor-pointer items-center text-white gap-1 `}>Incentives</div>
            </li>
            <li className=" hover:text-red">
                <div className={`group relative flex cursor-pointer items-center text-white gap-1}`}>ContactUs</div>
            </li>
            <li className=" hover:text-red">
                <div className={`group relative flex cursor-pointer items-center text-white gap-1 }`}>FAQs</div>
            </li>
        </ul>
    </nav>
    );
  };
  export default Button;