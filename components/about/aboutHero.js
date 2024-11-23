export default function AboutUsHero() {
    return (
      <section className="relative bg-white">
        {/* Hero Content */}
        <div className="relative z-10 py-16 px-6 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            About Modern Equipment and Solutions
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
            At Modern Equipment and Solutions Pvt Ltd, we redefine innovation by delivering tailored digital, 
            marketing, and business solutions. Our goal is to empower businesses with the tools and expertise 
            needed to thrive in a competitive world.
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#our-vision-mission"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-primary rounded-lg hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    );
  }
  