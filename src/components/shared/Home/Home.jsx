import React from "react";
import { FaRocket, FaMobileAlt, FaLock, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-primary/20 to-secondary/20">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-base-content max-w-2xl mb-6">
          We create modern, responsive, and user-friendly web applications using
          React, Tailwind CSS, and DaisyUI. Explore our projects and features.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Our Features
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="card bg-base-200 shadow-md p-6 text-center">
            <FaRocket className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
            <p className="text-sm">
              Optimized code ensures speed and efficiency for better user
              experience.
            </p>
          </div>
          <div className="card bg-base-200 shadow-md p-6 text-center">
            <FaMobileAlt className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-sm">
              Looks perfect on all devices – desktop, tablet, and mobile.
            </p>
          </div>
          <div className="card bg-base-200 shadow-md p-6 text-center">
            <FaLock className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-sm">
              Security-first approach with modern authentication methods.
            </p>
          </div>
          <div className="card bg-base-200 shadow-md p-6 text-center">
            <FaUsers className="text-5xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">User Friendly</h3>
            <p className="text-sm">
              Simple and intuitive UI/UX design for smooth navigation.
            </p>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Why Choose Us?
          </h2>
          <p className="text-base-content mb-6">
            We combine modern design, performance, and usability into one
            package. Our mission is to deliver clean, responsive, and scalable
            web solutions for everyone.
          </p>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-gradient-to-r from-primary/20 to-secondary/20">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-base-content mb-6">
          Join us today and experience the best of modern web development.
        </p>
        <button className="btn btn-primary btn-lg">Join Now</button>
      </section>

      {/* (Optional) Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-md p-6">
            <p className="mb-4">
              “This platform is amazing! The design is clean and responsive.”
            </p>
            <h4 className="font-semibold text-primary">— User 1</h4>
          </div>
          <div className="card bg-base-200 shadow-md p-6">
            <p className="mb-4">
              “Best user experience I’ve had in a long time. Highly recommend.”
            </p>
            <h4 className="font-semibold text-primary">— User 2</h4>
          </div>
          <div className="card bg-base-200 shadow-md p-6">
            <p className="mb-4">
              “Super fast and reliable. Works smoothly on all my devices.”
            </p>
            <h4 className="font-semibold text-primary">— User 3</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
