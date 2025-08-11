import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import productEarrings from '@/assets/product-earrings.jpg';
import productBracelet from '@/assets/product-bracelet.jpg';
import productNecklace from '@/assets/product-necklace.jpg';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: "Pearl Essence Earrings",
      price: 1200,
      originalPrice: 1500,
      image: productEarrings,
      rating: 4.9,
      reviews: 128,
      badge: "Bestseller",
      category: "Earrings"
    },
    {
      id: 2,
      name: "Diamond Infinity Bracelet",
      price: 3200,
      originalPrice: null,
      image: productBracelet,
      rating: 5.0,
      reviews: 89,
      badge: "New",
      category: "Bracelets"
    },
    {
      id: 3,
      name: "Royal Tennis Necklace",
      price: 4500,
      originalPrice: 5200,
      image: productNecklace,
      rating: 4.8,
      reviews: 156,
      badge: "Limited",
      category: "Necklaces"
    },
    {
      id: 4,
      name: "Elegance Drop Earrings",
      price: 890,
      originalPrice: null,
      image: productEarrings,
      rating: 4.7,
      reviews: 203,
      badge: "Popular",
      category: "Earrings"
    },
    {
      id: 5,
      name: "Luxury Chain Bracelet",
      price: 2100,
      originalPrice: 2400,
      image: productBracelet,
      rating: 4.9,
      reviews: 95,
      badge: "Sale",
      category: "Bracelets"
    },
    {
      id: 6,
      name: "Signature Diamond Necklace",
      price: 6800,
      originalPrice: null,
      image: productNecklace,
      rating: 5.0,
      reviews: 67,
      badge: "Exclusive",
      category: "Necklaces"
    },
    {
      id: 7,
      name: "Classic Pearl Necklace",
      price: 1800,
      originalPrice: null,
      image: productNecklace,
      rating: 4.6,
      reviews: 142,
      category: "Necklaces"
    },
    {
      id: 8,
      name: "Gold Charm Bracelet",
      price: 950,
      originalPrice: 1200,
      image: productBracelet,
      rating: 4.5,
      reviews: 78,
      badge: "Sale",
      category: "Bracelets"
    },
    {
      id: 9,
      name: "Diamond Stud Earrings",
      price: 2200,
      originalPrice: null,
      image: productEarrings,
      rating: 4.8,
      reviews: 234,
      badge: "Bestseller",
      category: "Earrings"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Necklaces', label: 'Necklaces' },
    { value: 'Rings', label: 'Rings' },
    { value: 'Earrings', label: 'Earrings' },
    { value: 'Bracelets', label: 'Bracelets' },
    { value: 'Watches', label: 'Watches' }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-1000', label: 'Under $1,000' },
    { value: '1000-3000', label: '$1,000 - $3,000' },
    { value: '3000-5000', label: '$3,000 - $5,000' },
    { value: '5000+', label: 'Over $5,000' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (priceRange === '5000+') return product.price >= 5000;
        return product.price >= min && product.price <= max;
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('featured');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-luxury-gray-light pt-20">
      {/* Header */}
      <div className="bg-white border-b border-luxury-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-luxury font-bold text-luxury-black mb-4">
              Luxury Jewelry Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of handcrafted jewelry pieces, each designed to celebrate life's precious moments
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg rounded-lg border-luxury-gray-light focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="bg-white rounded-lg shadow-elegant p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Filters:</span>
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map(range => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} className="text-sm">
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex border border-luxury-gray-light rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-luxury-gray-light">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchQuery && (
                  <Badge variant="secondary">Search: "{searchQuery}"</Badge>
                )}
                {selectedCategory !== 'all' && (
                  <Badge variant="secondary">Category: {selectedCategory}</Badge>
                )}
                {priceRange !== 'all' && (
                  <Badge variant="secondary">
                    Price: {priceRanges.find(r => r.value === priceRange)?.label}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-lg text-muted-foreground">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className={viewMode === 'list' ? 'flex flex-row' : ''}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-2xl font-luxury font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={clearFilters} className="btn-luxury">
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <Button className="btn-luxury px-8 py-3">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
