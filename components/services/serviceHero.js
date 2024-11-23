export default function ServicesHero() {
    return (
        <section className="relative bg-white">
            {/* Hero Content */}
            <div className="relative z-10 py-16 px-6 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    Our Expertise, Your Success
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
                    Explore a wide range of innovative solutions designed to meet the unique needs of your business.
                    Whether it's digital transformation, marketing strategies, or custom software solutions, we
                    deliver results that help you grow, compete, and thrive in a digital-first world.
                </p>
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="#services"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-primary rounded-lg hover:bg-secondary"
                    >
                        Discover Our Services
                    </a>
                </div>
            </div>
        </section>
    );
  }
  