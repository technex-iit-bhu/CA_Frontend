import Link from "next/link";
const Login = () => {
    return (
      <div className="hidden  gap-x-4 md:flex ">
        <Link href="/login" >
        <button className="rounded-[30px] w-[162px] h-[49px]  border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] hover-text-red hover-border-red">
          Login
        </button>
      </Link>
      </div>
    );
  };
  export default Login;