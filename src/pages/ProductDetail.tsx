import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Heart, ShoppingBag, Share2, Star, ArrowLeft, Plus, Minus, 
  Shield, Truck, RotateCcw, Award, Zap, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCart } from '@/context/CartContext';
import productEarrings from '@/assets/product-earrings.jpg';
import productBracelet from '@/assets/product-bracelet.jpg';
import productNecklace from '@/assets/product-necklace.jpg';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock product data - in real app, fetch based on ID
  const product = {
    id: parseInt(id || '1'),
    name: "Pearl Essence Earrings",
    price: 1200,
    originalPrice: 1500,
    images: [productEarrings, productBracelet, productNecklace],
    rating: 4.9,
    reviews: 128,
    badge: "Bestseller",
    category: "Earrings",
    description: "Exquisite pearl earrings crafted with the finest cultured pearls and 18k gold settings. Each pearl is hand-selected for its lustrous beauty and perfect symmetry.",
    features: [
      "18k Gold Setting",
      "Cultured Freshwater Pearls",
      "Hypoallergenic",
      "Handcrafted",
      "Lifetime Warranty"
    ],
    sizes: ["Small", "Medium", "Large"],
    materials: ["18k Gold", "Rose Gold", "White Gold"],
    inStock: true,
    stockCount: 5,
    sku: "PE-001",
    relatedProducts: [2, 3, 4]
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      material: selectedMaterial,
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const customerReviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      comment: "Absolutely stunning! The quality exceeded my expectations and the pearls have such beautiful luster.",
      date: "2 weeks ago",
      verified: true
    },
    {
      id: 2,
      name: "Emma L.",
      rating: 5,
      comment: "Perfect for special occasions. The craftsmanship is impeccable and they feel very comfortable to wear.",
      date: "1 month ago",
      verified: true
    },
    {
      id: 3,
      name: "Jennifer K.",
      rating: 4,
      comment: "Beautiful earrings, exactly as pictured. Fast shipping and excellent packaging.",
      date: "2 months ago",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-gray-light pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </button>
          <span>/</span>
          <span>Shop</span>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-luxury-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-elegant">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-luxury-black font-medium">
                    {product.badge}
                  </Badge>
                </div>
              )}

              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/90 hover:bg-white transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-primary' 
                        : 'border-transparent hover:border-luxury-gray'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-primary font-medium tracking-wider uppercase">
                  {product.category}
                </span>
                <Badge variant="outline" className="text-xs">
                  SKU: {product.sku}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-luxury font-bold text-luxury-black mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-primary fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-luxury-black font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-luxury">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <Badge variant="destructive" className="bg-red-100 text-red-700">
                      Save ${(product.originalPrice - product.price).toLocaleString()}
                    </Badge>
                  </>
                )}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {product.sizes.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map(size => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {product.materials.length > 0 && (
                <div>
                  <label className="block text-sm font-medium mb-2">Material</label>
                  <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.materials.map(material => (
                        <SelectItem key={material} value={material}>
                          {material}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-luxury-gray-light rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 py-2 font-medium">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.stockCount} in stock
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button 
                  className="flex-1 btn-luxury text-lg py-3"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3"
                >
                  <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
                <Button variant="outline" size="icon" className="p-3">
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>

              <Button variant="outline" className="w-full text-lg py-3">
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Lifetime Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="h-5 w-5 text-primary" />
                <span className="text-sm">30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">Certified Authentic</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="bg-white rounded-lg p-8 shadow-elegant">
              <h3 className="text-2xl font-luxury font-semibold mb-4">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
              
              <h4 className="text-lg font-semibold mb-3">Features</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="reviews" className="bg-white rounded-lg p-8 shadow-elegant">
              <h3 className="text-2xl font-luxury font-semibold mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {customerReviews.map((review) => (
                  <div key={review.id} className="border-b border-luxury-gray-light pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium">{review.name}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${
                                i < review.rating 
                                  ? 'text-primary fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="bg-white rounded-lg p-8 shadow-elegant">
              <h3 className="text-2xl font-luxury font-semibold mb-6">Shipping & Returns</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Shipping Information</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Free standard shipping on orders over $1,000</li>
                    <li>• Express shipping available</li>
                    <li>• International shipping to most countries</li>
                    <li>• All orders are insured and require signature</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Returns & Exchanges</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 30-day return policy</li>
                    <li>• Items must be in original condition</li>
                    <li>• Free returns on defective items</li>
                    <li>• Lifetime warranty on all products</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;