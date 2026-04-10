export interface Compatibility {
  make: string;
  model: string;
  year: string;
  engine: string;
  transmission: string;
  trim: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  badge?: 'Sale' | 'New' | 'Popular';
  sku: string;
  brand: string;
  brandLogo: string;
  category?: string;
  details?: {
    weight: string;
    dimensions: string;
    manufacturer_part_number: string;
    ean_number: string;
    voltage?: string;
    fiting_position?: string;
    left_right_hand_drive?: string;
    operating_mode?: string;
  };
  features?: string[];
  description?: string;
  compatibility?: Compatibility[];
  isFeatured?: boolean;
  isBestDeal?: boolean;
  isMoreToLove?: boolean;
  categoryName?: string;
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: 'ridex-295w0003',
    name: 'RIDEX 295W0003 Wiper Motor',
    brand: 'RIDEX',
    price: 55.25,
    originalPrice: 75.59,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-124-img-1.webp',
    rating: 4.8,
    reviews: 124,
    badge: 'Sale' as const,
    sku: '295W0003',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/ridex.svg',
    details: {
      weight: '3 kg',
      dimensions: '23.5 × 55 × 32 cm',
      manufacturer_part_number: '295W0003',
      ean_number: '4059191242054',
      voltage: '12V',
      fiting_position: 'Front',
      left_right_hand_drive: 'for left-hand drive vehicles',
      operating_mode: 'Electric'
    },
    features: [
      'Direct replacement for original wiper motor',
      'High-quality internal components for long life',
      'Precision-engineered for smooth, quiet operation',
      'Electric operating mode (12V)',
      'Excellent value for money and durability'
    ],
    description: `The RIDEX 295W0003 Wiper Motor is an essential component of your vehicle's window cleaning system, designed to provide consistent and powerful movement for your wiper blades. Engineered to original equipment specifications, this motor ensures a perfect fit and reliable performance in all weather conditions.`
  },
  {
    id: 'ep1',
    name: 'FEBI BILSTEIN 31110 Engine oil cooler',
    sku: '31110',
    brand: 'FEBI',
    price: 23.65,
    rating: 5,
    reviews: 120,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-27-img-1-300x300.webp',
    badge: 'Sale',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/febi.svg',
    category: 'Engine parts',
    description: 'High performance engine oil cooler for European vehicles.',
    details: { weight: '1.2 kg', dimensions: '15 × 12 × 5 cm', manufacturer_part_number: '31110', ean_number: '4027816311102' }
  },
  {
    id: 'ep2',
    name: 'RIDEX 469O0075 Engine oil cooler',
    sku: '469O0075',
    brand: 'RIDEX',
    price: 53.68,
    rating: 4,
    reviews: 85,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-26-img-1-300x300.webp',
    badge: 'Popular',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/bosch.svg',
    category: 'Engine parts',
    description: 'Durable engine oil cooler with superior heat dissipation.',
    details: { weight: '1.5 kg', dimensions: '18 × 14 × 6 cm', manufacturer_part_number: '469O0075', ean_number: '4059191242047' }
  },
  {
    id: 'ep3',
    name: 'BOSCH 0 258 986 615 Lambda Sensor',
    sku: '0F258R986S615',
    brand: 'BOSCH',
    price: 43.90,
    rating: 5,
    reviews: 210,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-25-img-1-300x300.webp',
    badge: 'Sale',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/bosch.svg',
    category: 'Engine parts',
    description: 'Universal lambda sensor for optimal fuel combustion and reduced emissions.',
    details: { weight: '0.3 kg', dimensions: '10 × 2 × 2 cm', manufacturer_part_number: '0F258R986S615', ean_number: '3165143301052' }
  },
  {
    id: 'ep4',
    name: 'RIDEX 3922L0210 Lambda Sensor',
    sku: '3922L0210',
    brand: 'RIDEX',
    price: 27.04,
    rating: 5,
    reviews: 340,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-24-img-1-300x300.webp',
    badge: 'New',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/ridex.svg',
    category: 'Engine parts',
    description: 'Precision engineered lambda sensor for clean emissions performance.',
    details: { weight: '0.25 kg', dimensions: '8 × 2 × 2 cm', manufacturer_part_number: '3922L0210', ean_number: '4059191242030' },
    categoryName: 'Engine parts',
    isFeatured: true
  },
  // Best Deals
  {
    id: "deal-1",
    name: "YATO YT-04382 Screwdriver Bit",
    sku: "YT-04382",
    price: 1.85,
    rating: 4,
    reviews: 12,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-46-img-1-300x300.webp",
    badge: "Sale",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/yato.svg",
    brand: "YATO",
    isBestDeal: true
  },
  {
    id: "deal-2",
    name: "VICMA Relay, start repeater",
    sku: "INT-H1940-08",
    price: 14.36,
    rating: 5,
    reviews: 8,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-45-img-1-300x300.webp",
    badge: "Popular",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/vicma.svg",
    brand: "VICMA",
    isBestDeal: true
  },
  {
    id: "deal-3",
    name: "VEMO V20-61-0001 Heater matrix",
    sku: "V20-61-0001",
    price: 65.06,
    rating: 4,
    reviews: 5,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-44-img-1-300x300.webp",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/vemo.svg",
    brand: "VEMO",
    isBestDeal: true
  },
  {
    id: "deal-4",
    name: "VDO 5WK97004Z Mass air flow sensor",
    sku: "5WK97004Z",
    price: 79.33,
    rating: 5,
    reviews: 21,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-43-img-1-300x300.webp",
    badge: "New",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/vdo.svg",
    brand: "VDO",
    isBestDeal: true
  },
  {
    id: "deal-5",
    name: "VALEO 826712 Protectiv Liquid",
    sku: "826712",
    price: 12.45,
    rating: 4,
    reviews: 45,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-76-img-1-300x300.webp",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/valeo.svg",
    brand: "VALEO",
    isBestDeal: true
  },
  {
    id: "deal-6",
    name: "AMCO AdBlue Urea Solution",
    sku: "ADBLUE-10L",
    price: 18.20,
    rating: 5,
    reviews: 130,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-75-img-1-300x300.webp",
    badge: "Sale",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/amco.svg",
    brand: "AMCO",
    isBestDeal: true
  },
  // More to Love
  {
    id: "mtl-1",
    name: "FEBI BILSTEIN 26924 Control Arm- / Trailing Arm Bush",
    sku: "26924",
    price: 18.25,
    rating: 4,
    reviews: 15,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-31-img-1-300x300.webp",
    badge: "Sale",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/febi.svg",
    brand: "FEBI",
    isMoreToLove: true
  },
  {
    id: "mtl-2",
    name: "FANFARO ATE III Automatic Transmission Fluid",
    sku: "ATF-III-1L",
    price: 9.99,
    rating: 5,
    reviews: 42,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-41-img-1-300x300.webp",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/moje.svg",
    brand: "FANFARO",
    isMoreToLove: true
  },
  {
    id: "mtl-3",
    name: "RIDEX 407W0112 Engine oil cooler",
    sku: "407W0112",
    price: 45.30,
    rating: 0,
    reviews: 0,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-21-img-1-300x300.webp",
    badge: "Sale",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/ridex.svg",
    brand: "RIDEX",
    isMoreToLove: true
  },
  {
    id: "mtl-4",
    name: "SW-Stahl 01477L-2 Lambda Sensor socket",
    sku: "01477L-2",
    price: 12.80,
    rating: 4,
    reviews: 6,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-40-img-1-300x300.webp",
    badge: "New",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/sw-stahl.svg",
    brand: "SW-Stahl",
    isMoreToLove: true
  },
  {
    id: "mtl-5",
    name: "BOSCH 0 258 017 025 Lambda Sensor",
    sku: "0258017025",
    price: 89.45,
    rating: 5,
    reviews: 88,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-39-img-1-300x300.webp",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/bosch.svg",
    brand: "BOSCH",
    isMoreToLove: true
  },
  {
    id: "mtl-6",
    name: "FEBI BILSTEIN 06161 Hydraulic Oil",
    sku: "06161",
    price: 13.47,
    rating: 4,
    reviews: 280,
    image: "https://enovathemes.com/mobex/wp-content/uploads/product-78-img-1-300x300.webp",
    badge: "Sale",
    brandLogo: "https://enovathemes.com/mobex/wp-content/uploads/febi.svg",
    brand: "FEBI",
    isMoreToLove: true
  },
  {
    id: 'ridex-295w0016',
    name: 'RIDEX 295W0016 Wiper Motor',
    brand: 'RIDEX',
    price: 31.29,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-127-img-1.webp',
    rating: 0,
    reviews: 0,
    badge: 'Sale' as const,
    sku: '295W0016',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/ridex.svg'
  },
  {
    id: 'ridex-300w0031',
    name: 'RIDEX 300W0031 Wiper Linkage',
    brand: 'RIDEX',
    price: 28.59,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-31-img-1.webp',
    rating: 0,
    reviews: 0,
    badge: 'Sale' as const,
    sku: '300W0031',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/ridex.svg'
  },
  {
    id: 'ridex-300w0011',
    name: 'RIDEX 300W0011 Wiper Linkage',
    brand: 'RIDEX',
    price: 16.69,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-11-img-1.webp',
    rating: 0,
    reviews: 0,
    badge: 'Sale' as const,
    sku: '300W0011',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/ridex.svg'
  },
  {
    id: 'denso-hybrid-dur-060r',
    name: 'DENSO Hybrid DUR-060R Wiper Blade',
    brand: 'DENSO',
    price: 17.29,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-106-img-1.webp',
    rating: 0,
    reviews: 0,
    badge: 'Sale' as const,
    sku: 'DUR-060R',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/ridex.svg'
  },
  {
    id: 'valeo-574322',
    name: 'VALEO 574322 Wiper Blades',
    brand: 'VALEO',
    price: 22.50,
    originalPrice: 30.00,
    image: 'https://enovathemes.com/mobex/wp-content/uploads/product-123-img-1.webp',
    rating: 4,
    reviews: 35,
    badge: 'Popular' as const,
    sku: '574322',
    brandLogo: 'https://enovathemes.com/mobex/wp-content/uploads/ridex.svg'
  }
];
