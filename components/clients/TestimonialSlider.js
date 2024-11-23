"use client";
import React, { useState, useRef, useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import TestimonialCard from './TestimonyCard';

const TestimonialSlider = () => {
  const [slider, setSlider] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const newSlider = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });
    setSlider(newSlider);
    const interval = setInterval(() => {
      newSlider.next();
    }, 3000); // Change every 3 seconds

    return () => {
      newSlider.destroy();
      clearInterval(interval); // Clear interval on cleanup
    };
  }, []);

  const testimonials = [
    {
      rating: 5,
      title: 'Owner of CANBERRA HOLIDAYS - Mirissa Hotels',
      content: 'Working with the service team has been a transformative experience for our hotel. Their solutions have elevated guest experiences, and the support we received was unparalleled. Our guests have noticed the difference!',
      customer: 'Chanaka Amarasinghe',
      image: '/ChanakaA.jpg',
    },
    {
      rating: 5,
      title: 'Owner of Royal Education',
      content: 'Their services brought remarkable improvements to our operations. Manoj Senarathne, the owner, deeply appreciated the consistent communication and innovative strategies provided. Our business is thriving thanks to their expertise.',
      customer: 'Manoj Senarathne',
      image: '/Manoj.jpg',
    },
    {
      rating: 5,
      title: 'Owner of Hotel Vacanza, Mirissa',
      content: 'Exceptional service! They helped us optimize our hotel’s management and marketing strategies, ensuring our guests enjoy a seamless stay. Their expertise is truly commendable, and I highly recommend them.',
      customer: 'Chanaka Amarasinghe',
      image: '/ChanakaA.jpg',
    },
    {
      rating: 5,
      title: 'Owner of Ballena Regency Hotel, Mirissa',
      content: 'Their innovative solutions have set a new standard for hospitality in our hotel. The team is reliable and always ready to go the extra mile. Thank you for enhancing our operations and guest satisfaction.',
      customer: 'Chamika A',
      image: '/chamikaA.jpg',
    },
    {
      rating: 5,
      title: 'Director of Future Minds Tuition Institute - Nugegoda',
      content: 'Their business digitalization service has streamlined our operations, from student registrations to scheduling. Parents and students have appreciated the seamless system, and it has allowed us to focus on delivering quality education.',
      customer: 'Pradeep Kumara',
      image: '/PradeepK.jpg',
    },
    {
      rating: 5,
      title: 'CEO of Horizon Technologies - Australia',
      content: 'Partnering with their team has been a game-changer for our IT operations. Their tailored solutions for digital marketing and software development have boosted our brand visibility and operational efficiency. Highly recommend their expertise!',
      customer: 'James Peterson',
      image: '/JamesP.jpg',
    },
    {
      rating: 5,
      title: 'Managing Director of CloudSync Solutions',
      content: 'The hotline services and employee recruitment solutions provided by them have significantly improved our customer support. Their professionalism and attention to detail are unmatched. A big thank you to the entire team!',
      customer: 'Kamal Attanayaka',
      image: '/Attanayaka.jpg',
    },
    {
      rating: 5,
      title: 'Owner of Global Reach Events',
      content: 'Their event management services have redefined how we plan and execute corporate events. Their attention to detail and creative ideas have made every event a resounding success. Looking forward to more collaborations!',
      customer: 'A K P Kumararatnam',
      image: '/Kumararatnam.jpg',
    },
    {
      rating: 5,
      title: 'Managing Partner at Luxe Escapes',
      content: 'Thanks to their promotional marketing services, we have seen an exponential increase in bookings. The team understood our luxury market niche and delivered exceptional results. Truly a reliable partner!',
      customer: 'Ayesha Smaranayake',
      image: '/AyeshaK.jpg',
    },
  ];
  
  
  

  return (
    <section className="bg-white" id='clients'>
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6  lg:py-16 xl:py-24 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              what Clients Say
            </h2>
            <p className="mt-4 text-gray-700">
              Our clients love us! Read what they have to say about our service.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                onClick={() => slider.prev()}
                className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                onClick={() => slider.next()}
                className="rounded-full border border-primary p-3 text-primary transition hover:bg-primary hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  rating={testimonial.rating}
                  title={testimonial.title}
                  content={testimonial.content}
                  customer={testimonial.customer}
                  image={testimonial.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default TestimonialSlider;
