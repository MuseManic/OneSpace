// App.js

import React from 'react';

function Login() {
  return (
    <>
    <LoginForm/>
    </>

  );
}

function LoginForm() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg bg-white">
          <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
  
          <form className="space-y-4">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-gray-600 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customblue focus:border-transparent"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
              />
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 mt-4 text-customblue bg-white rounded-lg font-semibold hover:bg-customblue hover:text-white transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

export default Login;
