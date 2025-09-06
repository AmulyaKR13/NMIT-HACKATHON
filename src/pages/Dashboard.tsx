import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  User, 
  Package, 
  ShoppingCart, 
  Heart, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Star,
  TrendingUp
} from 'lucide-react';
import { mockProducts, categories } from '@/data/mockProducts';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userProducts] = useState(mockProducts.slice(0, 3)); // Mock user's products
  const [wishlist] = useState(mockProducts.slice(3, 6)); // Mock wishlist
  const [orders] = useState([
    { id: '1', date: '2024-01-15', total: 45.99, status: 'delivered', items: 2 },
    { id: '2', date: '2024-01-10', total: 29.50, status: 'shipped', items: 1 },
    { id: '3', date: '2024-01-05', total: 67.25, status: 'processing', items: 3 }
  ]);
  const { toast } = useToast();

  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Product created!",
      description: "Product management requires Supabase integration to persist data.",
    });
    // Reset form
    setNewProduct({ title: '', description: '', price: '', category: '', image: '' });
  };

  const handleDeleteProduct = (id: string) => {
    toast({
      title: "Product deleted",
      description: "Product management requires Supabase integration.",
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your sustainable marketplace experience</p>
        </div>
        <Button className="bg-gradient-primary hover:bg-primary-hover mt-4 md:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Create Listing
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">My Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28</div>
                <p className="text-xs text-muted-foreground">+5 from last week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">+1 this week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$842</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <ShoppingCart className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">New order received</p>
                    <p className="text-sm text-muted-foreground">Bamboo Water Bottle - $24.99</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-accent/10 rounded-full">
                    <Heart className="h-4 w-4 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Product added to wishlist</p>
                    <p className="text-sm text-muted-foreground">Solar Power Bank</p>
                  </div>
                  <span className="text-sm text-muted-foreground">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Product</CardTitle>
              <CardDescription>Add a new eco-friendly product to your store</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateProduct} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product-title">Product Title</Label>
                    <Input
                      id="product-title"
                      value={newProduct.title}
                      onChange={(e) => setNewProduct({...newProduct, title: e.target.value})}
                      placeholder="e.g., Eco-friendly Water Bottle"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="product-price">Price ($)</Label>
                    <Input
                      id="product-price"
                      type="number"
                      step="0.01"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="product-category">Category</Label>
                  <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.filter(cat => cat !== 'All Categories').map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="product-description">Description</Label>
                  <Textarea
                    id="product-description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    placeholder="Describe your eco-friendly product..."
                    required
                  />
                </div>
                <Button type="submit" className="bg-gradient-primary hover:bg-primary-hover">
                  Create Product
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Products</CardTitle>
              <CardDescription>Manage your existing product listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userProducts.map((product) => (
                  <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-md" />
                    <div className="flex-1">
                      <h3 className="font-medium">{product.title}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                        <Badge variant="secondary">${product.price}</Badge>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View your past purchases and current orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Order #{order.id}</h3>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                      <p className="text-sm">{order.items} items</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${order.total}</p>
                      <Badge 
                        variant={order.status === 'delivered' ? 'default' : order.status === 'shipped' ? 'secondary' : 'outline'}
                      >
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Wishlist Tab */}
        <TabsContent value="wishlist">
          <Card>
            <CardHeader>
              <CardTitle>Your Wishlist</CardTitle>
              <CardDescription>Products you've saved for later</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {wishlist.map((product) => (
                  <div key={product.id} className="border rounded-lg p-4">
                    <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-md mb-3" />
                    <h3 className="font-medium mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary">${product.price}</span>
                      <Button size="sm" className="bg-gradient-primary hover:bg-primary-hover">
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">John Doe</h3>
                  <p className="text-muted-foreground">john.doe@example.com</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Change Avatar
                  </Button>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" defaultValue="John" />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" defaultValue="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div>
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself and your sustainability journey..." />
                </div>
                <Button className="bg-gradient-primary hover:bg-primary-hover">
                  Save Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;