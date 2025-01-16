import { FaKey, FaUser, FaUserPen } from 'react-icons/fa6';
import { GoKey } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="md:flex md:flex-row-reverse md:p-4 md:gap-2 md:items-center">
      <Form />
      <LoginImage />
    </div>
  );
};

const Form = () => {
  return (
    <div className="flex flex-col md:flex-1">
      <h3 className="font-semibold text-xl mb-3">Sign Up</h3>
      <form className="flex flex-col gap-4">
        <div className="flex items-center gap-2 border border-black py-2 px-3 rounded-md">
          <FaUserPen className="text-sm" />
          <input
            type="text"
            id="fullname"
            placeholder="Enter First Name"
            className="outline-none text-xs w-full"
          />
        </div>
        <div className="flex items-center gap-2 border border-black py-2 px-3 rounded-md">
          <FaUser className="text-sm" />
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            className="outline-none text-xs w-full"
          />
        </div>
        <div className="flex items-center gap-2 border border-black py-2 px-3 rounded-md">
          <MdEmail className="text-sm" />
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className="outline-none text-xs w-full"
          />
        </div>
        <div className="flex items-center gap-2 border border-black py-2 px-3 rounded-md">
          <FaKey className="text-sm" />
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="outline-none text-xs w-full"
          />
        </div>
        <div className="flex items-center gap-2 border border-black py-2 px-3 rounded-md">
          <GoKey className="text-sm" />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            className="outline-none text-xs w-full"
          />
        </div>
        <div className="mt-4 flex gap-2">
          <input type="checkbox" />
          <p className="text-xs">I agree to all terms</p>
        </div>
        <button
          type="submit"
          className="bg-primary text-white font-semibold text-sm rounded-md py-2 px-4 hover:bg-secondary transition-colors"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-[10px]">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500">
          Sign in
        </Link>
      </p>
    </div>
  );
};

const LoginImage = () => {
  return (
    <div className="md:flex-1 md:flex justify-center hidden">
      <img
        src="/assets/images/register-image.png"
        alt="Login Image"
        className="lg:w-[60%] md:w-[80%]"
      />
    </div>
  );
};

export default RegisterPage;
