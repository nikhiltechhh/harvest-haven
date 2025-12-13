import { Product } from "@/types/product";

export const products: Product[] = [
  // Fruits & Vegetables
  { id: "1", name: "Mangoes - Banginapalli", category: "Fruits & Vegetables", pricePerKg: 100, image: "/images/mango-banginapalli.jpg" },
  { id: "2", name: "Mangoes - Dasari", category: "Fruits & Vegetables", pricePerKg: 150, image: "/images/mango-dasari.jpg" },
  { id: "3", name: "Mangoes - Kesari", category: "Fruits & Vegetables", pricePerKg: 150, image: "/images/mango-kesari.jpg" },
  { id: "4", name: "Mangoes - Himayath", category: "Fruits & Vegetables", pricePerKg: 200, image: "/images/mango-himayath.jpg" },
  { id: "5", name: "Mangoes - Sundari", category: "Fruits & Vegetables", pricePerKg: 150, image: "/images/mango-sundari.jpg" },
  { id: "6", name: "Mangoes - Pedda Rasalu", category: "Fruits & Vegetables", pricePerKg: 150, image: "/images/mango-rasalu.jpg" },
  { id: "7", name: "Mangoes - Alphonso", category: "Fruits & Vegetables", pricePerKg: 200, image: "/images/mango-alphonso.jpg" },
  
  // Chicken & Eggs
  { id: "8", name: "Brown Eggs - Farm Fresh Naatu Kodi Gudlu", category: "Chicken & Eggs", pricePerKg: null, pricePerUnit: "₹20 per piece", image: "/images/brown-eggs.jpg" },
  
  // Natural Sweeteners
  { id: "9", name: "Multiflower Honey", category: "Natural Sweeteners", pricePerKg: 600, image: "/images/multiflower-honey.jpg" },
  { id: "10", name: "Putta Thene (Tree Bark Honey)", category: "Natural Sweeteners", pricePerKg: 1200, image: "/images/tree-bark-honey.jpg" },
  
  // Masala (Spices)
  { id: "11", name: "Turmeric Powder", category: "Masala (Spices)", pricePerKg: 430, image: "/images/turmeric-powder.jpg" },
  { id: "12", name: "Red Chilli Powder", category: "Masala (Spices)", pricePerKg: 490, image: "/images/red-chilli-powder.jpg" },
  { id: "13", name: "Coriander Powder", category: "Masala (Spices)", pricePerKg: 300, image: "/images/coriander-powder.jpg" },
  { id: "14", name: "Cumin Seeds", category: "Masala (Spices)", pricePerKg: null, image: "/images/cumin-seeds.jpg" },
  { id: "15", name: "Black Pepper", category: "Masala (Spices)", pricePerKg: 1500, image: "/images/black-pepper.jpg" },
  { id: "16", name: "White Pepper", category: "Masala (Spices)", pricePerKg: null, image: "/images/white-pepper.jpg" },
  { id: "17", name: "Cloves", category: "Masala (Spices)", pricePerKg: 2200, image: "/images/cloves.jpg" },
  { id: "18", name: "Cinnamon", category: "Masala (Spices)", pricePerKg: 800, image: "/images/cinnamon.jpg" },
  { id: "19", name: "Cardamom (Elachi)", category: "Masala (Spices)", pricePerKg: 6000, image: "/images/cardamom.jpg" },
  { id: "20", name: "Coriander Seeds", category: "Masala (Spices)", pricePerKg: 220, image: "/images/coriander-seeds.jpg" },
  
  // Edible Oils
  { id: "21", name: "Groundnut Oil (Cold-Pressed)", category: "Edible Oils", pricePerKg: 360, image: "/images/groundnut-oil.jpg" },
  { id: "22", name: "Coconut Oil", category: "Edible Oils", pricePerKg: 460, image: "/images/coconut-oil.jpg" },
  { id: "23", name: "Sunflower Oil", category: "Edible Oils", pricePerKg: 450, image: "/images/sunflower-oil.jpg" },
  { id: "24", name: "Mustard Oil", category: "Edible Oils", pricePerKg: 500, image: "/images/mustard-oil.jpg" },
  { id: "25", name: "Safflower Oil", category: "Edible Oils", pricePerKg: 430, image: "/images/safflower-oil.jpg" },
  { id: "26", name: "Sesame Oil", category: "Edible Oils", pricePerKg: 560, image: "/images/sesame-oil.jpg" },
  
  // Flours
  { id: "27", name: "Wheat Flour (Atta)", category: "Flours", pricePerKg: 120, image: "/images/wheat-flour.jpg" },
  { id: "28", name: "Ragi Flour", category: "Flours", pricePerKg: 110, image: "/images/ragi-flour.jpg" },
  { id: "29", name: "Jonna Flour", category: "Flours", pricePerKg: 110, image: "/images/jonna-flour.jpg" },
  
  // Rice & Rice Products
  { id: "30", name: "Sugar Free Rice", category: "Rice & Rice Products", pricePerKg: 120, image: "/images/sugar-free-rice.jpg" },
  
  // Millets
  { id: "31", name: "Foxtail Millet", category: "Millets", pricePerKg: 210, image: "/images/foxtail-millet.jpg" },
  { id: "32", name: "Little Millet", category: "Millets", pricePerKg: 250, image: "/images/little-millet.jpg" },
  { id: "33", name: "Kodo Millet", category: "Millets", pricePerKg: 210, image: "/images/kodo-millet.jpg" },
  { id: "34", name: "Barnyard Millet", category: "Millets", pricePerKg: 250, image: "/images/barnyard-millet.jpg" },
  { id: "35", name: "Pearl Millet (Bajra)", category: "Millets", pricePerKg: 80, image: "/images/pearl-millet.jpg" },
  { id: "36", name: "Finger Millet (Ragi)", category: "Millets", pricePerKg: 110, image: "/images/finger-millet.jpg" },
  { id: "37", name: "Sorghum (Jowar)", category: "Millets", pricePerKg: 110, image: "/images/sorghum.jpg" },
  
  // Dry Fruits & Nuts
  { id: "38", name: "Almonds", category: "Dry Fruits & Nuts", pricePerKg: 1200, image: "/images/almonds.jpg" },
  { id: "39", name: "Cashews", category: "Dry Fruits & Nuts", pricePerKg: 900, image: "/images/cashews.jpg" },
  { id: "40", name: "Walnuts", category: "Dry Fruits & Nuts", pricePerKg: 1500, image: "/images/walnuts.jpg" },
  { id: "41", name: "Pistachios", category: "Dry Fruits & Nuts", pricePerKg: 1500, image: "/images/pistachios.jpg" },
  { id: "42", name: "Sunflower Seeds", category: "Dry Fruits & Nuts", pricePerKg: 380, image: "/images/sunflower-seeds.jpg" },
  { id: "43", name: "Flax Seeds", category: "Dry Fruits & Nuts", pricePerKg: 320, image: "/images/flax-seeds.jpg" },
  { id: "44", name: "Dates", category: "Dry Fruits & Nuts", pricePerKg: 600, image: "/images/dates.jpg" },
  
  // Powders
  { id: "45", name: "Moringa Powder", category: "Powders", pricePerKg: null, image: "/images/moringa-powder.jpg" },
  { id: "46", name: "Onion Powder", category: "Powders", pricePerKg: null, image: "/images/onion-powder.jpg" },
  { id: "47", name: "Banana Powder", category: "Powders", pricePerKg: null, image: "/images/banana-powder.jpg" },
  { id: "48", name: "Tomato Powder", category: "Powders", pricePerKg: null, image: "/images/tomato-powder.jpg" },
  
  // Beverages
  { id: "49", name: "Coffee Instant Mix - Hazelnut", category: "Beverages", pricePerKg: 1800, image: "/images/coffee-hazelnut.jpg" },
  { id: "50", name: "Coffee Instant Mix - Caramel", category: "Beverages", pricePerKg: null, image: "/images/coffee-caramel.jpg" },
  { id: "51", name: "Coffee Instant Mix - Chocolate", category: "Beverages", pricePerKg: null, image: "/images/coffee-chocolate.jpg" },
  { id: "52", name: "Coffee Instant Mix - Mint", category: "Beverages", pricePerKg: null, image: "/images/coffee-mint.jpg" },
  { id: "53", name: "Tea - Natural Direct from Leaves", category: "Beverages", pricePerKg: 900, image: "/images/natural-tea.jpg" },
];

export const categories = [
  "All",
  "Fruits & Vegetables",
  "Chicken & Eggs",
  "Natural Sweeteners",
  "Masala (Spices)",
  "Edible Oils",
  "Flours",
  "Rice & Rice Products",
  "Millets",
  "Dry Fruits & Nuts",
  "Powders",
  "Beverages",
];

export const categoryIcons: Record<string, string> = {
  "All": "🌿",
  "Fruits & Vegetables": "🥭",
  "Chicken & Eggs": "🥚",
  "Natural Sweeteners": "🍯",
  "Masala (Spices)": "🌶️",
  "Edible Oils": "🫒",
  "Flours": "🌾",
  "Rice & Rice Products": "🍚",
  "Millets": "🌾",
  "Dry Fruits & Nuts": "🥜",
  "Powders": "🥣",
  "Beverages": "☕",
};
