import React, { useState } from 'react';
import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const getBadgeVariant = (badge?: string) => {
    switch (badge) {
      case 'Bestseller': return 'default';
      case 'New': return 'secondary';
      case 'Limited': return 'destructive';
      case 'Sale': return 'default';
      default: return 'outline';
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-elegant hover-glow transition-all duration-500 overflow-hidden cursor-pointer ${className}`}
      onClick={handleProductClick}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <Badge variant={getBadgeVariant(product.badge)} className="bg-primary text-luxury-black font-medium">
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-300 hover:scale-110"
        >
          <Heart 
            className={`h-5 w-5 transition-colors ${
              isFavorite 
                ? 'text-red-500 fill-red-500' 
                : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <Button 
              size="sm" 
              className="btn-glass text-white hover:text-primary"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4 mr-1" />
              Quick View
            </Button>
            <Button 
              size="sm" 
              className="btn-luxury"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-primary font-medium tracking-wider uppercase">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-luxury font-semibold text-luxury-black mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-primary fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-muted-foreground">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-luxury">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          {product.originalPrice && (
            <Badge variant="destructive" className="bg-red-100 text-red-700">
              Save ${(product.originalPrice - product.price).toLocaleString()}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;