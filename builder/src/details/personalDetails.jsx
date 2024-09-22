import { Link } from "react-router-dom";
const PersonalDetails = () => {
  return (
    <>
      <div className="text-4xl p-3 bg-orange-400 w-full flex justify-center items-center text-center font-bold">
        RESUME
      </div>
      <form className="flex justify-center items-center flex-wrap">
        <div className="font-bold p-3 text-4xl flex flex-col justify-center items-center text-center m-3 w-full">
          Personal Details
        </div>
        <div className="flex  flex-col space-y-10 p-4 sm:w-1/2">
          <div className="relative">
            <input
              type="text"
              id="firstname"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="firstname"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              First Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="email"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="website"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="website"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              Your Website
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="linkedin"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="linkedin"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              LinkedIn
            </label>
          </div>
        </div>
        <div className="flex flex-col space-y-10 p-4 sm:w-1/2">
          <div className="relative">
            <input
              type="text"
              id="lastname"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="lastname"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              Last Name
            </label>
          </div>

          <div className="relative">
            <input
              type="number"
              id="mobile"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="mobile"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              Mobile No.
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="leetcode"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="leetcode"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              Leetcode
            </label>
          </div>

          <div className="relative">
            <input
              type="text"
              id="github"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="github"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              GitHub URL
            </label>
          </div>
        </div>
      </form>
      <div className="w-full flex justify-around">
        <Link to="/Back"><button
          className="font-bold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back
        </button></Link>
        <Link to="/Next"> <button
          className="font-bold bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </button></Link>
      </div>
      <div className="flex justify-center items-center">
        <img
          src='../public/images/personal.png'
          alt='template'
          className='w-3/4 h-1/6 shadow-md sm:w-1/5'
        />
      </div>

    </>
  );
};

export default PersonalDetails;
