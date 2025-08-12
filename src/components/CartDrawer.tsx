import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
  const { state, removeFromCart, updateQuantity, toggleCart, clearCart } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={toggleCart}
      />
      
      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-luxury-gray-light">
          <h2 className="text-2xl font-luxury font-bold">Shopping Cart</h2>
          <Button variant="ghost" size="icon" onClick={toggleCart}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium text-muted-foreground mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">Add some beautiful jewelry to get started</p>
              <Button onClick={toggleCart} className="btn-luxury">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b border-luxury-gray-light pb-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-luxury-black">{item.name}</h4>
                    {item.size && <p className="text-sm text-muted-foreground">Size: {item.size}</p>}
                    {item.material && <p className="text-sm text-muted-foreground">Material: {item.material}</p>}
                    <p className="text-lg font-semibold text-primary mt-1">
                      {item.weight.toLocaleString()}g
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              {state.items.length > 0 && (
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="w-full text-red-500 border-red-200 hover:bg-red-50"
                >
                  Clear Cart
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-luxury-gray-light p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-2xl font-bold text-primary">
                ${state.total.toLocaleString()}
              </span>
            </div>
            
            <div className="space-y-3">
              <Button className="w-full btn-luxury text-lg py-3">
                Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={toggleCart}
              >
                Continue Shopping
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground">
              Free shipping on orders
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;