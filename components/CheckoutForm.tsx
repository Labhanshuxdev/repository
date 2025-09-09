import React, { useState } from 'react';

interface CheckoutFormProps {
  onPlaceOrder: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onPlaceOrder }) => {
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) {
      setError('Contact number is required.');
      return;
    }
    if (!/^\d{10,}$/.test(contact.replace(/\D/g, ''))) {
      setError('Please enter a valid contact number (at least 10 digits).');
      return;
    }
    setError('');
    onPlaceOrder();
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto">
      <h2 className="text-3xl font-bold text-brand-green-dark mb-6 border-b pb-4">Delivery Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="address" className="block text-lg font-medium text-gray-700">
            Full Address
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={4}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm text-gray-900"
            placeholder="123 Green St, Veggie Town, 12345"
          ></textarea>
        </div>
        <div>
          <label htmlFor="contact" className="block text-lg font-medium text-gray-700">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm text-gray-900"
            placeholder="e.g., (555) 123-4567"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-brand-green text-white font-bold py-3 px-4 rounded-lg text-lg hover:bg-brand-green-dark transition duration-300"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;