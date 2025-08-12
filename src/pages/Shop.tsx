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
  const [weightRange, setWeightRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock product data
  const allProducts = [
    {
      id: 1,
      name: "Pearl Essence Earrings",
      weight: 12.5,
      originalWeight: 15.0,
      image: productEarrings,
      rating: 4.9,
      reviews: 128,
      badge: "Bestseller",
      category: "Earrings"
    },
    {
      id: 2,
      name: "Diamond Infinity Bracelet",
      weight: 32.0,
      originalWeight: null,
      image: productBracelet,
      rating: 5.0,
      reviews: 89,
      badge: "New",
      category: "Bracelets"
    },
    {
      id: 3,
      name: "Royal Tennis Necklace",
      weight: 45.0,
      originalWeight: 52.0,
      image: productNecklace,
      rating: 4.8,
      reviews: 156,
      badge: "Limited",
      category: "Necklaces"
    },
    {
      id: 4,
      name: "Elegance Drop Earrings",
      weight: 8.9,
      originalWeight: null,
      image: productEarrings,
      rating: 4.7,
      reviews: 203,
      badge: "Popular",
      category: "Earrings"
    },
    {
      id: 5,
      name: "Luxury Chain Bracelet",
      weight: 21.0,
      originalWeight: 24.0,
      image: productBracelet,
      rating: 4.9,
      reviews: 95,
      badge: "Sale",
      category: "Bracelets"
    },
    {
      id: 6,
      name: "Signature Diamond Necklace",
      weight: 68.0,
      originalWeight: null,
      image: productNecklace,
      rating: 5.0,
      reviews: 67,
      badge: "Exclusive",
      category: "Necklaces"
    },
    {
      id: 7,
      name: "Classic Pearl Necklace",
      weight: 18.0,
      originalWeight: null,
      image: productNecklace,
      rating: 4.6,
      reviews: 142,
      category: "Necklaces"
    },
    {
      id: 8,
      name: "Gold Charm Bracelet",
      weight: 9.5,
      originalWeight: 12.0,
      image: productBracelet,
      rating: 4.5,
      reviews: 78,
      badge: "Sale",
      category: "Bracelets"
    },
    {
      id: 9,
      name: "Diamond Stud Earrings",
      weight: 22.0,
      originalWeight: null,
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

  const weightRanges = [
    { value: 'all', label: 'All Weights' },
    { value: '0-10', label: 'Under 10g' },
    { value: '10-30', label: '10g - 30g' },
    { value: '30-50', label: '30g - 50g' },
    { value: '50+', label: 'Over 50g' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'weight-low', label: 'Weight: Low to High' },
    { value: 'weight-high', label: 'Weight: High to Low' },
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

    // Weight filter
    if (weightRange !== 'all') {
      const [min, max] = weightRange.split('-').map(Number);
      filtered = filtered.filter(product => {
        if (weightRange === '50+') return product.weight >= 50;
        return product.weight >= min && product.weight <= max;
      });
    }

    // Sort
    switch (sortBy) {
      case 'weight-low':
        filtered.sort((a, b) => a.weight - b.weight);
        break;
      case 'weight-high':
        filtered.sort((a, b) => b.weight - a.weight);
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
  }, [searchQuery, selectedCategory, weightRange, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setWeightRange('all');
    setSortBy('featured');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || weightRange !== 'all';

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

              <Select value={weightRange} onValueChange={setWeightRange}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {weightRanges.map(range => (
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
                {weightRange !== 'all' && (
                  <Badge variant="secondary">
                    Weight: {weightRanges.find(r => r.value === weightRange)?.label}
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
                product={{
                  ...product,
                  weight: product.weight.toString(),
                  originalWeight: product.originalWeight?.toString()
                  ...product,
                  weight: product.weight.toString()
                }}
                className={viewMode === 'list' ? 'flex flex-row' : ''}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            
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
