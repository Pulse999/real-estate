import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroBg from '../assets/Contact-hero-bg.jpg'; // Local hero image

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?\d{10,15}$/.test(form.phone.replace(/[-()\s]/g, '')))
      newErrors.phone = 'Invalid phone number';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate form submission (replace with actual backend API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setForm({ name: '', email: '', phone: '', inquiryType: 'general', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Local Background Image */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroBg})` }}
        aria-label="Luxury real estate background"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-teal-700/50"></div>
        <div className="relative text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Connect With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Whether you're buying, selling, or just exploring, our team is here to guide you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg relative"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your Name"
                  className={`mt-1 w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300 ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="Your Email"
                  className={`mt-1 w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="Your Phone Number"
                  className={`mt-1 w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={update}
                  className="mt-1 w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300 border-gray-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="buying">Buying a Property</option>
                  <option value="selling">Selling a Property</option>
                  <option value="rental">Rental Information</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={update}
                  placeholder="Your Message"
                  rows="6"
                  className={`mt-1 w-full border rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                ) : null}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-100 p-8 rounded-xl"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Contact Information</h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a href="tel:+1234567890" className="text-gray-700 hover:text-blue-600">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a href="mailto:info@realestateco.example" className="text-gray-700 hover:text-blue-600">
                  info@realestateco.example
                </a>
              </div>
              <div className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  123 Real Estate Ave, Suite 100<br />
                  Cityville, ST 12345, USA
                </p>
              </div>
              {/* Social Media Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://facebook.com/realestateco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5V5.27c0-.93.77-1.69 1.69-1.69h2.58V0H16.2c-2.86 0-5.23 2.36-5.23 5.23v2.23H8.46v3.46h2.51v8.77h3.46v-8.77h3.08l.46-3.46z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/realestateco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                  aria-label="Follow us on Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/realestateco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.06 1.81.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.36 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.81-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.36-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.81-.25-2.23-.42-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.17-.42-.36-1.06-.42-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.06-1.17.25-1.81.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.36 2.23-.42 1.27-.06 1.65-.07 4.85-.07zm0-2.16c-3.25 0-3.66.01-4.94.07-1.3.06-2.2.27-2.98.57-.81.31-1.49.73-2.17 1.41-.68.68-1.1 1.36-1.41 2.17-.3.78-.51 1.68-.57 2.98-.06 1.28-.07 1.69-.07 4.94s.01 3.66.07 4.94c.06 1.3.27 2.2.57 2.98.31.81.73 1.49 1.41 2.17.68.68 1.36 1.1 2.17 1.41.78.3 1.68.51 2.98.57 1.28.06 1.69.07 4.94.07s3.66-.01 4.94-.07c1.3-.06 2.2-.27 2.98-.57.81-.31 1.49-.73 2.17-1.41.68-.68 1.1-1.36 1.41-2.17.3-.78.51-1.68.57-2.98.06-1.28.07-1.69.07-4.94s-.01-3.66-.07-4.94c-.06-1.3-.27-2.2-.57-2.98-.31-.81-.73-1.49-1.41-2.17-.68-.68-1.36-1.1-2.17-1.41-.78-.3-1.68-.51-2.98-.57-1.28-.06-1.69-.07-4.94-.07z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-8">
              <iframe
                title="RealEstateCo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019238622485!2d-122.4194156846813!3d37.77492977975966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1634748923546!5m2!1sen!2sus"
                className="w-full h-64 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            {/* Live Chat Placeholder */}
            <div className="mt-6 text-center">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300"
                onClick={() => alert('Live chat coming soon!')}
                aria-label="Open live chat"
              >
                Chat With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 space-y-6">
          {[
            {
              question: 'How do I schedule a property viewing?',
              answer:
                'You can schedule a viewing by filling out the contact form above or calling us at +1 (234) 567-890. Our team will arrange a convenient time for you.',
            },
            {
              question: 'What areas do you serve?',
              answer:
                'We serve Cityville and surrounding areas, including residential and commercial properties. Contact us to check availability in your desired location.',
            },
            {
              question: 'Do you offer virtual tours?',
              answer:
                'Yes, we offer virtual tours for select properties. Please specify your interest in a virtual tour when submitting the contact form.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-4"
            >
              <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Slider */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
          What Our Clients Say
        </h2>
        <div className="mt-12 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'RealEstateCo made buying our dream home seamless and stress-free!',
                author: 'Sarah M.',
                role: 'Homeowner',
              },
              {
                quote: 'Their team was professional and responsive. Highly recommend!',
                author: 'James T.',
                role: 'Investor',
              },
              {
                quote: 'The virtual tour option helped us find the perfect rental from afar.',
                author: 'Emily R.',
                role: 'Renter',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-modal-title"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            <h3 id="success-modal-title" className="text-2xl font-semibold text-gray-800">
              Message Sent!
            </h3>
            <p className="mt-4 text-gray-600">
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              aria-label="Close success message"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}