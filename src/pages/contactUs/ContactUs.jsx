import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineGlobal,
} from "react-icons/ai"; 
import axios from "axios";

const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await axios.post('https://api.example.com/contact', data);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will get back to you soon!'
      });
      reset(); 
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50">
     
      <div className="font-[sans-serif]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center gap-4 h-full">
          <div className="order-1 md:order-1 lg:col-span-2 md:h-screen w-full md:rounded-tr-xl md:rounded-br-xl">
            <img
              src="/contactus.png"
              className="w-full h-full object-cover"
              alt="ContactUs-image"
            />
          </div>

          <div className="order-1 md:order-2 w-full p-6 relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-10 w-auto"
                  />
                </div>
                <h3 className="text-gray-800 text-3xl font-extrabold">
                  Contact Us
                </h3>
              </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter your name"
                  />
                  <AiOutlineUser className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">
                    Name is required
                  </span>
                )}
              </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter your email"
                  />
                  <AiOutlineMail className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">
                    Email is required
                  </span>
                )}
              </div>

              <div className="mt-4">
                <div className="relative flex items-center">
                  <input
                    {...register("country", { required: true })}
                    type="text"
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600"
                    placeholder="Enter your country"
                  />
                  <AiOutlineGlobal className="w-[18px] h-[18px] absolute right-4 text-gray-500" />
                </div>
                {errors.country && (
                  <span className="text-red-500 text-xs mt-1 block">
                    Country is required
                  </span>
                )}
              </div>

              <div className="mt-4">
                <div className="relative">
                  <textarea
                    {...register("message", { required: true })}
                    className="w-full text-sm text-gray-800 bg-gray-100 focus:bg-transparent px-4 py-3.5 rounded-md outline-blue-600 min-h-[120px]"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">
                    Message is required
                  </span>
                )}
              </div>

              {/* Add status messages */}
              {submitStatus.message && (
                <div className={`mt-4 p-3 rounded-md ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
