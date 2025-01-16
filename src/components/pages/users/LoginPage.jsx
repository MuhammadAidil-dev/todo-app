import { FaKey, FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="md:flex md:p-4 md:gap-2 md:items-center">
      <Form />
      <LoginImage />
    </div>
  );
};

const Form = () => {
  return (
    <div className="flex flex-col md:flex-1">
      <h3 className="font-semibold text-xl mb-3">Sign In</h3>
      <form className="flex flex-col gap-4">
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
          <FaKey className="text-sm" />
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            className="outline-none text-xs w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white font-semibold text-sm rounded-md py-2 px-4 hover:bg-secondary transition-colors"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-[10px]">
        Dont have account?{' '}
        <Link to="/register" className="text-blue-500">
          create one
        </Link>
      </p>
    </div>
  );
};

const LoginImage = () => {
  return (
    <div className="md:flex-1 md:flex justify-center hidden">
      <img
        src="/assets/images/login-image.png"
        alt="Login Image"
        className="lg:w-[80%]"
      />
    </div>
  );
};

export default LoginPage;
