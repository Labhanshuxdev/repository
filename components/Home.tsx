import React, { useState } from 'react';

interface HomeProps {
  onShowVeggies: () => void;
}

const Home: React.FC<HomeProps> = ({ onShowVeggies }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowVeggies();
  };

  return (
    <div className="text-center py-16 px-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-brand-green-dark mb-4">Welcome to DailyVeggies!</h2>
      <p className="text-lg text-brand-gray mb-8">Your daily dose of fresh, organic vegetables delivered to your doorstep.</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label htmlFor="welcome-input" className="block text-md font-medium text-gray-700 mb-2">Ready to see today's fresh picks? Type a message below!</label>
        <div className="flex items-center gap-2">
          <input
            id="welcome-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g., 'Hello Freshness!'"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition text-gray-900"
          />
          <button
            type="submit"
            disabled={!inputValue}
            className="bg-brand-green text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-green-dark transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Show Veggies
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;