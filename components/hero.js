import Link from "next/link";

export default function HeroSection() {
  const phoneNumber = "+94711662297";
  const message =
    "Hello! I'm interested in booking a vehicle from Ceylon Rent.";

  return (
    <>
      <section className="py-4 mt-14 sm:mt16 lg:mt-0 mb-10" id="home">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
          <div className="flex flex-col space-y-8 sm:space-y-10  text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
            <div>
              <div
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
            role="alert"
          >
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">
              Modern solutions for your business growth
            </span>
          </div>
            </div>
            <h1 className="font-semibold leading-tight text-teal-950 text-4xl sm:text-5xl lg:text-6xl">
              Empowering Your Business{" "}
              <span className="text-transparent bg-clip-text bg-primary">
                {" "}
                for the Future
              </span>
            </h1>
            <p className="flex text-gray-700 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none text-md lg:text-xl">
              We help businesses thrive by unlocking the full potential of
              technology, innovation, and efficient management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
              {/* "Book Now" Button */}
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                  message
                )}`}
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // For security reasons
                className="px-6 items-center h-12 rounded-3xl bg-primary text-white duration-300 ease-linear flex justify-center w-full sm:w-auto hover:bg-primary/80 hover:scale-105 transform transition-all"
              >
                Contact Now
              </a>
              {/* "Explore Services" Button */}
              <Link
                href="#services"
                className="px-6 items-center h-12 rounded-3xl text-primary border border-gray-100 bg-gray-100 duration-300 ease-linear flex justify-center w-full sm:w-auto hover:bg-gray-200 hover:scale-105 transform transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
            <div className="w-full flex justify-center  lg:justify-center items-center">
              <div className="sm:w-[500px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative max-w-full max-h-[500px]">
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="/classroom.jpg"
                  alt="About Us image"
                />
              </div>
            </div>

            {/* <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 z-30 group cursor-pointer">
              <img
                src="/classroom.jpg"
                alt="sigiriya"
                width={1300}
                height={1300}
                className="w-full h-full object-cover z-30 group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 z-10 group cursor-pointer">
              <img
                src="/office-1.jpg"
                alt="working-on-housing-project"
                width={1300}
                height={1300}
                className="z-10 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

// import Numbers from "@/components/numbers";

// export default function Hero() {
//   return (
//     <>
//       <section className="relative bg-white bg-[url('/futuristic-business-environment.jpg')] bg-cover bg-center h-screen">
//         {/* Overlay with gradient and blur */}
//         <div className="absolute inset-0  opacity-50 backdrop-blur-3xl z-0"></div>

//         <div className="relative z-10 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
//           <a
//             href="#"
//             className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
//             role="alert"
//           >
//             <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">
//               New
//             </span>{" "}
//             <span className="text-sm font-medium">
//               Modern solutions for your business growth
//             </span>
//           </a>
//           <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
//             Empowering Your Business for the Future
//           </h1>
//           <p className="mb-8 text-white text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
//
//           </p>
//           <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
//             <a
//               href="#"
//               className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:ring-primary-300"
//             >
//               Get Started Today
//             </a>
//             {/* <a
//               href="#"
//               className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
//             >
//               Watch our Story
//             </a> */}
//           </div>
//           <div className="px-4 mx-auto text-center lg:px-36">
//             <Numbers />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
