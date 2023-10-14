import React, { useState } from "react";
import building from '../assets/building.png';
import { Link } from "react-router-dom";

function Signup() {
  const handleSubmit = (() => {
    // Handle the form submission
  });

  const handleChange = (() => {
    // Handle input field changes
  });

  return (
    <div className="bg-primary min-h-screen flex flex-wrap" style={{ backgroundImage: `url(${building})` }}>
      <div className="w-full lg:w-1/2 p-8 pt-0 flex flex-col items-center justify-center">
        <h2 className="text-3xl text-white font-semibold mb-2 pt-10">
          Welcome to Dune
        </h2>
        <p className="text-gray-200 text-lg text-center lg:pb-64">
          Discover the finest properties on Dune Estate. We cater to all buyers
          and sellers, ensuring you're covered whether you're new to the market
          or a seasoned investor.
        </p>
      </div>

      <div className="w-full lg:w-1/2 p-4 md:p-16 lg:p-18 mb-5">
        
        <div className="text-center mb-6">
        </div>

        <form className="bg-darkend  md:p-8 p-6 opacity-90 lg:opacity-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-white text-center">
          Sign Up
        </h2>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="w-full px-4 mb-2 py-2 border focus:outline-none focus:border-primary bg-primary border-r-0 border-l-0 border-t-0 border-neutral-700 placeholder-gray-500 text-slate-100"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 border focus:outline-none focus:border-primary bg-primary border-r-0 border-l-0 border-t-0 border-neutral-700 placeholder-gray-500 text-slate-100"
              placeholder="Enter your Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-2 mb-2 border focus:outline-none focus:border-primary bg-primary border-r-0 border-l-0 border-t-0 border-neutral-700 placeholder-gray-500 text-slate-100"
              placeholder="Enter your Password"
            />
          </div>

          <div className="flex justify-center items-center mt-10">
            <button
              type="submit"
              className="bg-dunegreen text-white px-4 py-2 rounded hover:bg-primary-dark focus:outline-none focus:ring w-full lg:w-96 focus:ring-primary-dark justify-center text-center"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center mb-4 mt-4">
            <span className="text-gray-200 text-sm">
              Already have an account?{" "}
            </span>
            <Link
              to="/login"
              className="text-heading hover:underline remove-pseudo"
            >
              Login
            </Link>
          </div>


          <div className="flex justify-center items-center mt-6">
            <button
              type="button"
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring w-full lg:w-96 focus:ring-gray-400 justify-center text-center flex items-center"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEVHcEz////9/f38/Pz////4+fn9/f38/P3v8PH19vb///////87q1n8wAnrSz5HifXqOijsUUMfpUYvfvQwqVhDhvRnm/bg7ur74eDykIrznpj609DI5c/uZUj/78rG2PyzzPKJyJj5zMn/++37xSf81XhqsFCa0KV1v4f0kCGvtTCCyJyXt/hyofZDj9Yia4J9AAAAC3RSTlMAojhxnKGw/RkrfoV/rhcAAAFQSURBVDiNlVPZYoMgENQYRCIgclRNNKlpm/T+/88rl3jmofPEMuPu7LpE0X+wO8RpGh9222wW5wFxtuYntJUsaATzBSCaFV/SBhMryF9dm46xrjn5cMzh8p9KRsuypJSVTgLn/o6stKAa7Gqv9r6/kadMQ/NHX8R1u7f5Dc+aGsK6CbxPYY+dLk9rd12PnYQWz6SjbEJMW03M4Y2Qj2ZjFslg4ZUQcrZXTwMug4nUHDRPXqxAFBpKKfFsovSBwGiCYFFCGKiiEKHEYPLza/T2owpRDSaRa/MmeTXwla4j7AmFQd0kxtIrYKEK9R0G5Uy0HGPM+wrC6i41L+A4avez7kYhuYbO9ess+p8VARv0RuEgue0xB/OFaaX5GEvJsTMTFsYX0ZJ3XQP3rQ8nu7+5tLO1ztZrv3w7YM6DaIUMhCwQbDw9+z4SkKYgQdvsA/wBrYgleUhdXncAAAAASUVORK5CYII="  
                alt="Google Icon"
                className="w-6 h-6 mr-2"
              />
              Sign Up with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
