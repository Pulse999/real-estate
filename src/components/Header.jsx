import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex w-full overflow-hidden relative"
      style={{ backgroundImage: `url(${hero})` }}
      id="Header"
    >
      
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{duration:1.5}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: false}}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 flex flex-col justify-center items-center text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">Explore homes that fit your dreams</h2>
        <div className="space-x-6 mt-16 text-lg md:text-xl">
            <a href="#" className="border border-white px-8 py-3 rounded">Projects</a>
            <a href="#" className="border border-white px-8 py-3 rounded">Contact Us</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
