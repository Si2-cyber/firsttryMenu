import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import MenuItemCard from './components/MenuItemCard';
import CartView from './components/CartView';
import OrderSuccessView from './components/OrderSuccessView';
import { MENU_ITEMS } from './constants';
import { Category, MenuItem, CartItem, ViewState, Order } from './types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('MENU');
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.BURGER);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  const cartItemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (!existing) return prev;
      if (existing.quantity === 1) {
        return prev.filter(i => i.id !== item.id);
      }
      return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i);
    });
  };

  const handlePlaceOrder = (tableNumber: string) => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + Math.round(subtotal * 0.05);
    
    // Generate a random 4 digit order number
    const orderNumber = Math.floor(1000 + Math.random() * 9000).toString();
    
    const newOrder: Order = {
      orderNumber,
      tableNumber,
      items: [...cart],
      total,
      timestamp: new Date()
    };

    setLastOrder(newOrder);
    setCart([]);
    setCurrentView('SUCCESS');
    window.scrollTo(0, 0);
  };

  const startNewOrder = () => {
    setLastOrder(null);
    setCurrentView('MENU');
  };

  return (
    <div className="min-h-screen bg-brand-light pb-10">
      <Header 
        cartCount={cartItemCount} 
        currentView={currentView}
        onGoHome={() => setCurrentView('MENU')}
        onGoToCart={() => setCurrentView('CART')}
      />

      <main className="max-w-4xl mx-auto mt-4 px-4">
        {currentView === 'MENU' && (
          <div className="animate-fadeIn">
            <div className="text-center mb-6 pt-4">
              <h2 className="text-3xl font-extrabold text-gray-800">Our Menu</h2>
              <p className="text-gray-500">Delicious meals prepared with love</p>
            </div>

            <CategoryTabs 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {filteredItems.map(item => {
                const cartItem = cart.find(c => c.id === item.id);
                return (
                  <MenuItemCard 
                    key={item.id} 
                    item={item} 
                    quantityInCart={cartItem ? cartItem.quantity : 0}
                    onAdd={handleAddToCart}
                    onRemove={handleRemoveFromCart}
                  />
                );
              })}
            </div>
            
            {cartItemCount > 0 && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-sm px-4 md:hidden">
                <button 
                  onClick={() => setCurrentView('CART')}
                  className="w-full bg-brand-red text-white py-3 rounded-full shadow-2xl flex items-center justify-between px-6 hover:bg-red-800 transition-transform active:scale-95"
                >
                  <span className="font-bold bg-white text-brand-red w-6 h-6 rounded-full flex items-center justify-center text-sm">{cartItemCount}</span>
                  <span className="font-bold text-lg">View Cart</span>
                  <span className="font-bold">Rs. {cart.reduce((s, i) => s + (i.price * i.quantity), 0)}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {currentView === 'CART' && (
          <CartView 
            cart={cart}
            onAdd={handleAddToCart}
            onRemove={handleRemoveFromCart}
            onPlaceOrder={handlePlaceOrder}
            onBack={() => setCurrentView('MENU')}
          />
        )}

        {currentView === 'SUCCESS' && lastOrder && (
          <OrderSuccessView 
            order={lastOrder}
            onNewOrder={startNewOrder}
          />
        )}
      </main>
    </div>
  );
}

export default App;