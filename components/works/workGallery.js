"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageGallery() {
  const images = [
    "/modern-solutions-1.jpg",
    "/modern-solutions-2.jpg",
    "/modern-solutions-3.jpg",
    "/modern-solutions-4.jpg",
    "/modern-solutions-5.jpg",
    "/modern-solutions-6.jpg",
    "/modern-solutions-7.jpg",
    "/modern-solutions-8.jpg",
    "/modern-solutions-9.jpg",
    "/modern-solutions-10.jpg",
    "/modern-solutions-11.jpg",
    "/modern-solutions-12.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImage("");
  };

  return (
    <section className="bg-gray-100" id="our-works">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-64 cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <Image
                className="rounded-lg"
                src={src}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index < 4}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Zoomed Image */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="relative w-11/12 max-w-4xl h-auto">
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 p-1 rounded-full w-10 h-10"
              onClick={handleClose}
            >
              ✕
            </button>
            <Image
              src={currentImage}
              alt="Zoomed Image"
              layout="responsive"
              width={800}
              height={600}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
