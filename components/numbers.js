"use client";
import React, { useState, useEffect, useRef } from "react";

// Counter Component
const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger count-up when visible
        } else {
          setIsVisible(false); // Reset count when out of view
          setCount(0); // Optional: Reset to 0 when not visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const increment = end / (duration / 100);
      const timer = setInterval(() => {
        setCount((prev) => {
          const next = prev + increment;
          if (next >= end) {
            clearInterval(timer);
            return end;
          }
          return next;
        });
      }, 100);

      return () => clearInterval(timer); // Cleanup interval
    }
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>{Math.round(count)}</span> // Attach ref to span
  );
};

// Numbers Component
const Numbers = () => {
  return (
    <section id="numbers">
      <div className="px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
        <dl className="grid gap-12 mx-auto text-gray-900 sm:grid-cols-4 py-6 px-20 rounded-xl bg-white border border-t border-b">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              <Counter end={20} duration={2000} />+
            </dt>
            <dd className="font-light">Businesses Digitalized</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              <Counter end={25} duration={2000} />+
            </dt>
            <dd className="font-light">Successful Events Managed</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              <Counter end={12} duration={2000} />+
            </dt>
            <dd className="font-light">Customer Interactions via Hotline</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              <Counter end={80} duration={2000} />+
            </dt>
            <dd className="font-light">Employee Recruitments</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Numbers;
