'use client'
import Navbar from '@/components/Navbar';
import React, { useState } from 'react';
import { FaFacebook, FaUser, FaEnvelope, FaMobileAlt, FaLock } from "react-icons/fa"; // Imported relevant icons
import Link from 'next/link';

// Define types for the form errors and state
interface FormErrors {
  fields?: string;
  password?: string;
  passwordStrength?: string;
  mobile?: string;
}

export default function page() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [passwordStrength, setPasswordStrength] = useState<string>('');
  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Handle form submission
  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page refresh
    setFormErrors({}); // Clear previous errors

    // Safe access to form values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;

    // Validate the form
    let errors: FormErrors = {};
    if (!username || !email || !password || !confirmPassword || !mobile) {
      errors = { ...errors, fields: 'All fields are required' };
    }
    if (password !== confirmPassword) {
      errors = { ...errors, password: 'Passwords do not match' };
    }
    if (password.length < 6) {
      errors = { ...errors, passwordStrength: 'Password is too weak' };
    }
    if (!/^(\+?\d{1,3}[- ]?)?\d{10}$/.test(mobile)) {
      errors = { ...errors, mobile: 'Please enter a valid mobile number' };
    }

    // If errors, show them and return
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Save login details to localStorage (without the password)
    localStorage.setItem('userDetails', JSON.stringify({ username, email, mobile }));

    // Redirect to the user-admin-dashboard
    window.location.href = '/user-dashboard';
  };

  // Handle password change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pass = e.target.value;
    setPassword(pass);
    
    // Password strength checker
    if (pass.length <= 5) {
      setPasswordStrength('weak');
    } else if (pass.length <= 8) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }

    // Check if passwords match
    setPasswordMatch(pass === confirmPassword);
  };

  // Handle confirm password change
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPass = e.target.value;
    setConfirmPassword(confirmPass);

    // Check if passwords match
    setPasswordMatch(confirmPass === password);
  };

  // Handle mobile number change
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
  };

  return (
    <>
      <Navbar isDarkMode={undefined} />
      <div className="bg-white py-20">
        <div className="p-8 lg:w-1/2 mx-auto">
          <div className="bg-lightBG rounded-t-lg p-8">
            <p className="text-center text-sm text-gray-400 font-light">Sign up with</p>
            <div>
              <div className="flex items-center justify-center space-x-4 mt-3">
                <button className="flex items-center justify-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  <FaFacebook className="text-2xl" /> Facebook
                </button>
                <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#e53935"
                      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <p className="text-center text-sm text-gray-500 font-light">Or sign up with credentials</p>

            <form className="mt-6" onSubmit={handleSignUp}>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  required
                />
              </div>

              <div className="relative mt-3">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="relative mt-3">
                <FaMobileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="mobile"
                  type="text"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={handleMobileChange}
                  required
                />
                {formErrors.mobile && <p className="text-red-500 text-xs">{formErrors.mobile}</p>}
              </div>

              <div className="relative mt-3">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {passwordStrength && (
                  <p className={`mt-2 text-xs ${passwordStrength === 'weak' ? 'text-red-500' : passwordStrength === 'medium' ? 'text-yellow-500' : 'text-green-500'}`}>
                    Password strength: {passwordStrength}
                  </p>
                )}
              </div>

              <div className="relative mt-3">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                {!passwordMatch && confirmPassword && (
                  <p className="text-red-500 text-xs">Passwords do not match</p>
                )}
              </div>

              {formErrors.fields && <p className="text-red-500 text-xs">{formErrors.fields}</p>}
              {formErrors.passwordStrength && <p className="text-red-500 text-xs">{formErrors.passwordStrength}</p>}
              {formErrors.password && <p className="text-red-500 text-xs">{formErrors.password}</p>}

              <div className="mt-4 flex items-center text-gray-500">
                <input type="checkbox" id="remember" name="remember" className="mr-2" />
                <label className="text-sm" htmlFor="remember">
                  I agree with the{" "}
                  <a className="text-indigo-400 hover:text-indigo-500">Privacy Policy</a>
                </label>
              </div>

              <div className="flex items-center justify-center mt-8">
                <button
                  className="text-white py-2 px-4 uppercase rounded bg-lightGreen hover:bg-green-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Create Account
                </button>
              </div>
              <div className="text-darkBG text-center pt-5 cursor-pointer">
                <h1>Already have an Account?</h1>
                <Link href="/user-login"><p className="text-blue-500">Login</p></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
