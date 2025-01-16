const AuthenticateLayout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-primary bg-texture bg-cover flex justify-center items-center">
      <div className="bg-white w-[80%] p-4 rounded-md sm:w-[70%] md:">
        {children}
      </div>
    </div>
  );
};

export default AuthenticateLayout;
