import { Link } from "react-router-dom";

const Education = () => {
  return (
    <>
      <div className="text-4xl p-2 bg-orange-400 justify-center w-full flex font-bold">
        {/* <div className="w-full sm:w-1/2 flex">
          <img
            src="../public/images/education.png"
            alt="template"
            className="w-2/12 h-2/12 shadow-md"
          />
        </div> */}
        <div className=" justify-center  text-center">RESUME</div>
      </div>

      <form className="flex justify-center items-center flex-wrap ">
        <div className="font-bold p-2 text-4xl text-center w-full">Education</div>

        {/* <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-10/12"> */}
        <div className="w-full sm:w-1/2 flex flex-col space-y-8 p-5">

          <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
            <div className="relative w-full sm:w-1/2">
              <input
                type="text"
                id="University"
                placeholder=" "
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <label
                htmlFor="University"
                className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
              >
                University
              </label>
            </div>

            <div className="relative w-full sm:w-1/2">
              <input
                type="text"
                id="Location"
                placeholder=" "
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <label
                htmlFor="Location"
                className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
              >
                Location
              </label>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
            <div className="relative sm:w-1/2">
              <label
                htmlFor="start-date"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>

            <div className="relative sm:w-1/2">
              <label
                htmlFor="end-date"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>


          <div className="relative w-full">
            <input
              type="text"
              id="Description"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="Description"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              Description
            </label>
          </div>
          {/* {/* </div> */}
        </div>
      </form>


      <form className="flex justify-center items-center flex-wrap">
        {/* <div className="flex flex-col sm:flex-row justify-center items-center w-full sm:w-10/12"> */}
        <div className="w-full sm:w-1/2 flex flex-col space-y-8 p-5">

          <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
            <div className="relative sm:w-1/2">
              <input
                type="text"
                id="School Name"
                placeholder=" "
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <label
                htmlFor="School Name"
                className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
              >
                School Name
              </label>
            </div>

            <div className="relative sm:w-1/2">
              <input
                type="text"
                id="Location"
                placeholder=" "
                className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <label
                htmlFor="Location"
                className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
              >
                Location
              </label>
            </div>
          </div>

          {/* Start and End Date Fields */}
          <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0">
            <div className="relative sm:w-1/2">
              <label
                htmlFor="start-date"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>

            <div className="relative sm:w-1/2">
              <label
                htmlFor="end-date"
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
            </div>
          </div>

          {/* Description Field */}
          <div className="relative w-full">
            <input
              type="text"
              id="Description"
              placeholder=" "
              className="peer w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <label
              htmlFor="Description"
              className="absolute top-2 left-4 text-gray-500 transition-all duration-300 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-4 peer-focus:-top-2 peer-focus:left-3 peer-focus:text-blue-400 peer-focus:text-xs"
            >
              Description
            </label>
          </div>
        </div>
        {/* </div> */}
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
    </>
  );
};

export default Education;
