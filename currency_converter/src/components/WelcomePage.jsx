import React from "react";
import { Link } from "react-router-dom";

const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">{getGreeting()}, welcome to CurrencyMate</h1>
      <p className="text-lg mb-8">Your go-to app for currency conversion.</p>
      <Link to="/converter">
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Go to Converter
        </button>
      </Link>
    </div>
  );
};

export default WelcomePage;
