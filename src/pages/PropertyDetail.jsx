import React from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../assets/assets";
import Navbar from "../components/Navbar";
import HeroBg from '../assets/Contact-hero-bg.jpg'; // Local hero image

const PropertyDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((item) => item.id === parseInt(id));

  // Handle case where project is not found
  if (!project) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto py-20 text-center">
          <h2 className="text-2xl font-bold">Property not found</h2>
        </div>
      </div>
    );
  }

  // ✅ STEP 1: Add a hero header background with title
  return (
    <div>
      <Navbar />
      {/* Hero Header Section */}
      <div
        className="w-full bg-cover bg-center pt-28 pb-16 relative" // Added 'relative' for the optional overlay
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        {/* ✅ OPTIONAL: Dark overlay fade for instant contrast */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Title Content - Ensure it sits above the overlay with z-10 */}
        <div className="relative z-10">
          <h1 className="text-white text-4xl font-bold text-center">
            Property Details
          </h1>
        </div>
      </div>

      {/* Main Content Container - starts here */}
      <div className="container mx-auto px-6 md:px-20 lg:px-32 py-10">
        
        {/* ✅ Your existing content now follows the hero header */}
        
        {/* Title & Price */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
          <p className="text-gray-600 text-lg">{project.location}</p>
          <p className="text-blue-600 font-semibold text-xl">{project.price}</p>
        </div>

        {/* 5-Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {project.images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt={`${project.title} ${i + 1}`} 
              className="w-full md:w-1/5 h-48 object-cover rounded-lg" 
            />
          ))}
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Property Details</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
            <ul className="text-gray-700">
              <li><strong>Type:</strong> {project.type}</li>
              <li><strong>Bedrooms:</strong> {project.bedrooms}</li>
              <li><strong>Bathrooms:</strong> {project.baths}</li>
              <li><strong>Area:</strong> {project.area} sq.ft</li>
            </ul>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
          <iframe 
            src={project.locationMap} 
            width="100%" 
            height="400" 
            allowFullScreen="" 
            loading="lazy" 
            title="Property Location" 
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;