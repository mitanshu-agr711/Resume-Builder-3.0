import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// import RegisterPage from "./register.jsx";

const FirstPage = () => {
  const settings = {
    dots: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const slides = [
    { img: "https://i2.wp.com/www.resumeshoppe.com/wp-content/uploads/2014/11/Megan-Robertson_Resume_A4-1.jpg" },
    { img: "https://resumekraft.com/wp-content/uploads/2023/12/Credit-Control-Officer-CV-Example.jpg" },
    { img: "https://d.novoresume.com/images/doc/basic-resume-template.png" },
    { img: "https://imgs.search.brave.com/G3J3_J1MmTHrRFitOGKbpzcKLXlcgyV-VNqgQaBwwQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kLm5v/dm9yZXN1bWUuY29t/L2ltYWdlcy9kb2Mv/aXQtcmVzdW1lLXRl/bXBsYXRlLnBuZw" },
    { img: "https://d.novoresume.com/images/doc/traditional-resume-template.png" }
  ];

  return (
    <>
      <div className="text-4xl p-2 bg-orange-400 justify-center w-full flex font-bold">
        <div className=" justify-center text-center">RESUME</div>
        <div className="absolute top-2 right-4 space-x-4">
          <Link to="/LoginPage"><button
            className="font-bold text-2xl bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Login
          </button></Link>
          <Link to="/RegisterPage"> <button
            className="font-bold text-2xl bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Sign Up
          </button></Link>
        </div>
      </div>
      <div className='h-auto w-screen flex flex-col lg:flex-row justify-center gap-8 items-center bg-orange-100 text-gray-800 overflow-hidden'>
        <div className="w-full md:w-5/6 lg:w-1/2 flex justify-center lg:ml-4">
          <Slider {...settings} className='w-full max-w-full'>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.img}
                alt={`img-${index}`}
                className='w-full h-auto'
              />
            ))}
          </Slider>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h2 className='text-4xl font-bold text-gray-800 mb-2'>Pick Template</h2>
          <img
            src='../public/images/temp1.png'
            alt='Pick Template'
            className='w-3/4 sm:w-3/5 h-auto rounded-lg shadow-md mb-6 2xl:w-1/2'
          />
          <h2 className='text-4xl font-bold text-gray-800 mb-2'>Customize Template</h2>
          <img
            src='../public/images/temp3.png'
            alt='Customize Template'
            className='w-3/4 sm:w-3/5 h-auto rounded-lg shadow-md mb-6 2xl:w-1/2'
          />
          <h2 className='text-4xl font-bold text-gray-800 mb-2'>Hits and Download</h2>
          <img
            src='../public/images/temp2.png'
            alt='Hits and Download'
            className='w-3/4 sm:w-3/5 h-auto rounded-lg shadow-md 2xl:w-1/2'
          />
        </div>
      </div>
    </>
  );
};

export default FirstPage;