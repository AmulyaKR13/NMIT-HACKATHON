import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  isWishlisted?: boolean;
  onAddToCart: (id: string) => void;
  onToggleWishlist: (id: string) => void;
}

const ProductCard = ({
  id,
  title,
  description,
  price,
  category,
  rating,
  reviews,
  image,
  isWishlisted = false,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">
          {category}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 h-8 w-8 ${
            isWishlisted 
              ? 'text-red-500 hover:text-red-600' 
              : 'text-white hover:text-red-500'
          } bg-black/20 hover:bg-black/40 backdrop-blur-sm`}
          onClick={() => onToggleWishlist(id)}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1 mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium ml-1">{rating}</span>
            <span className="text-sm text-muted-foreground ml-1">({reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${price}</span>
          <Button 
            size="sm" 
            className="bg-gradient-primary hover:bg-primary-hover"
            onClick={() => onAddToCart(id)}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;