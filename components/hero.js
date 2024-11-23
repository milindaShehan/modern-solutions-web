import Link from "next/link";

export default function HeroSection() {
  const phoneNumber = "+94707377311";
  const message =
    "Hello Modern Equipment Solutions, I am interested in your services. Could you please provide more information on your business digitalization, event management, or any other offerings?";

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
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
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
