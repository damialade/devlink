"use client";
import Image from "next/image";
import { useState } from "react";
import Email from "../components/icons/email";
import Password from "../components/icons/pwd";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({}); // To track validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const { email, password } = data;
    let newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email can't be empty";
    }

    // Password validation (minimum 8 characters)
    if (password.length < 8) {
      newErrors.password = "Check again";
    }

    setErrors(newErrors);

    // Form is valid if there are no errors
    if (Object.keys(newErrors).length === 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    if (isFormValid) {
      console.log("Form Submitted", formData);
    } else {
      validateForm(formData); // Revalidate if form is submitted without proper inputs
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 max-w-md w-full">
        {/* Logo */}
        <div className="flex items-center space-x-3 justify-center my-6">
          <Image
            src="/images/logo.png"
            alt="Devlink Logo"
            width={64}
            height={64}
            priority
          />
          <h2 className="font-bold text-app-dark text-4xl">DevLinks</h2>
        </div>

        <div className="text-left mb-6">
          <h2 className="text-3xl font-bold mb-2">Login</h2>
          <p className="text-default-gray">
            Add your details below to get back into the app
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <label className="block text-gray-700">Email Address</label>
            <div className="flex items-center relative">
              <span className="absolute left-3 text-gray-400">
                <Email />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-default-red focus:ring-default-red"
                    : "border-gray-300 focus:ring-active-purple"
                }`}
              />
              {/* Error Message aligned to the right */}
              {errors.email && (
                <span className="absolute right-3 text-default-red text-xs">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-gray-700">Password</label>
            <div className="flex items-center relative">
              <span className="absolute left-3 text-gray-400">
                <Password />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-default-red focus:ring-default-red"
                    : "border-gray-300 focus:ring-active-purple"
                }`}
              />
              {/* Error Message aligned to the right */}
              {errors.password && (
                <span className="absolute right-3 text-default-red text-xs">
                  {errors.password}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 px-4 text-white font-bold rounded-lg ${
                isFormValid
                  ? "bg-default-purple hover:bg-active-purple"
                  : "bg-disabled-purple cursor-not-allowed"
              }`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
