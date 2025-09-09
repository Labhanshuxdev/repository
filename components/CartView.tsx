import React from 'react';
import { CartItem, View } from '../types';

interface CartViewProps {
  cart: CartItem[];
  updateCartQuantity: (id: number, quantity: number) => void;
  setView: (view: View) => void;
}

const CartView: React.FC<CartViewProps> = ({ cart, updateCartQuantity, setView }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="text-center p-10 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-brand-green-dark mb-4">Your Cart is Empty</h2>
        <p className="text-brand-gray text-lg mb-6">Looks like you haven't added any fresh veggies yet.</p>
        <button
          onClick={() => setView('vegetables')}
          className="bg-brand-green text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-green-dark transition duration-300"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-brand-green-dark mb-6 border-b pb-4">Your Shopping Cart</h2>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg"/>
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">₹{item.price.toFixed(2)} / {item.unit}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg">
                <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg font-bold hover:bg-gray-100">-</button>
                <span className="px-4 py-1">{item.quantity}</span>
                <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg font-bold hover:bg-gray-100">+</button>
              </div>
              <p className="text-lg font-bold w-24 text-right">₹{(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => updateCartQuantity(item.id, 0)} className="text-red-500 hover:text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-lg">Subtotal: <span className="font-bold">₹{subtotal.toFixed(2)}</span></p>
        <p className="text-lg">Tax (5%): <span className="font-bold">₹{tax.toFixed(2)}</span></p>
        <p className="text-2xl font-bold mt-2">Total: <span className="text-brand-green-dark">₹{total.toFixed(2)}</span></p>
        <button
          onClick={() => setView('checkout')}
          className="mt-6 bg-brand-green text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-green-dark transition duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartView;