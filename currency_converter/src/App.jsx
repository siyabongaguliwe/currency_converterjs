import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CurrencyConverter from "./components/currency-converter";
import { useState } from "react";

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

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConversionStart = () => {
    setLoading(true);
    setError(null);
  };

  const handleConversionEnd = (error) => {
    setLoading(false);
    if (error) {
      setError("Failed to convert currency. Please try again.");
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-black flex flex-col items-center justify-center relative">
        <header className="w-full bg-indigo-600 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">CurrencyMate</h1>
          <p className="text-lg">{getGreeting()}, welcome to CurrencyMate!</p>
        </header>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/converter" element={
            <div className="container my-10">
              {loading && (
                <div className="flex justify-center mb-4">
                  <div className="loader"></div>
                </div>
              )}
              {error && (
                <div className="text-red-500 text-center mb-4">{error}</div>
              )}
              <CurrencyConverter
                onConversionStart={handleConversionStart}
                onConversionEnd={handleConversionEnd}
              />
            </div>
          } />
        </Routes>
        <footer className="w-full bg-indigo-600 text-white py-4 text-center">
          <p>&copy; 2025 CurrencyMate Developed by Siyabonga Neo Guliwe</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
