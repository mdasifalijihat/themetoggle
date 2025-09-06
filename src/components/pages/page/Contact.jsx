import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-base-content leading-relaxed">
            Have any questions or feedback? Reach out to us via the form below
            or using our contact information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg shadow-md">
              <FaEnvelope className="text-2xl text-primary" />
              <p className="text-base-content">example@email.com</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg shadow-md">
              <FaPhoneAlt className="text-2xl text-primary" />
              <p className="text-base-content">+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg shadow-md">
              <FaMapMarkerAlt className="text-2xl text-primary" />
              <p className="text-base-content">Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>

              <div>
                <label className="block mb-1 font-semibold">Message</label>
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
