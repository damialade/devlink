"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Email from "../components/icons/email";
import Password from "../components/icons/pwd";
import Link from "next/link";
import { auth } from "../firebase/config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const [createUserWithEmailAndPassword, user, _, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //react toast alert function
  const notify = ({ type, msg }) => {
    if (type === "Success") {
      toast.success(msg, {
        autoClose: 3000,
        theme: "dark",
      });
    }
    if (type === "Error") {
      toast.error(msg, {
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateForm({ ...formData, [name]: value });
  };

  const validateForm = (data) => {
    const { email, password, confirmPassword } = data;
    let newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email can't be empty";
    }

    if (password.length < 8) {
      newErrors.password = "at least 8 characters";
    }

    // Confirm Password validation (must match password)
    if (confirmPassword && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      validateForm(formData);
      return;
    }

    setIsSubmitting(true);

    try {
      await createUserWithEmailAndPassword(formData.email, formData.password);
      sessionStorage.setItem("user", true);
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
      notify({
        type: "Success",
        msg: "Account Created Successfully",
      });
      setTimeout(() => {
        router.push("/login");
      }, 4000);
    } catch (e) {
      notify({
        type: "Error",
        msg: `${e}: Problem encountered during registration`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  useEffect(() => {
    if (user) {
      setIsSubmitting(false);
    }
  }, [user]);

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
          <h2 className="font-bold text-app-dark text-4xl">DevLinkShare</h2>
        </div>

        <div className="text-left mb-6">
          <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
          <p className="text-default-gray">
            Let&apos;s get you started sharing your links!{" "}
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
                placeholder="e.g. alex@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-default-red focus:ring-default-red"
                    : "border-gray-300 focus:ring-active-purple"
                }`}
              />
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
                placeholder="Enter at least 8 characters"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-default-red focus:ring-default-red"
                    : "border-gray-300 focus:ring-active-purple"
                }`}
              />
              {errors.password && (
                <span className="absolute right-3 text-default-red text-xs">
                  {errors.password}
                </span>
              )}
            </div>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <label className="block text-gray-700">Confirm Password</label>
            <div className="flex items-center relative">
              <span className="absolute left-3 text-gray-400">
                <Password />
              </span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full pl-10 pr-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.confirmPassword
                    ? "border-default-red focus:ring-default-red"
                    : "border-gray-300 focus:ring-active-purple"
                }`}
              />
              {errors.confirmPassword && (
                <span className="absolute right-3 text-default-red text-xs">
                  {errors.confirmPassword}
                </span>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-2 px-4 text-white font-bold rounded-lg ${
                isFormValid && !isSubmitting
                  ? "bg-default-purple hover:bg-active-purple"
                  : "bg-disabled-purple cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>
        {/* Error message */}
        {error && (
          <p className="text-default-red text-sm mt-4">
            {error || "Problems Creating Account"}
          </p>
        )}
        <div className="text-center my-4">
          <p className="text-default-gray">
            Already a user!{" "}
            <Link href="/login">
              <span className="text-default-purple">Sign In Here</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateAccount;
