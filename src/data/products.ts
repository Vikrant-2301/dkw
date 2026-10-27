import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'sarson-kacchi-ghani',
    name: 'Mustard Kacchi Ghani Oil',
    hindiName: 'सरसों कच्ची घानी (शुद्ध तेल)',
    slug: 'sarson-kacchi-ghani',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    sourcingNote: '100% Sortex Cleaned Rajasthan Mustard (राजस्थान की सॉर्टेक्स सरसों)',
    shortDesc: 'Extracted from 100% Sortex cleaned Rajasthan mustard seeds. Authentic strong pungency and rich traditional aroma.',
    description: 'Freshly extracted in front of your eyes from select Sortex-cleaned native mustard seeds of Rajasthan. Free from any chemical solvents, palm oil, or adulteration. Available in both Wood-Pressed (लकड़ी का कोल्हू) and Cold-Pressed (कच्ची घानी) methods. Ideal for daily Indian curries, tadka, and traditional pickles (अचार).',
    price: 180,
    originalPrice: 220,
    rating: 4.9,
    reviewsCount: 342,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/black_mustard.jpg',
    additionalImages: ['/images/process_live.jpg'],
    volumes: [
      { size: '500ml', price: 100, originalPrice: 120, packaging: 'Glass Bottle (काँच की बोतल)' },
      { size: '1 Liter', price: 180, originalPrice: 220, packaging: 'Glass Bottle (काँच की बोतल)' },
      { size: '2 Liters', price: 350, originalPrice: 420, packaging: 'Container (कंटेनर)' },
      { size: '5 Liters', price: 850, originalPrice: 1050, packaging: 'Traditional Tin (टीन केन)' }
    ],
    benefits: [
      'Sourced from 100% Sortex cleaned Rajasthan mustard seeds (राजस्थान की सॉर्टेक्स सरसों)',
      'Available in both Wood-Pressed (लकड़ी का कोल्हू) and Cold-Pressed (कच्ची घानी)',
      'Rich authentic aroma and sharp pungent kick for cooking and pickles',
      'Zero chemicals, zero mineral oil, zero synthetic essence'
    ],
    processHighlight: 'Extracted fresh before your eyes at our Delhi store.'
  },
  {
    id: 'safed-sarson-oil',
    name: 'Safed Sarson Mustard Oil (White Mustard)',
    hindiName: 'सफेद सरसों (शुद्ध तेल)',
    slug: 'safed-sarson-oil',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    sourcingNote: '100% Sortex Cleaned White Mustard (सफेद सॉर्टेक्स सरसों)',
    shortDesc: 'Mild, sweet and easily digestible white mustard oil. Low pungency and gentle for everyday family meals.',
    description: 'Pressed from select Sortex-cleaned white mustard seeds. Known for its delicate aroma, mild sweetness, and light texture. Perfect for families and children who prefer the health benefits of mustard oil without strong eye-watering pungency.',
    price: 200,
    originalPrice: 240,
    rating: 4.8,
    reviewsCount: 186,
    inStock: true,
    featured: true,
    bestSeller: false,
    image: '/images/yellow_mustard.jpg',
    volumes: [
      { size: '500ml', price: 110, originalPrice: 130, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 200, originalPrice: 240, packaging: 'Glass Bottle' },
      { size: '2 Liters', price: 390, originalPrice: 460, packaging: 'Container' },
      { size: '5 Liters', price: 950, originalPrice: 1150, packaging: 'Tin Can' }
    ],
    benefits: [
      'Mild, light, and easy to digest - gentle on stomach',
      'Freshly pressed from Sortex cleaned Rajasthan white mustard',
      'Available in Wood-Pressed & Cold-Pressed options',
      'Natural antioxidants without harsh pungency'
    ],
    processHighlight: 'Slow-pressed from pure white mustard seeds with zero chemicals.'
  },
  {
    id: 'peeli-sarson-oil',
    name: 'Peeli Sarson Mustard Oil (Yellow Mustard)',
    hindiName: 'पीली सरसों (शुद्ध तेल)',
    slug: 'peeli-sarson-oil',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    sourcingNote: '100% Sortex Cleaned Yellow Mustard (पीली सॉर्टेक्स सरसों)',
    shortDesc: 'Golden yellow mustard oil with a naturally sweet, appetizing aroma. Ideal for every daily Indian dish.',
    description: 'Extracted from premium Sortex-cleaned Rajasthani yellow mustard seeds. Unlike black mustard, yellow mustard has a warm golden clarity, sweeter fragrance, and smooth mild pungency that enhances the flavor of vegetables and dals without bitterness.',
    price: 190,
    originalPrice: 230,
    rating: 4.9,
    reviewsCount: 420,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/yellow_mustard.jpg',
    volumes: [
      { size: '500ml', price: 105, originalPrice: 125, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 190, originalPrice: 230, packaging: 'Glass Bottle' },
      { size: '2 Liters', price: 370, originalPrice: 440, packaging: 'Container' },
      { size: '5 Liters', price: 900, originalPrice: 1100, packaging: 'Tin Can' }
    ],
    benefits: [
      '100% Sortex cleaned native Rajasthani yellow mustard',
      'Mild golden aroma that brings natural sweetness to dishes',
      'Available in both Lakdi Ka Kolhu and Kacchi Ghani',
      'Cardio-friendly natural fats and essential nutrients'
    ],
    processHighlight: 'Freshly pressed in front of customers daily.'
  },
  {
    id: 'nariyal-tel',
    name: 'Pure Coconut Oil (Nariyal Tel)',
    hindiName: 'नारियल का शुद्ध तेल',
    slug: 'nariyal-tel',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Extracted from 100% dried whole copra (सूखा गोला). Pure edible grade for cooking, hair nourishment, and skin.',
    description: 'Crafted from pure sun-dried coconut copra. 100% edible and raw, with no artificial mineral oils or synthetic fragrance added. Excellent for South Indian dishes, baby massage, and deep hair conditioning.',
    price: 240,
    originalPrice: 290,
    rating: 4.9,
    reviewsCount: 215,
    inStock: true,
    featured: true,
    bestSeller: false,
    image: '/images/coconut_oil.jpg',
    volumes: [
      { size: '500ml', price: 130, originalPrice: 155, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 240, originalPrice: 290, packaging: 'Glass Bottle' },
      { size: '2 Liters', price: 460, originalPrice: 560, packaging: 'Container' }
    ],
    benefits: [
      'Pressed from select whole dried coconut copra',
      'Nourishes hair roots and softens skin naturally',
      'Pure edible quality suitable for daily cooking',
      'Zero mineral oil and zero chemical preservatives'
    ],
    processHighlight: 'Cold-pressed from whole copra pieces without artificial heat.'
  },
  {
    id: 'safed-til-tel',
    name: 'Safed Til Sesame Oil (White Sesame)',
    hindiName: 'सफेद तिल (शुद्ध तेल)',
    slug: 'safed-til-tel',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Rich in natural calcium and antioxidants. Excellent for bone strength, pooja rituals, and healthy cooking.',
    description: 'Extracted from clean white sesame seeds. In Ayurveda, sesame oil is considered one of the finest oils for body rejuvenation and bone strength. Clean, nutritious, and lightly nutty in flavor.',
    price: 260,
    originalPrice: 320,
    rating: 4.8,
    reviewsCount: 164,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/sesame_oil.jpg',
    volumes: [
      { size: '500ml', price: 140, originalPrice: 170, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 260, originalPrice: 320, packaging: 'Glass Bottle' },
      { size: '2 Liters', price: 500, originalPrice: 620, packaging: 'Container' }
    ],
    benefits: [
      'Natural source of calcium and zinc for bone health',
      'Traditional Ayurvedic oil for therapeutic body massage',
      'Available in Wood-Pressed & Cold-Pressed',
      'Great for Asian stir-fries, tempering, and ritual pooja'
    ],
    processHighlight: 'Slow wood-pressed from pure white sesame seeds.'
  },
  {
    id: 'kale-til-tel',
    name: 'Kale Til Sesame Oil (Black Sesame)',
    hindiName: 'काले तिल (शुद्ध तेल)',
    slug: 'kale-til-tel',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Potent Ayurvedic oil from black sesame seeds. Highly beneficial for joint pain massage and hair care.',
    description: 'Black sesame oil is treasured in Ayurveda for pacifying Vata dosha. Its warm potency penetrates deep into muscles and joints, easing winter stiffness and revitalizing dry scalp and hair follicles.',
    price: 280,
    originalPrice: 350,
    rating: 4.9,
    reviewsCount: 198,
    inStock: true,
    featured: true,
    bestSeller: false,
    image: '/images/sesame_oil.jpg',
    volumes: [
      { size: '500ml', price: 150, originalPrice: 185, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 280, originalPrice: 350, packaging: 'Glass Bottle' },
      { size: '2 Liters', price: 540, originalPrice: 670, packaging: 'Container' }
    ],
    benefits: [
      'Top-choice Ayurvedic oil for joint and back massage',
      'Helps strengthen hair roots and delay premature greying',
      'Available in Wood-Pressed & Cold-Pressed',
      '100% pure desi black sesame seeds'
    ],
    processHighlight: 'Cold extracted slowly from native black sesame seeds.'
  },
  {
    id: 'mungfali-tel',
    name: 'Pure Groundnut Oil (Peanut Oil)',
    hindiName: 'मूंगफली का शुद्ध तेल',
    slug: 'mungfali-tel',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Sweet nutty oil from native groundnuts. High smoke point - ideal for puris, pakoras, and non-sticky cooking.',
    description: 'Cold-pressed from premium Indian groundnuts (peanuts). Has a high heat tolerance that prevents food from burning or soaking excess oil. Keeps puris crispy and curries light, without post-meal heaviness.',
    price: 210,
    originalPrice: 260,
    rating: 4.8,
    reviewsCount: 275,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/groundnut_oil.jpg',
    volumes: [
      { size: '500ml', price: 115, originalPrice: 140, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 210, originalPrice: 260, packaging: 'Glass Bottle' },
      { size: '2 Liters', price: 400, originalPrice: 500, packaging: 'Container' },
      { size: '5 Liters', price: 980, originalPrice: 1220, packaging: 'Tin Can' }
    ],
    benefits: [
      'High smoke point ideal for frying and daily sabzis',
      'Loaded with heart-friendly monounsaturated fats',
      'Available in Wood-Pressed & Cold-Pressed',
      'Zero chemical bleaching and non-sticky'
    ],
    processHighlight: 'Freshly extracted from clean whole groundnut kernels.'
  },
  {
    id: 'badam-tel',
    name: 'Pure Badam Rogan (Almond Oil)',
    hindiName: 'बादाम का शुद्ध तेल',
    slug: 'badam-tel',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    shortDesc: '100% pure sweet almond oil. Excellent for memory, glowing skin, infant massage, and bedtime milk.',
    description: 'Extracted slowly from edible sweet almond kernels before your eyes. Far superior to commercial mineral-infused hair oils. Safe for internal consumption with warm milk, as well as nourishing facial skin and baby massage.',
    price: 450,
    originalPrice: 550,
    rating: 5.0,
    reviewsCount: 310,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/badam_rogan.jpg',
    volumes: [
      { size: '100ml', price: 190, originalPrice: 230, packaging: 'Glass Bottle' },
      { size: '250ml', price: 450, originalPrice: 550, packaging: 'Glass Bottle' },
      { size: '500ml', price: 850, originalPrice: 1050, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 1650, originalPrice: 2000, packaging: 'Glass Bottle' }
    ],
    benefits: [
      '100% pure edible sweet almond kernels',
      'Supports brain function, memory, and cognitive vitality',
      'Natural glow for dry skin and strength for hair',
      'Gentle and pure for baby massage'
    ],
    processHighlight: 'Slowly pressed from edible sweet almonds with zero additives.'
  },
  {
    id: 'alsi-tel',
    name: 'Pure Flaxseed Oil (Alsi Tel)',
    hindiName: 'अलसी का शुद्ध तेल',
    slug: 'alsi-tel',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Plant-based powerhouse of Omega-3 fatty acids. Promotes cardiovascular wellness and joint comfort.',
    description: 'Cold-pressed from clean flaxseeds. Flaxseed oil is the richest vegetarian source of Alpha-Linolenic Acid (ALA Omega-3). One spoonful a day helps balance cholesterol and relieve joint stiffness.',
    price: 230,
    originalPrice: 280,
    rating: 4.8,
    reviewsCount: 140,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/yellow_mustard.jpg',
    volumes: [
      { size: '500ml', price: 125, originalPrice: 150, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 230, originalPrice: 280, packaging: 'Glass Bottle' }
    ],
    benefits: [
      'Richest vegetarian source of natural Omega-3',
      'Supports cardiovascular wellness and healthy BP',
      'Available in Wood-Pressed & Cold-Pressed',
      'Raw, unrefined, and single-origin seeds'
    ],
    processHighlight: 'Cold-pressed from golden flaxseeds without heat.'
  },
  {
    id: 'kalonji-tel',
    name: 'Pure Kalonji Oil (Black Seed Oil)',
    hindiName: 'कलौंजी का शुद्ध तेल',
    slug: 'kalonji-tel',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    shortDesc: '100% pure Nigella Sativa black seed oil. Renowned Ayurvedic tonic for immunity, hair, and metabolism.',
    description: 'Pressed directly from pure black cumin (Kalonji) seeds. Revered across traditional medicine systems for boosting overall immune health, balancing sugar levels, and revitalizing thinning hair.',
    price: 350,
    originalPrice: 420,
    rating: 4.9,
    reviewsCount: 185,
    inStock: true,
    featured: true,
    bestSeller: false,
    image: '/images/black_mustard.jpg',
    volumes: [
      { size: '100ml', price: 130, originalPrice: 160, packaging: 'Glass Bottle' },
      { size: '250ml', price: 290, originalPrice: 350, packaging: 'Glass Bottle' },
      { size: '500ml', price: 550, originalPrice: 680, packaging: 'Glass Bottle' }
    ],
    benefits: [
      'Boosts natural immunity and metabolic health',
      'Effective remedy for controlling severe hair fall',
      'Available in Wood-Pressed & Cold-Pressed',
      '100% pure black cumin seed extract'
    ],
    processHighlight: 'Unrefined, pure Kalonji oil with rich active compounds.'
  },
  {
    id: 'akhrot-tel',
    name: 'Pure Walnut Oil (Akhrot Tel)',
    hindiName: 'अखरोट का शुद्ध तेल',
    slug: 'akhrot-tel',
    category: 'oil',
    availableTypes: 'Available in Wood-Pressed (लकड़ी का कोल्हू) & Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Rich in Vitamin E and antioxidants. Nourishes nerve health, brain function, and skin radiance.',
    description: 'Cold-pressed from premium edible walnut kernels. Known for high polyunsaturated fatty acids and Vitamin E that soothe dry skin, fade dark circles, and calm the nervous system.',
    price: 480,
    originalPrice: 580,
    rating: 4.9,
    reviewsCount: 112,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/badam_rogan.jpg',
    volumes: [
      { size: '100ml', price: 180, originalPrice: 220, packaging: 'Glass Bottle' },
      { size: '250ml', price: 420, originalPrice: 500, packaging: 'Glass Bottle' },
      { size: '500ml', price: 800, originalPrice: 980, packaging: 'Glass Bottle' }
    ],
    benefits: [
      'Supports brain function and nervous system vitality',
      'Helps reduce dark circles and fine lines',
      'Available in Wood-Pressed & Cold-Pressed',
      'Made from whole edible walnut kernels'
    ],
    processHighlight: 'Pure walnut extract without artificial fragrance.'
  },
  {
    id: 'neem-tel',
    name: 'Pure Neem Oil (Neem Tel)',
    hindiName: 'नीम का शुद्ध तेल',
    slug: 'neem-tel',
    category: 'oil',
    availableTypes: 'Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Potent natural neem oil from Indian neem seeds. Effective for skin infections, dandruff, and organic plant care.',
    description: 'Extracted from wild-harvested Indian neem seeds (निबौली). High in azadirachtin, providing powerful antifungal and antibacterial benefits for itchy scalp, dandruff, acne spots, and natural gardening pest repellent.',
    price: 160,
    originalPrice: 200,
    rating: 4.7,
    reviewsCount: 95,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/coconut_oil.jpg',
    volumes: [
      { size: '100ml', price: 60, originalPrice: 80, packaging: 'Bottle' },
      { size: '250ml', price: 110, originalPrice: 140, packaging: 'Bottle' },
      { size: '500ml', price: 190, originalPrice: 240, packaging: 'Bottle' }
    ],
    benefits: [
      'Naturally antibacterial and antifungal for skin',
      'Relieves stubborn dandruff and scalp itching',
      'Certified natural pesticide for household plants',
      '100% pure cold-pressed neem seeds'
    ],
    processHighlight: 'Traditional cold-pressed from native neem seeds.'
  },
  {
    id: 'arandi-tel',
    name: 'Pure Castor Oil (Arandi Tel)',
    hindiName: 'अरण्डी का शुद्ध तेल',
    slug: 'arandi-tel',
    category: 'oil',
    availableTypes: 'Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Thick, unrefined castor oil. Natural aid for digestion, joint packs, thick eyebrows, and dense hair.',
    description: 'Cold-pressed from castor seeds. High in ricinoleic acid, this thick nourishing oil has been trusted for generations for gut cleansing, knee joint relief packs, and promoting thicker eyelashes, eyebrows, and beard growth.',
    price: 180,
    originalPrice: 220,
    rating: 4.8,
    reviewsCount: 130,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/yellow_mustard.jpg',
    volumes: [
      { size: '100ml', price: 65, originalPrice: 85, packaging: 'Bottle' },
      { size: '250ml', price: 120, originalPrice: 150, packaging: 'Bottle' },
      { size: '500ml', price: 210, originalPrice: 260, packaging: 'Bottle' },
      { size: '1 Liter', price: 390, originalPrice: 480, packaging: 'Bottle' }
    ],
    benefits: [
      'Aids digestion and eases chronic constipation',
      'Promotes thicker eyelashes, eyebrows, and hair',
      'Deep joint and muscle warming massage',
      '100% thick, pure cold-pressed castor oil'
    ],
    processHighlight: 'Cold-pressed without heat or chemical solvents.'
  },
  {
    id: 'pyaj-beej-tel',
    name: 'Pure Onion Seed Oil (Pyaj Beej Tel)',
    hindiName: 'प्याज के बीज का शुद्ध तेल',
    slug: 'pyaj-beej-tel',
    category: 'oil',
    availableTypes: 'Cold-Pressed (कच्ची घानी)',
    shortDesc: 'Rich in natural sulfur. Stimulates hair roots, arrests hair fall, and encourages healthy scalp regrowth.',
    description: 'Extracted directly from pure onion seeds. Packed with natural plant sulfur and potassium that strengthens brittle hair follicles, minimizes breakage, and helps clear dandruff.',
    price: 290,
    originalPrice: 360,
    rating: 4.8,
    reviewsCount: 156,
    inStock: true,
    featured: true,
    bestSeller: false,
    image: '/images/black_mustard.jpg',
    volumes: [
      { size: '100ml', price: 120, originalPrice: 150, packaging: 'Glass Bottle' },
      { size: '250ml', price: 260, originalPrice: 320, packaging: 'Glass Bottle' },
      { size: '500ml', price: 490, originalPrice: 600, packaging: 'Glass Bottle' }
    ],
    benefits: [
      'Controls excessive hair thinning and breakage',
      'Rich in natural sulfur for scalp rejuvenation',
      'Soothes dry, flaky scalp and eliminates dandruff',
      'Pure seed extract without artificial fragrance'
    ],
    processHighlight: 'Cold extracted from clean onion seeds.'
  },
  {
    id: 'jaitun-tel',
    name: 'Pure Olive Oil (Jaitun Tel)',
    hindiName: 'जैतून का शुद्ध तेल',
    slug: 'jaitun-tel',
    category: 'oil',
    availableTypes: 'Pure Cold-Pressed (कोल्ड प्रेस्ड)',
    shortDesc: 'Gentle multipurpose olive oil. Ideal for salads, healthy light cooking, infant massage, and elderly care.',
    description: 'Cold-pressed from selected ripe olives. Rich in monounsaturated fats (MUFA) and Vitamin E. Its silky texture is gentle on delicate baby skin and eases muscle stiffness in elders.',
    price: 380,
    originalPrice: 460,
    rating: 4.8,
    reviewsCount: 142,
    inStock: true,
    featured: false,
    bestSeller: false,
    image: '/images/yellow_mustard.jpg',
    volumes: [
      { size: '250ml', price: 210, originalPrice: 250, packaging: 'Glass Bottle' },
      { size: '500ml', price: 380, originalPrice: 460, packaging: 'Glass Bottle' },
      { size: '1 Liter', price: 720, originalPrice: 880, packaging: 'Glass Bottle' }
    ],
    benefits: [
      'Gentle nourishing oil for baby and elderly massage',
      'Rich in heart-friendly MUFA and Vitamin E',
      'Locks in skin moisture and relieves fatigue',
      'Free from chemical refining and solvents'
    ],
    processHighlight: 'Cold-pressed from select quality olives.'
  },

  // GHEE PRODUCTS (Category: 'ghee')
  {
    id: 'cow-bilona-ghee',
    name: 'Pure Desi Cow Bilona Ghee',
    hindiName: 'गाय का शुद्ध बिलोना देसी घी',
    slug: 'cow-bilona-ghee',
    category: 'ghee',
    availableTypes: 'Hand-churned in Clay Pots (मिट्टी की हांड़ी का बिलोना घी)',
    shortDesc: 'Cultured in earthen clay pots and churned with wooden mathani. Golden grainy texture, heavenly aroma.',
    description: 'Crafted the Vedic way. Fresh Desi cow milk is simmered slowly, fermented into whole curd in terracotta clay pots, and churned bi-directionally with a wooden mathani to extract pure makkhan. The makkhan is gently clarified into golden aromatic Danedar ghee. Light to digest and packed with natural butyric acid.',
    price: 750,
    originalPrice: 900,
    rating: 5.0,
    reviewsCount: 460,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/bilona_ghee.jpg',
    volumes: [
      { size: '250g', price: 400, originalPrice: 480, packaging: 'Glass Jar (काँच का जार)' },
      { size: '500g', price: 750, originalPrice: 900, packaging: 'Glass Jar (काँच का जार)' },
      { size: '1 kg', price: 1450, originalPrice: 1750, packaging: 'Glass Jar (काँच का जार)' },
      { size: '2 kg', price: 2850, originalPrice: 3400, packaging: 'Glass Jar (काँच का जार)' }
    ],
    benefits: [
      'Fermented from whole curd in clay pots (no direct cream boiling)',
      'Rich golden Danedar (grainy) texture and authentic village aroma',
      'Aids gut digestion, memory power, and joint lubrication',
      '100% pure - zero preservatives or artificial flavoring'
    ],
    processHighlight: 'Traditional hand-churned Vedic Bilona method.'
  },
  {
    id: 'buffalo-bilona-ghee',
    name: 'Pure Murrah Buffalo Bilona Ghee',
    hindiName: 'भैंस का शुद्ध बिलोना देसी घी',
    slug: 'buffalo-bilona-ghee',
    category: 'ghee',
    availableTypes: 'Hand-churned in Clay Pots (मिट्टी की हांड़ी का बिलोना घी)',
    shortDesc: 'From pure Murrah buffalo milk curd. Snowy white, densely grainy, and rich in stamina-building nutrients.',
    description: 'Made traditionally from whole curd of Murrah buffalo milk. Cultured in earthen pots and churned slowly with a wooden mathani. Renowned for its snowy white color, dense danedar grain, and robust flavor. Perfect for building physical strength, stamina, and preparing festive halwas and laddoos.',
    price: 650,
    originalPrice: 780,
    rating: 4.9,
    reviewsCount: 380,
    inStock: true,
    featured: true,
    bestSeller: true,
    image: '/images/bilona_ghee.jpg',
    volumes: [
      { size: '250g', price: 350, originalPrice: 420, packaging: 'Glass Jar' },
      { size: '500g', price: 650, originalPrice: 780, packaging: 'Glass Jar' },
      { size: '1 kg', price: 1250, originalPrice: 1500, packaging: 'Glass Jar' },
      { size: '2 kg', price: 2450, originalPrice: 2950, packaging: 'Glass Jar' }
    ],
    benefits: [
      'Prepared from whole curd churned in clay pots',
      'Snow-white danedar grain with deeply satisfying flavor',
      'Supports stamina, muscle strength, and restful sleep',
      '100% unadulterated pure village quality'
    ],
    processHighlight: 'Traditional clay-pot Bilona churning from Murrah curd.'
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'All Products (सभी उत्पाद)', hindi: 'सभी 17 शुद्ध तेल व घी' },
  { id: 'oil', name: 'Pure Oils (शुद्ध तेल)', hindi: 'Wood-Pressed & Cold-Pressed Oils' },
  { id: 'ghee', name: 'Bilona Ghee (देसी बिलोना घी)', hindi: 'Cow & Buffalo Clay-Pot Bilona Ghee' }
];

export const TESTIMONIALS = [
  {
    name: 'Suresh Gupta (सुरेश गुप्ता)',
    location: 'Krishna Nagar, Delhi (कृष्णा नगर)',
    rating: 5,
    english: 'I visited their Krishna Nagar shop myself and watched them press yellow mustard seeds right before my eyes. The authentic aroma when you heat the oil fills the entire house. Never buying supermarket refined oils again.',
    hindi: 'मैं खुद दुकान पर जाकर अपनी आँखों के सामने पीली सरसों का तेल निकलवा कर लाया। जब तेल गरम होता है तो असली सरसों की खुशबू पूरे घर में फैल जाती है। अब बाज़ार का रिफाइंड छूने का भी मन नहीं करता।',
    product: 'Peeli Sarson (Yellow Mustard Oil)'
  },
  {
    name: 'Rekha Sharma (रेखा शर्मा)',
    location: 'Laxmi Nagar, Delhi (लक्ष्मी नगर)',
    rating: 5,
    english: 'Their Desi Cow Bilona Ghee has the exact golden danedar grain and aroma my grandmother used to make in our village. The taste on hot rotis is unmatched, and same-day free delivery within 15km makes ordering so convenient.',
    hindi: 'गाय का बिलोना घी एकदम दानेदार और खुशबूदार है, जैसा गाँव में दादी बनाती थीं। बच्चों की रोटी पर लगाओ तो अलग ही स्वाद आता है। सबसे अच्छी बात कि 15 किमी में उसी दिन घर पर डिलीवरी मिल जाती है।',
    product: 'Pure Desi Cow Bilona Ghee'
  },
  {
    name: 'Anil Yadav (अनिल यादव)',
    location: 'Preet Vihar, Delhi (प्रीत विहार)',
    rating: 5,
    english: 'Because they use 100% Sortex clean mustard from Rajasthan, the oil comes out exceptionally clean without bitter residue. Real kacchi ghani punch. The Badam Rogan is also exceptional for children.',
    hindi: 'राजस्थान की सॉर्टेक्स साफ सरसों की वजह से तेल बिल्कुल साफ और खरा निकलता है। आंखों में बिना कड़वाहट के असली कच्ची घानी का झाँझ है। बादाम का तेल भी बच्चों के लिए बहुत बढ़िया है।',
    product: 'Sarson Kacchi Ghani & Badam Rogan'
  }
];

export const FAQS = [
  {
    q: 'What does "आँखों के सामने निकलता भरोसे से बिकता है" mean?',
    a: 'It means 100% visible honesty. You can walk into our Krishna Nagar store (A1/10, Main Road, Near Chhachi Building) anytime between 9:00 AM and 11:00 PM, choose your raw seeds, watch the oil freshly pressed in wooden Kolhu or cold-press ghani, and take it home bottled fresh.'
  },
  {
    q: 'Where do you source your mustard seeds from? (सरसों कहाँ की है?)',
    a: 'We exclusively use 100% Sortex cleaned native mustard seeds sourced directly from Rajasthan (राजस्थान की सॉर्टेक्स साफ सरसों). Every seed is electronically cleaned and sorted to eliminate dust, impurities, or damaged grains.'
  },
  {
    q: 'What extraction methods do you offer for oils?',
    a: 'All our oils are available in two authentic methods: 1) Wood-Pressed (लकड़ी का कोल्हू / Marachekku) and 2) Traditional Cold-Pressed (कच्ची घानी). Both methods operate slowly without artificial heat or chemical solvents.'
  },
  {
    q: 'How is your Bilona Ghee prepared? (बिलोना घी कैसे बनता है?)',
    a: 'Unlike factory ghee made by boiling centrifugal cream, our ghee is made using the authentic Vedic method: Pure milk is cultured into whole curd in earthen clay pots, churned bi-directionally with a wooden mathani to extract butter, and gently simmered into golden Danedar (grainy) ghee.'
  },
  {
    q: 'What are the delivery terms and shop timings?',
    a: 'Our store is open all 7 days from 9:00 AM to 11:00 PM. We provide Same-Day Free Home Delivery within 15 km in Delhi NCR on all orders. You can order online, call us, or WhatsApp on 9599207645.'
  }
];
