import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartViewProps {
  cart: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onPlaceOrder: (tableNumber: string) => void;
  onBack: () => void;
}

const CartView: React.FC<CartViewProps> = ({ cart, onAdd, onRemove, onPlaceOrder, onBack }) => {
  const [tableNumber, setTableNumber] = useState('');
  const [error, setError] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.05); // 5% tax example
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tableNumber.trim()) {
      setError('Please enter your table number');
      return;
    }
    onPlaceOrder(tableNumber);
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4 animate-fadeIn">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any delicious food yet.</p>
        <button 
          onClick={onBack}
          className="px-8 py-3 bg-brand-red text-white font-semibold rounded-full shadow-lg hover:bg-red-800 transition-colors"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pb-20 animate-slideUp">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <h2 className="font-bold text-lg text-gray-800">Your Order</h2>
          <span className="text-sm text-gray-500">{cart.length} items</span>
        </div>
        
        <div className="divide-y divide-gray-100">
          {cart.map((item) => (
            <div key={item.id} className="p-4 flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-brand-red font-medium">Rs. {item.price * item.quantity}</p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                <button 
                  onClick={() => onRemove(item)}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded shadow-sm text-brand-red hover:bg-gray-100"
                >
                  −
                </button>
                <span className="w-4 text-center font-medium text-sm">{item.quantity}</span>
                <button 
                  onClick={() => onAdd(item)}
                  className="w-8 h-8 flex items-center justify-center bg-brand-red text-white rounded shadow-sm hover:bg-red-800"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
        <h3 className="font-bold text-gray-800 mb-4">Payment Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax (5%)</span>
            <span>Rs. {tax}</span>
          </div>
          <div className="border-t border-dashed border-gray-300 pt-3 mt-3 flex justify-between items-center">
            <span className="font-bold text-lg text-gray-900">Total</span>
            <span className="font-bold text-xl text-brand-red">Rs. {total}</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border-2 border-brand-red/10 p-6">
        <label htmlFor="tableNum" className="block text-sm font-medium text-gray-700 mb-2">
          Table Number <span className="text-red-500">*</span>
        </label>
        <div className="relative mb-2">
          <input
            id="tableNum"
            type="number"
            value={tableNumber}
            onChange={(e) => {
              setTableNumber(e.target.value);
              setError('');
            }}
            placeholder="e.g. 5"
            className={`w-full p-4 text-lg border rounded-xl focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all ${error ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mb-4 animate-pulse">{error}</p>}
        
        <button 
          type="submit"
          className="w-full bg-brand-red text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-red-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Confirm Order
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default CartView;