import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="bg-white shadow-sm sticky top-[60px] z-40 overflow-x-auto no-scrollbar">
      <div className="flex justify-start md:justify-center p-2 min-w-max gap-2 px-4">
        {Object.values(Category).map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`
                px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 border
                ${isActive 
                  ? 'bg-brand-red text-white border-brand-red shadow-md scale-105' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                }
              `}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;