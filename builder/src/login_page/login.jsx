import { Link } from "react-router-dom";
const loginPage = () => {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center  bg-orange-200 ">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Login an Account</h1>
          <form className="space-y-4">
           
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
           
            <div className="w-full flex justify-around">
 <Link to="/Back"><button
    className="font-bold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Back
  </button></Link> 
 <Link to="/PersonalDetails"> <button
    className="font-bold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Login
  </button></Link>
</div>
          </form>
        </div>
      </div>
    );
  };
  
  export default loginPage;