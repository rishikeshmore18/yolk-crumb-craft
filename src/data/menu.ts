export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "croissants" | "savory" | "scones" | "rolls" | "bread" | "desserts" | "cookies" | "drinks";
  image?: string;
  tags?: Array<"vegetarian" | "nuts" | "savory" | "sweet" | "limited" | "preorder" | "seasonal">;
};

import butter from "@/assets/butter-croissant.jpg";
import almond from "@/assets/almond-croissant.jpg";
import choc from "@/assets/chocolate-croissant.jpg";
import fancy from "@/assets/fancy-croissant.jpg";
import caprese from "@/assets/caprese-croissant.jpg";
import chorizo from "@/assets/chorizo-scone.jpg";
import cinnamon from "@/assets/cinnamon-roll.jpg";
import bread from "@/assets/artisan-bread.jpg";
import basque from "@/assets/basque-cheesecake.jpg";
import cookie from "@/assets/cookie.jpg";
import latte from "@/assets/latte.jpg";

export const MENU: MenuItem[] = [
  { id: "butter", name: "Classic Butter Croissant", description: "All-butter dough, laminated over three days for open, airy layers.", price: "$4.75", category: "croissants", image: butter, tags: ["vegetarian", "sweet"] },
  { id: "almond", name: "Almond Croissant", description: "Twice-baked with house frangipane and toasted almond slices.", price: "$5.75", category: "croissants", image: almond, tags: ["vegetarian", "nuts", "sweet"] },
  { id: "choc", name: "Chocolate Croissant", description: "Pain au chocolat with two batons of dark Valrhona.", price: "$5.25", category: "croissants", image: choc, tags: ["vegetarian", "sweet"] },
  { id: "capr", name: "Caprese Croissant", description: "Fresh mozzarella, roasted tomato, basil, cracked pepper.", price: "$6.50", category: "savory", image: caprese, tags: ["vegetarian", "savory"] },
  { id: "cap", name: "Chocolate • Almond • Pistachio • Raspberry", description: "Four-flavor laminated pastry — our most beloved indulgence.", price: "$7.50", category: "croissants", image: fancy, tags: ["nuts", "sweet", "limited"] },
  { id: "seasonal-croi", name: "Seasonal Filled Croissant", description: "Rotating fillings inspired by the New England season.", price: "$6.25", category: "croissants", image: butter, tags: ["seasonal", "sweet", "preorder"] },
  { id: "chorizo", name: "Chorizo Cheddar Scone", description: "Buttery scone with smoky chorizo and sharp aged cheddar.", price: "$5.25", category: "scones", image: chorizo, tags: ["savory"] },
  { id: "sweet-scone", name: "Seasonal Sweet Scone", description: "Rotating fruit and citrus — always tender, never dry.", price: "$4.75", category: "scones", image: chorizo, tags: ["vegetarian", "sweet", "seasonal"] },
  { id: "cinn", name: "Cinnamon Roll", description: "Soft laminated coil with brown butter glaze and ceylon cinnamon.", price: "$5.75", category: "rolls", image: cinnamon, tags: ["vegetarian", "sweet"] },
  { id: "loaf", name: "Country Loaf", description: "Naturally leavened hearth loaf, blistered crust, custardy crumb.", price: "$9.00", category: "bread", image: bread, tags: ["vegetarian", "preorder"] },
  { id: "artisan", name: "Artisan Bread", description: "Daily-changing shape — check the counter for today's bake.", price: "$8.50", category: "bread", image: bread, tags: ["vegetarian"] },
  { id: "seasonal-bread", name: "Seasonal Bread", description: "Grains, seeds, and additions that shift with the harvest.", price: "$10.00", category: "bread", image: bread, tags: ["vegetarian", "seasonal", "preorder"] },
  { id: "basque", name: "Basque Cheesecake", description: "Deeply caramelized top, silky center, whole slice or by the cake.", price: "$7.25", category: "desserts", image: basque, tags: ["vegetarian", "sweet"] },
  { id: "cookie", name: "Chocolate Chip Cookie", description: "Brown butter, chopped dark chocolate, flake salt.", price: "$3.75", category: "cookies", image: cookie, tags: ["vegetarian", "sweet"] },
  { id: "cake-slice", name: "Seasonal Cake Slice", description: "A single perfect slice from today's cake.", price: "$6.50", category: "desserts", image: basque, tags: ["vegetarian", "sweet", "seasonal", "limited"] },
  { id: "tart", name: "Tart / Pastry Special", description: "The pastry team's rotating experiment of the week.", price: "$6.75", category: "desserts", image: fancy, tags: ["vegetarian", "sweet", "limited"] },
  { id: "coffee", name: "Drip Coffee", description: "Small-roaster beans, rotating single origin.", price: "$3.50", category: "drinks", image: latte },
  { id: "vanilla", name: "Vanilla Latte", description: "Espresso, steamed milk, house vanilla syrup.", price: "$5.25", category: "drinks", image: latte },
  { id: "tea", name: "Tea", description: "Loose-leaf selection, ask the counter for the day's list.", price: "$4.00", category: "drinks", image: latte },
];

export const CATEGORIES: Array<{ id: MenuItem["category"] | "all"; label: string }> = [
  { id: "all", label: "All" },
  { id: "croissants", label: "Croissants" },
  { id: "savory", label: "Savory" },
  { id: "scones", label: "Scones" },
  { id: "rolls", label: "Cinnamon Rolls" },
  { id: "bread", label: "Artisan Bread" },
  { id: "desserts", label: "Cakes & Desserts" },
  { id: "cookies", label: "Cookies" },
  { id: "drinks", label: "Coffee & Tea" },
];

export const HOURS = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "Closed" },
  { day: "Wednesday", hours: "7:00 AM – 3:00 PM" },
  { day: "Thursday", hours: "7:00 AM – 3:00 PM" },
  { day: "Friday", hours: "7:00 AM – 3:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 3:00 PM" },
  { day: "Sunday", hours: "8:00 AM – 3:00 PM" },
];

export const BUSINESS = {
  name: "Yolk & Crumb",
  tagline: "An Artisan Bakeshop",
  address: "1130 Pleasant St, Worcester, MA 01602",
  phone: "(508) 304-1115",
  phoneHref: "tel:+15083041115",
  neighborhood: "Tatnuck Square, Worcester",
  instagram: "https://www.instagram.com/yolk_and_crumb/?hl=en#",
  mapUrl: "https://maps.google.com/?q=1130+Pleasant+St,+Worcester,+MA+01602",
};
