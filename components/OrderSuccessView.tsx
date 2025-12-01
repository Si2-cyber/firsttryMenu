import React from 'react';
import { Order } from '../types';

interface OrderSuccessViewProps {
  order: Order;
  onNewOrder: () => void;
}

const OrderSuccessView: React.FC<OrderSuccessViewProps> = ({ order, onNewOrder }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fadeIn">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>
      
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Order Received!</h2>
      <p className="text-gray-500 mb-8 max-w-sm">
        The kitchen has started preparing your delicious food. Please wait at your table.
      </p>

      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-sm overflow-hidden mb-8 relative">
        <div className="h-2 bg-brand-yellow w-full"></div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Order No</p>
              <p className="text-2xl font-black text-gray-800 font-mono">#{order.orderNumber}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Table No</p>
              <p className="text-2xl font-black text-brand-red font-mono">{order.tableNumber}</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm text-gray-600 border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                <span>{item.quantity}x {item.name}</span>
                <span>Rs. {item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <span className="font-bold text-gray-800">Total Paid</span>
            <span className="font-bold text-xl text-brand-red">Rs. {order.total}</span>
          </div>
        </div>
        
        {/* Ticket jagged edge effect */}
        <div className="absolute bottom-0 left-0 w-full h-4 bg-brand-light" 
             style={{
               background: "radial-gradient(circle, transparent 70%, #FFF8F0 70%)",
               backgroundSize: "16px 16px",
               backgroundPosition: "0 10px"
             }}
        ></div>
      </div>

      <button
        onClick={onNewOrder}
        className="text-brand-red font-semibold hover:text-red-800 hover:underline underline-offset-4 transition-all"
      >
        Place Another Order
      </button>
    </div>
  );
};

export default OrderSuccessView;