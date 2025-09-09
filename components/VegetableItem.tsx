import React, { useState, useEffect } from 'react';
import { Vegetable } from '../types';

interface VegetableItemProps {
  vegetable: Vegetable;
  addToCart: (veg: Vegetable) => void;
  isAdmin: boolean;
  updatePrice: (id: number, price: number) => void;
  updateImage: (id: number, imageUrl: string) => void;
}

const VegetableItem: React.FC<VegetableItemProps> = ({ vegetable, addToCart, isAdmin, updatePrice, updateImage }) => {
  const [price, setPrice] = useState(vegetable.price.toFixed(2));
  const [imageUrl, setImageUrl] = useState(vegetable.image);

  useEffect(() => {
    setPrice(vegetable.price.toFixed(2));
  }, [vegetable.price]);

  useEffect(() => {
    setImageUrl(vegetable.image);
  }, [vegetable.image]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handlePriceBlur = () => {
    const newPrice = parseFloat(price);
    if (!isNaN(newPrice) && newPrice > 0) {
      updatePrice(vegetable.id, newPrice);
    } else {
      setPrice(vegetable.price.toFixed(2)); // Reset if invalid
    }
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  const handleImageUrlBlur = () => {
    updateImage(vegetable.id, imageUrl);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <img src={imageUrl} alt={vegetable.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-brand-gray mb-2">{vegetable.name}</h3>

        {isAdmin && (
          <div className="mb-2">
            <label htmlFor={`image-url-${vegetable.id}`} className="block text-xs font-medium text-gray-500">Image URL</label>
            <input
              id={`image-url-${vegetable.id}`}
              type="text"
              value={imageUrl}
              onChange={handleImageUrlChange}
              onBlur={handleImageUrlBlur}
              className="w-full mt-1 p-1 border border-gray-300 rounded-md text-sm text-gray-900"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        )}

        <div className="flex items-center text-lg text-brand-green-dark font-bold mb-4">
          ₹
          {isAdmin ? (
            <input
              type="number"
              value={price}
              onChange={handlePriceChange}
              onBlur={handlePriceBlur}
              className="w-20 ml-1 p-1 border border-gray-300 rounded-md text-gray-900"
              step="0.01"
              min="0.01"
            />
          ) : (
            <span>{vegetable.price.toFixed(2)}</span>
          )}
          <span className="text-sm font-normal text-gray-500 ml-1">/ {vegetable.unit}</span>
        </div>
        <button
          onClick={() => addToCart(vegetable)}
          className="mt-auto w-full bg-brand-green text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-green-dark transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default VegetableItem;