

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import '../Register/register'

function Register() {
  return (
    <>
    <RegisterForm/>
    </>

  );
}




function RegisterForm() {
  
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
      });
      const [errorMessage, setErrorMessage] = useState('');

      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirm-password').value,
            email: document.getElementById('Email').value,
        };
    
        console.log(formData); 
        
        try {
            const response = await axios.post('http://localhost:8080/api/register', formData);
            alert(response.data.message); // Show success message
          } catch (error) {
            console.error("Error occurred:", error + "problem with data" );
            if (error.response) {
              // Server responded with a status other than 2xx
              setErrorMessage(error.response.data.error || "An error occurred");
            } else if (error.request) {
              // Request was made but no response received
              setErrorMessage("No response received from server");
            } else {
              // Something happened in setting up the request
              setErrorMessage(error.message);
            }
          }
          
      };


    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
  
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
  
            {/* Surname Field */}
            <div>
              <label htmlFor="surname" className="block text-gray-600 mb-1">
                Surname
              </label>
              <input
                type="text"
                id="surname"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                placeholder="Enter your surname"
              />
            </div>
  
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                placeholder="Choose a username"
              />
            </div>
  
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                placeholder="Enter a password"
              />
            </div>
  
            {/* Re-enter Password Field */}
            <div>
              <label htmlFor="confirm-password" className="block text-gray-600 mb-1">
                Re-enter Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                placeholder="Re-enter your password"
              />
            </div>

             {/* Email Field */}
             <div>
              <label htmlFor="Email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="text"
                id="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                placeholder="Email"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 text-customblue bg-white rounded-lg font-semibold hover:bg-customblue hover:text-white transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }

export default Register;
