import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const GetInTouch = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });
    
    try {
      
      const response = await axios.post('https://api.example.com/contact', data);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your submission! We will contact you soon.'
      });
      reset(); 
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.response?.data?.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen pt-10 pb-10 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name *"
              {...register("firstName", { required: "First name is required" })}
              className={`w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name *"
              {...register("lastName", { required: "Last name is required" })}
              className={`w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Business Email Address *"
              {...register("email", { required: "Email is required" })}
              className={`w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Job Title */}
          <div>
            <input
              type="text"
              placeholder="Job Title *"
              {...register("jobTitle", { required: "Job title is required" })}
              className={`w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.jobTitle ? "border-red-500" : ""
              }`}
            />
            {errors.jobTitle && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jobTitle.message}
              </p>
            )}
          </div>

          {/* Organization */}
          <div>
            <input
              type="text"
              placeholder="Organization *"
              {...register("organization", {
                required: "Organization is required",
              })}
              className={`w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.organization ? "border-red-500" : ""
              }`}
            />
            {errors.organization && (
              <p className="text-red-500 text-sm mt-1">
                {errors.organization.message}
              </p>
            )}
          </div>

          {/* Solution Interest */}
          <div>
            <select
              {...register("solutionInterest", {
                required: "Solution interest is required",
              })}
              className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Solution Interest *</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {errors.solutionInterest && (
              <p className="text-red-500 text-sm mt-1">
                {errors.solutionInterest.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <select
              {...register("country", { required: "Country is required" })}
              className="w-full p-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Country *</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="in">India</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>

        {submitStatus.message && (
          <div className={`mt-4 p-3 rounded ${
            submitStatus.type === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
          }`}>
            {submitStatus.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetInTouch;
