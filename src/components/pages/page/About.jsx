import React from "react";
import { FaReact, FaLaptopCode, FaUsers } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiRocket } from "react-icons/gi";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 py-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto">
          <FaReact className="text-6xl text-primary mx-auto mb-4 animate-spin-slow" />
          <h1 className="text-4xl font-bold text-primary mb-4">
            About Our Website
          </h1>
          <p className="text-base-content leading-relaxed">
            This project is built with modern technologies like React, Tailwind
            CSS, and DaisyUI. Our goal is to create a clean, responsive, and
            user-friendly design that works seamlessly across all devices.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-primary">
            Our Goals
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="card bg-base-200 shadow-md p-6 text-center">
              <GiRocket className="text-5xl text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-sm text-base-content">
                Deliver minimal and responsive designs to help developers learn
                and grow with practical projects.
              </p>
            </div>

            {/* Vision */}
            <div className="card bg-base-200 shadow-md p-6 text-center">
              <MdOutlineDesignServices className="text-5xl text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-sm text-base-content">
                Build modern, scalable, and enjoyable web solutions that work
                across every platform and device.
              </p>
            </div>

            {/* Values */}
            <div className="card bg-base-200 shadow-md p-6 text-center">
              <FaUsers className="text-5xl text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold mb-2">Values</h3>
              <p className="text-sm text-base-content">
                We believe in clean code, teamwork, and impactful digital
                experiences for users worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <FaLaptopCode className="text-6xl text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-3">Why Choose Us?</h2>
          <p className="text-base-content leading-relaxed">
            Because we combine design, performance, and usability into one
            package. Our focus is on simplicity and user satisfaction while
            ensuring a professional, modern look.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
