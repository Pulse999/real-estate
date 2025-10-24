import React from "react";
import { motion } from "framer-motion"; // Optional: for subtle animations
import Avatar from "../assets/avatar.jpg"; // Placeholder avatar image

export default function AboutUs() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay for text readability */}
        <div className="relative text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            About RealEstateCo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Your trusted partner in finding the perfect home or investment
            property.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Our Story
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            RealEstateCo is dedicated to transforming the real estate
            experience. With a focus on transparency, innovation, and client
            satisfaction, we combine industry expertise with cutting-edge
            technology to help you find your dream home or investment property.
          </p>
        </motion.div>

        {/* Mission, Team, Values Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To provide transparent, efficient, and high-quality real estate
              services that empower our clients to make informed decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">Our Team</h3>
            <p className="mt-4 text-gray-600">
              Our experienced agents, analysts, and support staff are committed
              to delivering exceptional service tailored to your needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Integrity, transparency, and results drive everything we do,
              ensuring trust and satisfaction in every transaction.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
            Meet Our Team
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Jane Doe",
                role: "Lead Agent",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "John Smith",
                role: "Property Analyst",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Emily Johnson",
                role: "Client Relations",
                image:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
              },
              {
                name: "Themba Kene",
                role: "Senior Consultant",
                image: Avatar,
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Contact us today to start your journey with RealEstateCo.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
