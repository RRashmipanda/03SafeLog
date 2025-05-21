"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-opacity-10 backdrop-blur-sm shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold">Co Force</div>

        {/* Nav Links */}
        <ul className="flex items-center space-x-8 font-medium">
          {["Home", "About", "Courses"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-1 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Login/Signup */}
        <div className="flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-yellow-300 transition-all"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg bg-yellow-300 text-indigo-800 font-semibold hover:bg-white transition-all"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center flex-grow px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Learn. Grow. Excel.
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl">
          Join thousands of learners worldwide. Explore our handpicked courses
          and start your journey today with LMS Academy!
        </p>
        <div className="flex space-x-6">
          <Link
            href="#courses"
            className="px-8 py-4 rounded-full bg-yellow-300 text-indigo-900 text-lg font-bold hover:bg-white transition"
          >
            Explore Courses
          </Link>
          <Link
            href="/signup"
            className="px-8 py-4 rounded-full bg-white text-indigo-800 text-lg font-bold hover:bg-yellow-300 transition"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white bg-opacity-10">
        &copy; 2025 Code Force . All rights reserved.
      </footer>
    </div>
  );
}
