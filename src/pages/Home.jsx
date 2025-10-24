import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div className="w-full overflow-y-hidden">
      <Header />
      <ToastContainer />

      <main className="mt-12 space-y-12" role="main">
        <section aria-labelledby="about-heading">
          <h2 id="about-heading" className="sr-only">
            About
          </h2>
          <About />
        </section>

        <section aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">
            Projects
          </h2>
          <Projects />
        </section>

        <section aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="sr-only">
            Testimonials
          </h2>
          <Testimonials />
        </section>

        <section aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="sr-only">
            Contact
          </h2>
          <Contact />
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
