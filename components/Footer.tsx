
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-dark text-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} DailyVeggies. All Rights Reserved.</p>
        <p className="text-sm text-green-200 mt-1">Freshness Delivered Daily.</p>
      </div>
    </footer>
  );
};

export default Footer;
