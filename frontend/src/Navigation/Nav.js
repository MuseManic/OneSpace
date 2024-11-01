// App.js
import './Nav.css';
import React from 'react';
import { Route, Routes, Link} from 'react-router-dom';
import Welcome from '../Welcome/App';
import Login from '../Login/login';
import Register from '../Register/register';

function Nav() {
  return (
    
      <div>
        <NavBar />
      </div>
    
  );
}

function NavBar() {
    return (
      <div className="flex">
        {/* Full-height Sidebar on the Left */}
        <aside className="h-screen w-1/5 bg-gradient-to-b from-gray-200 to-white shadow-lg flex flex-col items-center p-4">
          <div className="space-y-4 mt-10">
            <Link
              to="/login"
              className="font-bold rounded-lg px-6 py-3 border-2 border-customblue bg-white text-customblue transition-all duration-300 hover:bg-customblue hover:text-white hover:bottom-0"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="font-bold rounded-lg px-6 py-3 border-2 border-customblue bg-white text-customblue transition-all duration-300 hover:bg-customblue hover:text-white hover:bottom-0"
            >
              Register
            </Link>
          </div>
        </aside>
  
        {/* Main Content Area */}
        <main className="flex-1 p-10 bg-gray-100">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    );
  }
  

export default Nav;
