export interface ProductVolume {
  size: string;
  price: number;
  originalPrice: number;
  packaging: string;
}

export type ProductCategory = 'oil' | 'ghee';

export interface Product {
  id: string;
  name: string;
  hindiName: string;
  slug: string;
  category: ProductCategory;
  availableTypes?: string; // e.g. 'लकड़ी का कोल्हू (Wood Pressed) व कच्ची घानी (Cold Pressed)' or 'गाय का बिलोना' / 'भैंस का बिलोना'
  sourcingNote?: string; // e.g. 'राजस्थान की 100% सॉर्टेक्स साफ सरसों'
  shortDesc: string;
  description: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
  image: string;
  additionalImages?: string[];
  volumes: ProductVolume[];
  benefits: string[];
  processHighlight: string;
  smokePoint?: string;
  nutritionalInfo?: {
    energy?: string;
    fat?: string;
    saturatedFat?: string;
    mufa?: string;
    pufa?: string;
    cholesterol?: string;
    vitamins?: string;
  };
  extractionDetails?: {
    method?: string;
    seedOrigin?: string;
    type?: string;
  };
}

export interface CartItem {
  product: Product;
  selectedVolume: ProductVolume;
  quantity: number;
}

export interface CustomerOrder {
  orderId: string;
  date: string;
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  deliveryType: 'standard' | 'delhi-express';
  paymentMethod: 'upi' | 'cod' | 'card';
  items: CartItem[];
  subtotal: number;
  discount: number;
  shippingFee: number;
  total: number;
  status: 'Confirmed' | 'Processing' | 'Shipped';
}
