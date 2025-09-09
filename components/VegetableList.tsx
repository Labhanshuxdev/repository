import React from 'react';
import { Vegetable } from '../types';
import VegetableItem from './VegetableItem';

interface VegetableListProps {
  vegetables: Vegetable[];
  addToCart: (veg: Vegetable) => void;
  isAdmin: boolean;
  updatePrice: (id: number, price: number) => void;
  updateImage: (id: number, imageUrl: string) => void;
}

const VegetableList: React.FC<VegetableListProps> = ({ vegetables, addToCart, isAdmin, updatePrice, updateImage }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-brand-green-dark mb-8">Today's Fresh Selection</h2>
      {isAdmin && (
        <div className="text-center mb-6 p-3 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-md">
          <p><strong>Admin Mode is ON.</strong> You can now edit prices and image URLs directly on the cards.</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {vegetables.map(veg => (
          <VegetableItem 
            key={veg.id} 
            vegetable={veg} 
            addToCart={addToCart} 
            isAdmin={isAdmin}
            updatePrice={updatePrice}
            updateImage={updateImage}
          />
        ))}
      </div>
    </div>
  );
};

export default VegetableList;