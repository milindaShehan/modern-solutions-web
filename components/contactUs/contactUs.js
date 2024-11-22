import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  const message =
    "Hello Modern Equipment Solutions, I am interested in your services. Could you please provide more information on your business digitalization, event management, or any other offerings?";

  return (
    <>
      <section className="bg-gray-100" id="contact">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
          <div className="max-w mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 ">
              Contact Us
            </h2>
            <p className="text-gray-500 sm:text-xl text-center px-20">
              Have any questions or need assistance with our services? Feel free to contact us, and we will be happy to help you.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-start gap-10 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="">
                <ul className="space-y-6">
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <FaPhone className="text-black text-lg" />
                    </div>
                    <a
                      href="tel:+94707377311"
                      className="text-gray-700 text-sm ml-4"
                    >
                      <small className="block">Phone</small>
                      <strong>+94 707 377 311</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <IoLogoWhatsapp className="text-black text-lg" />
                    </div>
                    <a
                      href={`https://wa.me/94707377311?text=${encodeURIComponent(message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 text-sm ml-4"
                    >
                      <small className="block">Whatsapp</small>
                      <strong>+94 707 377 311</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <IoMail className="text-black text-lg" />
                    </div>
                    <a
                      href="mailto:modernequpmentsolutions@gmail.com"
                      className="text-gray-700 text-sm ml-4"
                    >
                      <small className="block">Mail</small>
                      <strong>modernequpmentsolutions@gmail.com</strong>
                    </a>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <IoLocation className="text-black text-lg" />
                    </div>
                    <a
                      href="https://maps.app.goo.gl/U5uLgzMzxJC7mVTz5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 text-sm ml-4"
                    >
                      <small className="block">Location</small>
                      <strong>75 A, Maheswari Rd, Peterson Lane, Colombo 6</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full ">
              <div className=" rounded-lg border border-primary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.1689759089483!2d79.8647649553382!3d6.879244538799357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bc8424b6403%3A0x5d5d6b01964bed40!2s75%20Maheswari%20Rd%2C%20Colombo!5e1!3m2!1sen!2slk!4v1732297511360!5m2!1sen!2slk"
                  className="w-full h-[250px] rounded-md border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
