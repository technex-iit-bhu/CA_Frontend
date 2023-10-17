import Link from 'next/link';

const Button = () => {
    return (
    <nav className="hidden md:block ">
        <ul className="flex gap-x-6 items-center justify-between ">
            <li className=" hover:text-red">
                <Link href="/About" className={`group  flex cursor-pointer  text-white gap-1}`}>About</Link>
            </li>
            <li className=" hover:text-red">
                <Link href="/Incentives" className={`group relative flex cursor-pointer items-cesnter text-white gap-1 `}>Incentives</Link>
            </li>
            <li className=" hover:text-red">
                <Link href="/ContactUs" className={`group relative flex cursor-pointer items-center text-white gap-1}`}>ContactUs</Link>
            </li>
            <li className=" hover:text-red">
                <Link href="/FAQs" className={`group relative flex cursor-pointer items-center text-white gap-1 }`}>FAQs</Link>
            </li>
        </ul>
    </nav>
    );
  };
  export default Button;