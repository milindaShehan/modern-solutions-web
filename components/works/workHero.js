export default function ShowcaseHero() {
    return (
      <section className="relative bg-white">
        {/* Hero Content */}
        <div className="relative z-10 py-16 px-6 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Showcasing Our Journey of Excellence
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
            Explore how we’ve transformed businesses with cutting-edge solutions. 
            From innovative web applications to seamless digital integrations, our works 
            speak for themselves.
          </p>
          <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-primary rounded-lg hover:bg-secondary  foc"
            >
              View Our Works
            </a>
            <a
              href="#contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 f"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    );
  }
  