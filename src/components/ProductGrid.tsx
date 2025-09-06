import { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import ProductCard from './ProductCard';
import { mockProducts, categories, Product } from '@/data/mockProducts';
import { useToast } from '@/hooks/use-toast';

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('featured');
  const [wishlistedItems, setWishlistedItems] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<string[]>([]);
  const { toast } = useToast();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
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
        // For demo purposes, we'll just reverse the array
        filtered.reverse();
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleAddToCart = (productId: string) => {
    if (!cartItems.includes(productId)) {
      setCartItems([...cartItems, productId]);
      const product = mockProducts.find(p => p.id === productId);
      toast({
        title: "Added to cart!",
        description: `${product?.title} has been added to your cart.`,
      });
    }
  };

  const handleToggleWishlist = (productId: string) => {
    const product = mockProducts.find(p => p.id === productId);
    if (wishlistedItems.includes(productId)) {
      setWishlistedItems(wishlistedItems.filter(id => id !== productId));
      toast({
        title: "Removed from wishlist",
        description: `${product?.title} has been removed from your wishlist.`,
      });
    } else {
      setWishlistedItems([...wishlistedItems, productId]);
      toast({
        title: "Added to wishlist!",
        description: `${product?.title} has been added to your wishlist.`,
      });
    }
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Discover Eco-Friendly Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our curated collection of sustainable products that help you live 
            more consciously while reducing your environmental impact.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-6 mb-8 shadow-soft">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-4"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results count */}
            <div className="text-sm text-muted-foreground">
              Showing {filteredAndSortedProducts.length} of {mockProducts.length} products
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategory !== 'All Categories' && (
              <Badge variant="secondary" className="gap-2">
                {selectedCategory}
                <button 
                  onClick={() => setSelectedCategory('All Categories')}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="gap-2">
                Search: "{searchQuery}"
                <button 
                  onClick={() => setSearchQuery('')}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isWishlisted={wishlistedItems.includes(product.id)}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
