import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'yellow-mustard-oil',
    name: 'Pure Wood-Pressed Yellow Mustard Oil',
    hindiName: 'पीली सरसों का शुद्ध तेल (कोल्हू से निकाला)',
    slug: 'yellow-mustard-oil',
    category: 'mustard-oils',
    shortDesc: 'Cold pressed in traditional wooden Kolhu (Lakdi Ki Ghani). Mild, pungent aroma with high natural antioxidants.',
    description: 'Extracted slowly in our authentic wooden Kolhu (Lakdi Ki Ghani) in front of your eyes at less than 38°C. Made exclusively from select Rajasthani native yellow mustard seeds (Pili Sarson). Yellow mustard oil is naturally sweeter, milder, and retains all vital omega-3 fatty acids without the overpowering burn of chemical-refined oils. Ideal for daily Indian curries, pickle preserving, and deep frying.',
    price: 360,
    originalPrice: 450,
    rating: 4.9,
    reviewsCount: 384,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/yellow_mustard.jpg',
    additionalImages: ['/images/process_live.jpg', '/images/hero.jpg'],
    volumes: [
      { size: '500ml', price: 190, originalPrice: 240, packaging: 'Dark Glass Bottle' },
      { size: '1 Liter', price: 360, originalPrice: 450, packaging: 'Premium Food-Grade Glass Bottle' },
      { size: '2 Liters', price: 690, originalPrice: 850, packaging: 'Leak-Proof Steel/Tin Container' },
      { size: '5 Liters', price: 1650, originalPrice: 2100, packaging: 'Heritage Food-Grade Eco Tin' }
    ],
    benefits: [
      'Heart friendly: Rich in Monounsaturated Fatty Acids (MUFA) and Omega-3 & 6',
      'Extracted at <38°C: Zero heat damage, preserving natural Vitamin E & Allyl Isothiocyanate',
      'Mild Golden Pungency: Perfect appetizing aroma for daily cooking, sabzis & dals',
      'Zero chemicals, zero palm oil, zero argemone adulteration'
    ],
    processHighlight: 'Cold-pressed at 14 RPM in traditional Marachekku / Lakdi Ghani without any chemical refining or high-temperature heating.',
    smokePoint: '250°C (High Smoke Point - ideal for Indian tadka and frying)',
    nutritionalInfo: {
      energy: '884 kcal / 100g',
      fat: '100g',
      saturatedFat: '11.8g',
      mufa: '65.2g',
      pufa: '23g',
      cholesterol: '0mg',
      vitamins: 'Natural Vitamin E (34mg), Vitamin K'
    },
    extractionDetails: {
      method: 'Lakdi Ki Ghani (Traditional Wooden Cold Press)',
      temperature: 'Always kept below 38°C',
      rpm: '12 - 14 RPM (Slow Rotation)',
      seedOrigin: 'Single-source Organic Farms, Alwar (Rajasthan)',
      woodType: 'Waghai & Neem Wood Pestle'
    },
    labReportSummary: {
      purity: '100% Pure Virgin Grade',
      adulteration: 'Negative for Mineral Oil & Palm Oil',
      argemone: 'Negative (TLC method)',
      freeFattyAcid: '0.42% (Standard < 1.5%)'
    }
  },
  {
    id: 'black-mustard-oil',
    name: 'Traditional Wood-Pressed Black Mustard Oil',
    hindiName: 'काली सरसों का शुद्ध तेल (कच्ची घानी)',
    slug: 'black-mustard-oil',
    category: 'mustard-oils',
    shortDesc: 'Authentic robust, zesty aroma. Slow-pressed for traditional North Indian pickles, winter body massage & bold tadka.',
    description: 'The quintessential North Indian kitchen soul. Sourced from high-pungency black mustard seeds (Kali Sarson) crushed in our wooden Kolhu. The slow wood pressing retains natural sinigrin which releases the quintessential pungent, eye-watering sharpness true mustard connoisseurs crave. Perfect for achaar (pickles), fish curries, and comforting infant/adult joint massages.',
    price: 340,
    originalPrice: 420,
    rating: 4.8,
    reviewsCount: 298,
    inStock: true,
    featured: true,
    bestSeller: false,
    image: '/images/black_mustard.jpg',
    additionalImages: ['/images/process_live.jpg'],
    volumes: [
      { size: '500ml', price: 180, originalPrice: 220, packaging: 'Dark Amber Glass Bottle' },
      { size: '1 Liter', price: 340, originalPrice: 420, packaging: 'Heavy Glass Bottle' },
      { size: '2 Liters', price: 650, originalPrice: 800, packaging: 'Metal Tin' },
      { size: '5 Liters', price: 1550, originalPrice: 1950, packaging: 'Traditional 5L Metal Can' }
    ],
    benefits: [
      'High natural pungency: Boosts digestion and stimulates gastric juices',
      'Strong antimicrobial & antifungal properties: Keeps pickles fresh for years',
      'Traditional Ayurvedic massage: Relieves joint stiffness, winter cold, and muscular fatigue',
      'Raw, unrefined, and sediment-filtered through cotton cloth only'
    ],
    processHighlight: 'Extracted slowly drop-by-drop in front of your eyes. Zero artificial essence or colorants added.',
    smokePoint: '254°C',
    nutritionalInfo: {
      energy: '884 kcal / 100g',
      fat: '100g',
      saturatedFat: '12g',
      mufa: '60g',
      pufa: '28g',
      cholesterol: '0mg',
      vitamins: 'Rich in Tocopherols (Vitamin E)'
    },
    extractionDetails: {
      method: 'Lakdi Ka Kolhu (Wood Pestle Churning)',
      temperature: '< 36°C',
      rpm: '14 RPM',
      seedOrigin: 'Bharatpur & Morena certified farms',
      woodType: 'Sacred Neem & Babool wood'
    },
    labReportSummary: {
      purity: '100% Single Origin Black Mustard',
      adulteration: 'Zero chemical residue',
      argemone: 'Negative',
      freeFattyAcid: '0.38%'
    }
  },
  {
    id: 'vedic-a2-bilona-gir-cow-ghee',
    name: 'Vedic A2 Gir Cow Bilona Desi Ghee',
    hindiName: 'शुद्ध वैदिक A2 गिर गाय बिलोना देसी घी (मंथन विधि)',
    slug: 'vedic-a2-bilona-gir-cow-ghee',
    category: 'bilona-ghee',
    shortDesc: 'Prepared using ancient 5-samskara Bilona method. Cultured curd hand-churned in clay pots. Golden, granular & aromatic.',
    description: 'True Ayurvedic liquid gold. Our A2 Desi Cow Ghee is crafted following the authentic 5000-year-old Vedic Bilona method. Free-grazing desi Gir cows milk is boiled on slow cow dung wood fire, naturally set into whole curd in clay pots, and churned bidirectionally with a wooden mathani to extract fresh makkhan (cultured butter). The butter is then slowly simmered to yield fragrant, golden, danedar (granular) A2 Ghee that nourishes body, brain, and soul.',
    price: 1450,
    originalPrice: 1800,
    rating: 5.0,
    reviewsCount: 512,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/bilona_ghee.jpg',
    additionalImages: ['/images/bilona_tradition.jpg', '/images/hero.jpg'],
    volumes: [
      { size: '250ml', price: 420, originalPrice: 520, packaging: 'Heritage Glass Jar' },
      { size: '500ml', price: 780, originalPrice: 950, packaging: 'Heritage Glass Jar' },
      { size: '1 Liter', price: 1450, originalPrice: 1800, packaging: 'Sealed Cork & Glass Jar' },
      { size: '2 Liters', price: 2800, originalPrice: 3500, packaging: 'Twin Glass Pack + Wooden Spoon' }
    ],
    benefits: [
      'Authentic A2 Beta-Casein Protein: Easily digestible even for lactose-sensitive individuals',
      'Granular (Danedar) Golden Texture: Naturally packed with Butyric Acid for superior gut health',
      'Ayurvedic Medhya Rasayana: Enhances memory (Smriti), intelligence (Dhi), and vitality (Ojas)',
      '100% Cultured Curd Butter (Makhan) source, never made from industrial cream separator'
    ],
    processHighlight: 'Handmade in small batches in earthen terracotta pots. 28-30 liters of pure A2 Gir Cow milk produces just 1 liter of this nectar.',
    smokePoint: '252°C (One of the safest healthy fats for high-heat cooking)',
    nutritionalInfo: {
      energy: '897 kcal / 100g',
      fat: '99.8g',
      saturatedFat: '62g (Short & Medium Chain Triglycerides)',
      mufa: '28g',
      pufa: '4g',
      cholesterol: '180mg / 100g',
      vitamins: 'Natural Vitamin A, D, E, K2 and CLA'
    },
    extractionDetails: {
      method: '5-Step Vedic Bilona Churning (Mathani Churn)',
      temperature: 'Slow simmered on traditional chulha',
      rpm: 'Slow manual/bi-directional churn',
      seedOrigin: 'Desi Gir Gaushalas with free-grazing grass feed',
      woodType: 'Natural Teak Wood Mathani'
    },
    labReportSummary: {
      purity: '100% Pure A2 Cow Ghee',
      adulteration: 'No vegetable fat or animal fat residue',
      argemone: 'Negative',
      freeFattyAcid: '0.18%'
    }
  },
  {
    id: 'pure-buffalo-bilona-desi-ghee',
    name: 'Pure Murrah Buffalo Bilona Desi Ghee',
    hindiName: 'शुद्ध मुर्राह भैंस का बिलोना देसी घी (ताज़ा माखन से निर्मित)',
    slug: 'pure-buffalo-bilona-desi-ghee',
    category: 'bilona-ghee',
    shortDesc: 'Rich, creamy and power-packed. Prepared by churning cultured Murrah buffalo curd in earthen matkas. Ideal for athletes.',
    description: 'Beloved by traditional Indian pehelwans (wrestlers) and growing children. Made from rich, thick A2-grade whole milk of pasture-grazed Murrah buffaloes. Slow-cooked from cultured curd butter, it has an irresistible creamy aroma, bright white-to-ivory granules, and extraordinary strength-giving nourishment.',
    price: 950,
    originalPrice: 1200,
    rating: 4.8,
    reviewsCount: 194,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/bilona_tradition.jpg',
    additionalImages: ['/images/bilona_ghee.jpg'],
    volumes: [
      { size: '500ml', price: 520, originalPrice: 650, packaging: 'Clay-Tone Glass Jar' },
      { size: '1 Liter', price: 950, originalPrice: 1200, packaging: 'Airtight Glass Jar' },
      { size: '2 Liters', price: 1850, originalPrice: 2300, packaging: 'Airtight Glass Jars (2x1L)' }
    ],
    benefits: [
      'Rich in Calcium, Phosphorus & Healthy Fats for bone density and physical stamina',
      'Deep, long-lasting satiety and stamina for athletes, growing teenagers & heavy workouts',
      'Prepared strictly from whole curd churning, not from industrial separated malai/cream',
      'Zero preservatives, zero chemicals, pure traditional aroma'
    ],
    processHighlight: 'Traditional curd fermentation followed by slow wood-fired clarification.',
    smokePoint: '250°C',
    nutritionalInfo: {
      energy: '900 kcal / 100g',
      fat: '99.9g',
      saturatedFat: '65g',
      mufa: '26g',
      pufa: '3.5g',
      cholesterol: '210mg / 100g',
      vitamins: 'High in natural Vitamin A & Minerals'
    },
    extractionDetails: {
      method: 'Clay Pot Bilona Mathani Churning',
      temperature: 'Gentle wood flame boiling',
      rpm: 'Manual bi-directional rotation',
      seedOrigin: 'Haryana Pasturelands Murrah Cattle',
      woodType: 'Neem Churner'
    },
    labReportSummary: {
      purity: '100% Pure Buffalo Milkfat',
      adulteration: 'Zero vegetable wax / palm stearin',
      argemone: 'Negative',
      freeFattyAcid: '0.22%'
    }
  },
  {
    id: 'pure-badam-rogan-almond-oil',
    name: '100% Pure Badam Rogan (Sweet Almond Oil)',
    hindiName: 'शुद्ध बादाम रोगन (100% मीठा बादाम तेल)',
    slug: 'pure-badam-rogan-almond-oil',
    category: 'wellness-rogan',
    shortDesc: 'Single-press extra-virgin sweet almond oil from Mamra & California almonds. Edible, therapeutic & nourishing.',
    description: 'Gold standard elixir for neural health, radiant skin, and silky hair. Extracted without heat from grade-A sweet almonds (Prunus Dulcis). Unlike cosmetic synthetic oils packed with mineral paraffin, DKW Badam Rogan is 100% pure food-grade. Drink 5-10 drops with warm milk at night for sharp memory and peaceful sleep, or apply topically for glowing skin and healthy scalp.',
    price: 490,
    originalPrice: 650,
    rating: 4.9,
    reviewsCount: 246,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/badam_rogan.jpg',
    additionalImages: ['/images/hero.jpg'],
    volumes: [
      { size: '50ml', price: 280, originalPrice: 350, packaging: 'Amber Glass Bottle with Glass Dropper' },
      { size: '100ml', price: 490, originalPrice: 650, packaging: 'Amber Glass Bottle with Precision Dropper' },
      { size: '200ml', price: 890, originalPrice: 1190, packaging: 'Luxury Dropper Pack' }
    ],
    benefits: [
      '100% Pure & Edible: Can be taken orally with warm milk for memory and immunity',
      'Rich in Natural Biotin & Vitamin E: Deeply repairs hair cuticles and prevents dry scalp',
      'Under-eye Dark Circle Eraser: Pure gentle nourishment for delicate skin',
      'Zero liquid paraffin, zero synthetic perfume, zero chemical additives'
    ],
    processHighlight: 'Cold-pressed drop by drop through slow hydraulic wooden press to ensure all essential fatty acids remain unbroken.',
    smokePoint: '221°C',
    nutritionalInfo: {
      energy: '884 kcal / 100g',
      fat: '100g',
      saturatedFat: '9g',
      mufa: '70g (Oleic Acid)',
      pufa: '21g (Linoleic Acid)',
      cholesterol: '0mg',
      vitamins: 'Exceptional Natural Vitamin E (Alpha-tocopherol)'
    },
    extractionDetails: {
      method: 'Slow Hydraulic Cold Pressing',
      temperature: '< 30°C (Ambient Room Temperature)',
      rpm: '10 RPM',
      seedOrigin: 'Grade-A Mamra & California Sweet Almonds',
      woodType: 'Food-grade stainless & teak press'
    },
    labReportSummary: {
      purity: '100% Pure Sweet Almond Oil',
      adulteration: 'Negative for Mineral Oil and Peanut Oil',
      argemone: 'Negative',
      freeFattyAcid: '0.25%'
    }
  },
  {
    id: 'wood-pressed-coconut-oil',
    name: 'Wood-Pressed Virgin Coconut Oil',
    hindiName: 'शुद्ध कच्ची घानी नारियल तेल (कोल्हू निर्मित)',
    slug: 'wood-pressed-coconut-oil',
    category: 'nut-seed-oils',
    shortDesc: 'Made from sun-dried sulfur-free copra in wooden ghani. Sweet natural coconut aroma. Raw, unrefined & unbleached.',
    description: 'Experience the pure tropical magic of Kerala sun-dried coconuts, pressed in our Delhi wooden Ghani without heat or chemical deodorizers. In winters, it naturally solidifies into a pristine snow-white butter, proving its unrefined purity. Ideal for South Indian delicacies, bulletproof keto coffee, baby skin massage, and deep conditioning oil bath.',
    price: 380,
    originalPrice: 480,
    rating: 4.8,
    reviewsCount: 310,
    inStock: true,
    featured: true,
    bestSeller: false,
    image: '/images/coconut_oil.jpg',
    additionalImages: ['/images/hero.jpg'],
    volumes: [
      { size: '500ml', price: 210, originalPrice: 270, packaging: 'Wide Mouth Glass Jar' },
      { size: '1 Liter', price: 380, originalPrice: 480, packaging: 'Food-Grade Glass Bottle' },
      { size: '2 Liters', price: 720, originalPrice: 920, packaging: 'Eco Tin Container' }
    ],
    benefits: [
      'Loaded with Medium Chain Triglycerides (MCTs) & Lauric Acid for instant metabolic energy',
      'Zero Sulfur & Bleach: Completely raw, unadulterated white purity',
      'Dual Use: Perfect for nutritious cooking as well as natural skin and hair hydration',
      'Antimicrobial & gentle enough for newborn baby skin massage'
    ],
    processHighlight: 'Cold-pressed below 35°C from sulfur-free coconut copra. 100% natural aroma without artificial flavoring.',
    smokePoint: '177°C (Virgin) / Ideal for low-medium heat cooking & baking',
    nutritionalInfo: {
      energy: '890 kcal / 100g',
      fat: '99.5g',
      saturatedFat: '88g (Lauric Acid & Caprylic Acid)',
      mufa: '6g',
      pufa: '2g',
      cholesterol: '0mg',
      vitamins: 'Antioxidants & Plant Sterols'
    },
    extractionDetails: {
      method: 'Wood Kolhu Pressing',
      temperature: '< 34°C',
      rpm: '12 RPM',
      seedOrigin: 'Organic Coastal Coconut Groves, Kerala & Tamil Nadu',
      woodType: 'Vagai (Albizia Lebbeck) Hardwood'
    },
    labReportSummary: {
      purity: '100% Virgin Coconut Oil',
      adulteration: 'Negative for Mineral Oil & Palm Oil',
      argemone: 'Negative',
      freeFattyAcid: '0.15%'
    }
  },
  {
    id: 'wood-pressed-white-sesame-oil',
    name: 'Wood-Pressed White Sesame Oil (Til Ka Tel)',
    hindiName: 'शुद्ध सफेद तिल का तेल (कच्ची घानी)',
    slug: 'wood-pressed-white-sesame-oil',
    category: 'nut-seed-oils',
    shortDesc: 'Queen of oilseeds. Cold-pressed white sesame oil packed with calcium, magnesium, and sesamol antioxidants.',
    description: 'Regarded in the Charaka Samhita as the foremost edible oil for human longevity. Pressed slowly in our wooden Kolhu from golden Rajasthani white sesame seeds. It has a delicate, nutty fragrance and a silky texture. Excellent for Ayurvedic Abhyanga (daily self-massage), oil pulling (Gandusha), and authentic Asian and South Indian seasoning.',
    price: 420,
    originalPrice: 520,
    rating: 4.9,
    reviewsCount: 165,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/sesame_oil.jpg',
    additionalImages: ['/images/process_live.jpg'],
    volumes: [
      { size: '500ml', price: 230, originalPrice: 290, packaging: 'Dark Glass Bottle' },
      { size: '1 Liter', price: 420, originalPrice: 520, packaging: 'Food-Grade Glass Bottle' },
      { size: '2 Liters', price: 810, originalPrice: 990, packaging: 'Eco Tin Container' }
    ],
    benefits: [
      'Ayurvedic King of Massage: Penetrates deep into tissues to strengthen bones and relieve joint ache',
      'Rich in Sesamol & Sesamolin: Exceptional oxidative stability and cell regeneration',
      'Ideal for Daily Oral Oil Pulling: Strengthens gums, whitens teeth, and removes oral toxins',
      'Supports healthy blood pressure and cardiovascular balance'
    ],
    processHighlight: 'Pressed with a pinch of organic palm jaggery in the wooden kolhu to bind the meal and yield pristine golden nectar.',
    smokePoint: '210°C',
    nutritionalInfo: {
      energy: '884 kcal / 100g',
      fat: '100g',
      saturatedFat: '14.2g',
      mufa: '40.5g',
      pufa: '41.3g',
      cholesterol: '0mg',
      vitamins: 'High in Vitamin E, Sesamin, Sesamol'
    },
    extractionDetails: {
      method: 'Lakdi Ki Ghani (Traditional Kolhu)',
      temperature: '< 37°C',
      rpm: '14 RPM',
      seedOrigin: 'Bikaner & Jodhpur native sesame farms',
      woodType: 'Vagai Wood Mortar & Pestle'
    },
    labReportSummary: {
      purity: '100% Pure Cold-Pressed Sesame Oil',
      adulteration: 'Negative for Cottonseed Oil & Palm Oil',
      argemone: 'Negative',
      freeFattyAcid: '0.45%'
    }
  },
  {
    id: 'wood-pressed-groundnut-oil',
    name: 'Wood-Pressed Groundnut Oil (Moongfali Tel)',
    hindiName: 'शुद्ध मूंगफली का तेल (कच्ची घानी)',
    slug: 'wood-pressed-groundnut-oil',
    category: 'nut-seed-oils',
    shortDesc: 'Extracted from premium Saurashtra whole peanuts. Heart-healthy, aromatic, perfect all-rounder daily kitchen oil.',
    description: 'The golden staple of healthy Indian homes. Sourced directly from Gujarat’s Saurashtra peanut belt, our groundnuts are cold pressed in wooden ghani without bleaching or solvent extraction. Retains the original sweet peanut aroma and wholesome nutrients. With its high smoke point and neutral palate, your rotis, puris, and sabzis will taste infinitely richer and lighter.',
    price: 310,
    originalPrice: 390,
    rating: 4.8,
    reviewsCount: 220,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/groundnut_oil.jpg',
    additionalImages: ['/images/process_live.jpg'],
    volumes: [
      { size: '1 Liter', price: 310, originalPrice: 390, packaging: 'Square Glass Bottle' },
      { size: '2 Liters', price: 600, originalPrice: 750, packaging: 'Eco Tin Container' },
      { size: '5 Liters', price: 1450, originalPrice: 1850, packaging: 'Traditional Food-Grade Metal Tin' }
    ],
    benefits: [
      'High Smoke Point: Perfect for Indian frying, sauteing, and tempering without breaking down into toxic fumes',
      'Rich in Resveratrol: Powerful antioxidant that protects the heart and blood vessels',
      'Naturally Sweet Nutty Taste: Eliminates the greasy, heavy aftertaste of cheap commercial oils',
      'Unrefined: Filtered through natural micro-cloth, zero chemicals'
    ],
    processHighlight: 'Pressed from sun-dried, shell-cracked organic Gujarat peanuts at low RPM.',
    smokePoint: '232°C',
    nutritionalInfo: {
      energy: '884 kcal / 100g',
      fat: '100g',
      saturatedFat: '17g',
      mufa: '49g',
      pufa: '32g',
      cholesterol: '0mg',
      vitamins: 'Natural Vitamin E, Resveratrol'
    },
    extractionDetails: {
      method: 'Traditional Wooden Ghani',
      temperature: '< 38°C',
      rpm: '13 RPM',
      seedOrigin: 'Junagadh & Rajkot Organic Peanut Fields',
      woodType: 'Neem wood pestle'
    },
    labReportSummary: {
      purity: '100% Pure Virgin Groundnut Oil',
      adulteration: 'Negative for Palm, Soy & Mineral Oil',
      argemone: 'Negative',
      freeFattyAcid: '0.35%'
    }
  },
  {
    id: 'dkw-heritage-wellness-duo',
    name: 'DKW Heritage Wellness Duo (Peeli Sarson + A2 Bilona Ghee)',
    hindiName: 'डीकेडब्ल्यू हेरिटेज वेलनेस कॉम्बो (1L पीली सरसों + 500g A2 बिलोना घी)',
    slug: 'dkw-heritage-wellness-duo',
    category: 'combos',
    shortDesc: 'The ultimate Indian kitchen wellness pair. 1L Pure Yellow Mustard Oil + 500ml Vedic A2 Gir Cow Bilona Ghee.',
    description: 'Transform your daily family nutrition with Delhi Kolhu Wale’s signature bundle. Experience the pure joy of cooking daily meals in cold-pressed yellow mustard oil, while enriching morning rotis and bedtime milk with authentic hand-churned A2 Gir cow bilona ghee. Bundled at an exclusive family discount in our signature gift box.',
    price: 1050,
    originalPrice: 1400,
    rating: 5.0,
    reviewsCount: 142,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/hero.jpg',
    additionalImages: ['/images/bilona_ghee.jpg', '/images/yellow_mustard.jpg'],
    volumes: [
      { size: 'Standard Combo Pack', price: 1050, originalPrice: 1400, packaging: '1L Glass Bottle + 500ml Glass Jar Box' },
      { size: 'Jumbo Family Pack', price: 2650, originalPrice: 3500, packaging: '2L Tin Peeli Sarson + 1L Glass Jar Ghee + Free Badam Rogan 50ml' }
    ],
    benefits: [
      'Complete Kitchen Upgrade: Replaces all harmful refined cooking oils and commercial butter',
      'Dual Power of Vedic Nutrition: Ayurvedic healing ghee + Heart-protective wood-pressed oil',
      'Includes complimentary brass pouring spout and recipe book of traditional Dadi-Nani remedies',
      'Extra 25% savings compared to buying individual bottles'
    ],
    processHighlight: 'Both products pressed and churned fresh every Monday in our Delhi Kolhu center.',
    smokePoint: 'High Stability for all Indian cuisine',
    nutritionalInfo: {
      energy: 'Comprehensive Balanced Healthy Fats',
      fat: '100% Unadulterated Plant & Dairy Lipid Matrix',
      saturatedFat: 'Optimal Vedic Ratio',
      mufa: 'High MUFA & Omega-3',
      pufa: 'Balanced',
      cholesterol: 'Natural beneficial lipid profile',
      vitamins: 'Vitamins A, D, E, K2, CLA'
    },
    extractionDetails: {
      method: 'Wood Kolhu + Terracotta Bilona Churn',
      temperature: 'Cold extracted below 38°C',
      rpm: 'Slow speed artisanal production',
      seedOrigin: 'Certified Rajasthani Yellow Mustard & Gir Gaushala',
      woodType: 'Sacred Neem & Teak'
    },
    labReportSummary: {
      purity: '100% Guaranteed Zero Chemical Residue',
      adulteration: 'Negative for all adulterants',
      argemone: 'Negative',
      freeFattyAcid: 'Under 0.3%'
    }
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Products', hindi: 'सभी शुद्ध उत्पाद' },
  { id: 'mustard-oils', name: 'Mustard Oils (सरसों तेल)', hindi: 'पीली व काली सरसों का तेल' },
  { id: 'bilona-ghee', name: 'Vedic Bilona Ghee', hindi: 'शुद्ध बिलोना देसी घी' },
  { id: 'nut-seed-oils', name: 'Nut & Seed Oils', hindi: 'नारियल, तिल व मूंगफली तेल' },
  { id: 'wellness-rogan', name: 'Badam Rogan & Wellness', hindi: 'शुद्ध बादाम रोगन' },
  { id: 'combos', name: 'Heritage Combos', hindi: 'किचन बचत कॉम्बो' }
];

export const FAQS = [
  {
    q: 'What does "आँखों के सामने निकलता भरोसे से बिकता है" mean?',
    a: 'At Delhi Kolhu Wale, we practice 100% open, transparent production. You are welcome to walk into our Delhi unit anytime between 8 AM and 8 PM, select your own raw seeds, watch them being crushed in our wooden Kolhus (Lakdi ki Ghani), and take away warm, fresh oil bottled right before your eyes. Trust is not a claim for us; it is our visible everyday practice.'
  },
  {
    q: 'Why should I choose Wood-Pressed (Lakdi Ki Ghani) over Refined Oils?',
    a: 'Industrial refined oils are subjected to extreme heat (>200°C) and treated with harsh chemical solvents like Hexane, bleach, and artificial deodorizers, stripping away all natural vitamins and creating carcinogenic trans fats. DKW wooden kolhus crush seeds slowly at room temperature (<38°C), without friction heat. This preserves the natural aroma, vibrant color, antioxidants, and cellular memory of the seeds.'
  },
  {
    q: 'What is the Vedic 5-Step Bilona Method for Desi Ghee?',
    a: 'Commercial ghee is made in seconds by heating industrial cream separated by centrifuges. In contrast, Vedic Bilona requires 5 sacred steps: 1) Boil fresh A2 milk over slow wood fire, 2) Naturally ferment it into whole curd in clay pots, 3) Churn the curd bi-directionally using a wooden mathani to yield fresh makkhan (cultured butter), 4) Gently simmer the butter into golden aromatic ghee, and 5) Strain through natural muslin cloth into glass jars. It takes ~30 liters of pure milk to make just 1 liter of our A2 Bilona Ghee.'
  },
  {
    q: 'What is the difference between Yellow Mustard and Black Mustard Oil?',
    a: 'Yellow Mustard Oil (Pili Sarson) is milder, naturally sweeter, and has a softer aroma, making it versatile for all daily cooking, shallow frying, and dals. Black Mustard Oil (Kali Sarson) has a much stronger, pungent kick and eye-watering aroma, making it the supreme choice for traditional pickles (achaar), North Indian winter dishes, and deep therapeutic body/joint massage.'
  },
  {
    q: 'Can I visit your Delhi workshop or get live video extraction?',
    a: 'Yes, absolutely! We are located in Delhi NCR. You can call or WhatsApp us on +91 9971207645 to schedule a personal visit or request a live video call while your batch of oil or bilona ghee is being packaged.'
  }
];
