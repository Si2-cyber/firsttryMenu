import React from 'react';
import { ViewState } from '../types';

interface HeaderProps {
  cartCount: number;
  currentView: ViewState;
  onGoHome: () => void;
  onGoToCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, currentView, onGoHome, onGoToCart }) => {
  return (
    <header className="sticky top-0 z-50 bg-brand-red shadow-lg text-white pt-safe-top transition-all">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <div 
          onClick={onGoHome} 
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="w-8 h-8 bg-brand-yellow rounded-full flex items-center justify-center text-brand-red font-bold text-lg">
            R
          </div>
          <h1 className="text-xl font-bold tracking-tight">RedFlame <span className="text-brand-yellow">Bistro</span></h1>
        </div>

        {/* Cart Button */}
        {currentView !== 'SUCCESS' && (
          <button 
            onClick={onGoToCart}
            className="relative p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="View Cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-yellow text-brand-red text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;