import React, { useState, useCallback, useEffect } from 'react';
import { Vegetable, CartItem, View } from './types';
import { INITIAL_VEGETABLES } from './constants';
import Header from './components/Header';
import Home from './components/Home';
import VegetableList from './components/VegetableList';
import CartView from './components/CartView';
import CheckoutForm from './components/CheckoutForm';
import SubscriptionPlan from './components/SubscriptionPlan';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [vegetables, setVegetables] = useState<Vegetable[]>(INITIAL_VEGETABLES);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [showVeggies, setShowVeggies] = useState<boolean>(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('admin') === 'true') {
      setIsAdmin(true);
    }
  }, []);

  const addToCart = useCallback((veg: Vegetable) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === veg.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === veg.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...veg, quantity: 1 }];
    });
  }, []);

  const updateCartQuantity = useCallback((id: number, quantity: number) => {
    setCart(prevCart => {
      if (quantity <= 0) {
        return prevCart.filter(item => item.id !== id);
      }
      return prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      );
    });
  }, []);

  const updateVegetablePrice = useCallback((id: number, price: number) => {
    if (isAdmin) {
      setVegetables(prevVeggies =>
        prevVeggies.map(veg => (veg.id === id ? { ...veg, price } : veg))
      );
    }
  }, [isAdmin]);
  
  const updateVegetableImage = useCallback((id: number, image: string) => {
    if (isAdmin) {
      setVegetables(prevVeggies =>
        prevVeggies.map(veg => (veg.id === id ? { ...veg, image } : veg))
      );
    }
  }, [isAdmin]);

  const handlePlaceOrder = useCallback(() => {
    setCart([]);
    setView('confirmation');
  }, []);

  const renderView = () => {
    switch (view) {
      case 'cart':
        return <CartView cart={cart} updateCartQuantity={updateCartQuantity} setView={setView} />;
      case 'checkout':
        return <CheckoutForm onPlaceOrder={handlePlaceOrder} />;
      case 'confirmation':
        return (
          <div className="text-center p-10 bg-white rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-brand-green-dark mb-4">Thank You!</h2>
            <p className="text-brand-gray text-lg mb-6">Your order has been placed successfully. We'll deliver your fresh veggies soon!</p>
            <button
              onClick={() => {
                setView('home');
                setShowVeggies(false);
              }}
              className="bg-brand-green text-white font-bold py-2 px-6 rounded-lg hover:bg-brand-green-dark transition duration-300"
            >
              Shop Again
            </button>
          </div>
        );
      case 'home':
      case 'vegetables':
      default:
        return !showVeggies ? (
          <Home onShowVeggies={() => {
            setShowVeggies(true);
            setView('vegetables');
          }} />
        ) : (
          <VegetableList
            vegetables={vegetables}
            addToCart={addToCart}
            isAdmin={isAdmin}
            updatePrice={updateVegetablePrice}
            updateImage={updateVegetableImage}
          />
        );
    }
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-brand-off-white text-brand-gray font-sans flex flex-col">
      <Header cartItemCount={cartItemCount} setView={setView} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderView()}
      </main>
      {view !== 'checkout' && view !== 'confirmation' && <SubscriptionPlan />}
      <Footer />
    </div>
  );
};

export default App;