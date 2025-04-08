import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 py-16 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-[45%] flex justify-center">
        <img
          src="./200gm1.png" // Make sure this path is valid
          alt="Product"
          className="max-w-auto h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-[45%] max-w-xl">
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 bg-[#fbf17d] rounded-full flex items-center justify-center text-4xl font-bold text-black mr-4">
            01
          </div>
          <h2 className="text-2xl font-bold text-black">About us</h2>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed text-[18px]">
          Ut placerat semper eros, tempor porttitor ipsum blandit ut. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum nec consectetur massa
          sapien in faucibus laoreet, erat leo egestas odio, vel pulvinar urna justo at leo. Integer
          finibus fringilla auctor. Donec vitae augue eu tellus varius sodales ac ut lorem.....
        </p>

        <a
          href="#"
          className="inline-block bg-lime-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-lime-600 transition"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
