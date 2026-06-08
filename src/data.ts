export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Where to Buy', href: '#where-to-buy' },
  { name: 'News', href: '#news' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export type ProductInfo = {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  colSpan: string;
  rowSpan: string;
  history: string;
  nutrition: { calories: string; carbs: string; protein: string; fat: string };
};

export const products: ProductInfo[] = [
  {
    name: "Artisan Breads",
    subtitle: "Daily Fresh Loaves",
    description:
      "Sourdough, baguettes, and country loaves crafted with our 40-year-old starter.",
    image:
      "https://images.unsplash.com/photo-1598428138760-4c7faad1428c?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
    history:
      "Originating from our founder's travels in rural France, our sourdough starter has been nurtured since 1980. This living culture provides the complex, tangy flavor profile and perfect crumb structure found in every artisan loaf we bake.",
    nutrition: { calories: "250", carbs: "48g", protein: "9g", fat: "2g" },
  },
  {
    name: "Fine Pastries",
    subtitle: "Viennoiserie & Tarts",
    description:
      "Buttery croissants, fruit tarts, and delicate eclairs baked to golden perfection.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
    history:
      "Our pastry chefs trained in classic Viennoiserie techniques to bring authentic European flakiness to local tables. We use exclusively imported high-fat butter to ensure the perfect lamination in every bite.",
    nutrition: { calories: "380", carbs: "38g", protein: "6g", fat: "21g" },
  },
  {
    name: "Premium Biscuits",
    subtitle: "Cookie Assortments",
    description:
      "Assorted cookies infused with premium chocolate, nuts, and local flavors.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
    history:
      "A re-imagining of our grandmother's original recipes. What started as simple afternoon treats have evolved into gourmet assortments utilizing single-origin cacao and locally sourced nuts.",
    nutrition: { calories: "420", carbs: "55g", protein: "5g", fat: "22g" },
  },
  {
    name: "Heritage Hopia",
    subtitle: "Filipino Classics",
    description:
      "Flaky crusts filled with imported sweet mung bean and savory pork blends.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
    history:
      "The product that built Marby. Our Hopia recipe remains proudly unchanged since 1974, respecting the traditional Chinese-Filipino baking heritage with paper-thin flaky crusts and a dense, deeply flavorful filling.",
    nutrition: { calories: "310", carbs: "45g", protein: "7g", fat: "12g" },
  },
  {
    name: "Frozen Ready-to-Bake",
    subtitle: "Convenience Retail",
    description:
      "Professional grade frozen doughs for your own kitchen or café.",
    image:
      "https://images.unsplash.com/photo-1587848483758-1ab565de959a?q=80&w=800&auto=format&fit=crop",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
    history:
      "Developed in response to our B2B partners' needs for consistency and scale. We flash-freeze our premium doughs at the exact peak of proofing, locking in the quality so you can bake fresh on demand.",
    nutrition: { calories: "280", carbs: "44g", protein: "8g", fat: "6g" },
  },
];

export const newsItems = [
  {
    category: "New Product",
    title: "Introducing the Premium Artisan Sourdough Line",
    description: "After months of refining our starter, we are proud to introduce a line of sourdough perfectly balanced for the local palate. Available for wholesale partners.",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bfbc8?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "CSR Initiative",
    title: "Marby Cares: Feeding 10,000 Families",
    description: "Our annual holiday pledge continues. Learn how our production surplus is being directed to communities in need across Metro Manila.",
    date: "Nov 05, 2023",
    image: "https://images.unsplash.com/photo-1593113565637-517175af0b0d?q=80&w=600&auto=format&fit=crop"
  },
  {
    category: "Corporate",
    title: "Expanding Our Distribution Footprint in Visayas",
    description: "We are officially opening our new state-of-the-art baking facility in Cebu, ensuring fresher deliveries to our southern retail partners.",
    date: "Dec 01, 2023",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=600&auto=format&fit=crop"
  }
];
