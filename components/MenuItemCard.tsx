import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  quantityInCart: number;
  onAdd: (item: MenuItem) => void;
  onRemove: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, quantityInCart, onAdd, onRemove }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100">
      <div className="relative h-48 w-full overflow-hidden group">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg font-bold text-brand-red shadow-sm">
          Rs. {item.price}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.name}</h3>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">{item.description}</p>
        
        <div className="mt-auto pt-2">
          {quantityInCart === 0 ? (
            <button
              onClick={() => onAdd(item)}
              className="w-full py-2.5 bg-brand-red text-white rounded-lg font-semibold text-sm hover:bg-red-800 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
              Add to Order
            </button>
          ) : (
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => onRemove(item)}
                className="w-10 h-10 bg-white text-brand-red rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50 active:scale-90 transition-transform font-bold text-lg"
              >
                −
              </button>
              <span className="font-bold text-gray-900 text-lg w-8 text-center">{quantityInCart}</span>
              <button
                onClick={() => onAdd(item)}
                className="w-10 h-10 bg-brand-red text-white rounded-md shadow-sm flex items-center justify-center hover:bg-red-800 active:scale-90 transition-transform font-bold text-lg"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;