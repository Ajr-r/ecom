const phonesdata = [
  { id: "p1", name: "iPhone 13", price: "₹80000", rating: 5 },
  { id: "p2", name: "Samsung Galaxy S21", price: "₹60000", rating: 4 },
  { id: "p3", name: "OnePlus 9 Pro", price: "₹55000", rating: 4 },
  { id: "p4", name: "Google Pixel 6", price: "₹45000", rating: 3 },
  { id: "p5", name: "Xiaomi Mi 11X", price: "₹35000", rating: 3 },
  { id: "p6", name: "Realme GT 5G", price: "₹30000", rating: 4 },
  { id: "p7", name: "Oppo Reno 6 Pro", price: "₹40000", rating: 4 },
  { id: "p8", name: "Vivo V21", price: "₹28000", rating: 2 },
  { id: "p9", name: "Motorola Edge 20", price: "₹32000", rating: 4 },
  { id: "p10", name: "Nokia X20", price: "₹25000", rating: 3 },
  { id: "p11", name: "Motorola G Power", price: "₹17000", rating: 3 },
  { id: "p12", name: "BlackBerry Key2", price: "₹24000", rating: 2 },
  { id: "p13", name: "HTC U12+", price: "₹28000", rating: 3 },
  { id: "p14", name: "ZTE Axon 30 Ultra", price: "₹32000", rating: 4 },
  { id: "p15", name: "Xiaomi Redmi Note 11", price: "₹15000", rating: 3 },
  { id: "p16", name: "Sony Xperia 1 III", price: "₹56000", rating: 4 },
  { id: "p17", name: "Google Pixel 5a", price: "₹32000", rating: 4 },
  { id: "p18", name: "Realme Narzo 50", price: "₹14000", rating: 2 },
  { id: "p19", name: "Vivo Y72s", price: "₹18000", rating: 3 },
  { id: "p20", name: "Asus ZenFone 8", price: "₹42000", rating: 4 },
];
const tshirtsdata = [
  { id: "t1", name: "Plain White T-Shirt", price: "₹1000", rating: 4 },
  { id: "t2", name: "Graphic Print T-Shirt", price: "₹1200", rating: 3 },
  { id: "t3", name: "Striped Polo T-Shirt", price: "₹1500", rating: 2 },
  { id: "t4", name: "V-Neck Casual T-Shirt", price: "₹1100", rating: 4 },
  { id: "t5", name: "Sports Logo T-Shirt", price: "₹1300", rating: 5 },
  { id: "t6", name: "Crew Neck Vintage Tee", price: "₹900", rating: 3 },
  { id: "t7", name: "Long Sleeve Henley", price: "₹1700", rating: 2 },
  { id: "t8", name: "Retro Tie-Dye T-Shirt", price: "₹1400", rating: 4 },
  { id: "t9", name: "Slim Fit Graphic Tee", price: "₹1250", rating: 1 },
  { id: "t10", name: "Pocket Front T-Shirt", price: "₹1050", rating: 5 },
  { id: "t11", name: "Retro Logo Tee", price: "₹950", rating: 4 },
  { id: "t12", name: "Patterned Crewneck", price: "₹800", rating: 3 },
  { id: "t13", name: "Classic Polo Shirt", price: "₹1100", rating: 4 },
  { id: "t14", name: "Henley Neck Tee", price: "₹700", rating: 2 },
  { id: "t15", name: "Distressed Print T-Shirt", price: "₹850", rating: 3 },
  { id: "t16", name: "Casual V-Neck Tee", price: "₹600", rating: 4 },
  { id: "t17", name: "Tie-Dye Summer Tee", price: "₹750", rating: 3 },
  { id: "t18", name: "Oversized Fit T-Shirt", price: "₹900", rating: 2 },
  { id: "t19", name: "Urban Camo Print Tee", price: "₹800", rating: 4 },
  { id: "t20", name: "Longline Scoop Neck", price: "₹700", rating: 3 },
];
  
const shoesdata = [
  { id: "s1", name: "Nike Air Max", price: "₹1200", rating: 4 },
  { id: "s2", name: "Adidas Ultraboost", price: "₹1400", rating: 3 },
  { id: "s3", name: "Puma RS-X Sneakers", price: "₹1100", rating: 3 },
  { id: "s4", name: "New Balance 990v5", price: "₹1300", rating: 4 },
  { id: "s5", name: "Converse Chuck Taylor", price: "₹600", rating: 2 },
  { id: "s6", name: "Vans Old Skool", price: "₹700", rating: 1 },
  { id: "s7", name: "Reebok Classic Leather", price: "₹800", rating: 4 },
  { id: "s8", name: "Under Armour HOVR Sonic", price: "₹1000", rating: 5 },
  { id: "s9", name: "Brooks Ghost 14", price: "₹1500", rating: 4 },
  { id: "s10", name: "Skechers D'Lites", price: "₹900", rating: 4 },
  { id: "s11", name: "Salomon Speedcross 5", price: "₹1400", rating: 5 },
  { id: "s12", name: "Mizuno Wave Rider 25", price: "₹1200", rating: 4 },
  { id: "s13", name: "Saucony Endorphin Shift", price: "₹1300", rating: 4 },
  { id: "s14", name: "Hoka One One Bondi 7", price: "₹1500", rating: 5 },
  { id: "s15", name: "Altra Lone Peak 5", price: "₹1400", rating: 4 },
  { id: "s16", name: "Merrell Moab 2 Ventilator", price: "₹1100", rating: 3 },
  { id: "s17", name: "Columbia Redmond V2", price: "₹900", rating: 3 },
  { id: "s18", name: "Brooks Adrenaline GTS 22", price: "₹1300", rating: 4 },
  { id: "s19", name: "Newton Gravity 10", price: "₹1200", rating: 3 },
  { id: "s20", name: "Inov-8 Trailtalon 235", price: "₹1100", rating: 3 },
];
const proddata = {
  "p1": { 
    name: "iPhone 13",
    desc: "The iPhone 13 features a stunning Super Retina XDR display, powerful A15 Bionic chip, and an advanced dual-camera system. With its sleek design and impressive performance, it's the perfect companion for your everyday tasks and entertainment.",
    techspec: {
      proc: "A15 Bionic",
      ram: "8GB",
      storage: "128GB",
      bat: "2000mAh",
      size: "6.5 inches",
      weight: "200g"
    }
  },
  "p2": { 
    name: "Samsung Galaxy S21",
    desc: "The Samsung Galaxy S21 offers a high-resolution AMOLED display, powerful Exynos processor, and versatile triple-camera setup. It's designed to provide top-notch performance and stunning visuals.",
    techspec: {
      proc: "Exynos",
      ram: "6GB",
      storage: "256GB",
      bat: "3000mAh",
      size: "6.2 inches",
      weight: "180g"
    }
  },
  "p3": { 
    name: "OnePlus 9 Pro",
    desc: "The OnePlus 9 Pro boasts a stunning Fluid AMOLED display, powerful Snapdragon processor, and Hasselblad collaboration for its camera system. With its premium build and cutting-edge features, it's a flagship smartphone for tech enthusiasts.",
    techspec: {
      proc: "Snapdragon",
      ram: "12GB",
      storage: "256GB",
      bat: "4500mAh",
      size: "6.7 inches",
      weight: "197g"
    }
  },
  "p4": { 
    name: "Google Pixel 6",
    desc: "The Google Pixel 6 offers a refined design, stock Android experience, and impressive camera capabilities. With its AI-powered features, it's designed to enhance your smartphone usage.",
    techspec: {
      proc: "Google Tensor",
      ram: "8GB",
      storage: "128GB",
      bat: "4000mAh",
      size: "6.4 inches",
      weight: "185g"
    }
  },
  "p5": { 
    name: "Xiaomi Mi 11X",
    desc: "The Xiaomi Mi 11X offers a sleek design, powerful performance, and a versatile camera system. With its impressive features and affordable price, it's a great choice for budget-conscious users.",
    techspec: {
      proc: "Snapdragon",
      ram: "6GB",
      storage: "128GB",
      bat: "4500mAh",
      size: "6.67 inches",
      weight: "196g"
    }
  },
  "p6": { 
    name: "Realme GT 5G",
    desc: "The Realme GT 5G is a performance-oriented smartphone with a Snapdragon processor and 120Hz AMOLED display. It's designed for gamers and users seeking fast and smooth performance.",
    techspec: {
      proc: "Snapdragon",
      ram: "8GB",
      storage: "128GB",
      bat: "4500mAh",
      size: "6.43 inches",
      weight: "186g"
    }
  },
  "p7": { 
    name: "Oppo Reno 6 Pro",
    desc: "The Oppo Reno 6 Pro features a stunning AMOLED display, powerful MediaTek processor, and impressive camera features. With its slim design and premium features, it's a great choice for multimedia and photography enthusiasts.",
    techspec: {
      proc: "MediaTek",
      ram: "12GB",
      storage: "256GB",
      bat: "4500mAh",
      size: "6.55 inches",
      weight: "177g"
    }
  },
  "p8": { 
    name: "Vivo V21",
    desc: "The Vivo V21 offers a sleek design and a focus on camera capabilities. With its slim form factor and AI-powered features, it's designed for users who love taking selfies and capturing memorable moments.",
    techspec: {
      proc: "MediaTek",
      ram: "8GB",
      storage: "128GB",
      bat: "4000mAh",
      size: "6.44 inches",
      weight: "176g"
    }
  },
  "p9": { 
    name: "Motorola Edge 20",
    desc: "The Motorola Edge 20 is a mid-range smartphone with a focus on photography and performance. Its triple-camera system and Snapdragon processor make it a versatile device for capturing stunning images.",
    techspec: {
      proc: "Snapdragon",
      ram: "6GB",
      storage: "128GB",
      bat: "4000mAh",
      size: "6.67 inches",
      weight: "190g"
    }
  },
  "p10": { 
    name: "Nokia X20",
    desc: "The Nokia X20 combines clean design and reliable performance. With its long-lasting battery life and durable build, it's a dependable option for users seeking a straightforward smartphone experience.",
    techspec: {
      proc: "Snapdragon",
      ram: "4GB",
      storage: "64GB",
      bat: "4500mAh",
      size: "6.67 inches",
      weight: "220g"
    }
  },
  "p11": { 
    name: "Motorola G Power",
    desc: "The Motorola G Power offers impressive battery life and basic performance. It's designed for users who prioritize a long-lasting battery for extended usage without frequent charging.",
    techspec: {
      proc: "Snapdragon",
      ram: "3GB",
      storage: "32GB",
      bat: "5000mAh",
      size: "6.4 inches",
      weight: "207g"
    }
  },
  "p12": { 
    name: "BlackBerry Key2",
    desc: "The BlackBerry Key2 is known for its physical keyboard and focus on security. With its iconic design and BlackBerry's security features, it's a unique choice for users who value privacy.",
    techspec: {
      proc: "Snapdragon",
      ram: "6GB",
      storage: "64GB",
      bat: "3500mAh",
      size: "4.5 inches",
      weight: "168g"
    }
  },
  "p13": { 
    name: "HTC U12+",
    desc: "The HTC U12+ offers a dual-camera system and water-resistant design. With its unique pressure-sensitive edges and high-quality audio capabilities, it provides a multimedia-focused experience.",
    techspec: {
      proc: "Snapdragon",
      ram: "6GB",
      storage: "64GB",
      bat: "3500mAh",
      size: "6 inches",
      weight: "188g"
    }
  },
  "p14": { 
    name: "ZTE Axon 30 Ultra",
    desc: "The ZTE Axon 30 Ultra is a flagship smartphone with a focus on photography and high-end performance. Its quad-camera system and Snapdragon processor make it a premium option for capturing professional-quality images.",
    techspec: {
      proc: "Snapdragon",
      ram: "12GB",
      storage: "256GB",
      bat: "4600mAh",
      size: "6.67 inches",
      weight: "188g"
    }
  },
  "p15": { 
    name: "Xiaomi Redmi Note 11",
    desc: "The Xiaomi Redmi Note 11 offers a balance of features and affordability. With its versatile camera system and large display, it's a budget-friendly option for users seeking a functional smartphone experience.",
    techspec: {
      proc: "MediaTek",
      ram: "4GB",
      storage: "64GB",
      bat: "5000mAh",
      size: "6.53 inches",
      weight: "199g"
    }
  },
  "p16": { 
    name: "Sony Xperia 1 III",
    desc: "The Sony Xperia 1 III is a flagship smartphone with a focus on photography, display quality, and multimedia capabilities. With its 4K OLED display and Zeiss optics, it's designed for content creators and enthusiasts.",
    techspec: {
      proc: "Snapdragon",
      ram: "8GB",
      storage: "256GB",
      bat: "4500mAh",
      size: "6.5 inches",
      weight: "187g"
    }
  },
  "p17": { 
    name: "Google Pixel 5a",
    desc: "The Google Pixel 5a offers Google's clean Android experience and a focus on camera quality. With its stock Android interface and impressive camera performance, it's a solid choice for photography enthusiasts.",
    techspec: {
      proc: "Snapdragon",
      ram: "6GB",
      storage: "128GB",
      bat: "4680mAh",
      size: "6.34 inches",
      weight: "185g"
    }
  },
  "p18": { 
    name: "Realme Narzo 50",
    desc: "The Realme Narzo 50 provides a budget-friendly option with basic performance and features. It's designed for users who prioritize affordability and practical functionality.",
    techspec: {
      proc: "MediaTek",
      ram: "4GB",
      storage: "64GB",
      bat: "5000mAh",
      size: "6.5 inches",
      weight: "208g"
    }
  },
  "p19": { 
    name: "Vivo Y72s",
    desc: "The Vivo Y72s offers a balance of style and performance. With its slim design and AI-enhanced features, it's designed for users seeking a reliable smartphone experience.",
    techspec: {
      proc: "MediaTek",
      ram: "6GB",
      storage: "128GB",
      bat: "4910mAh",
      size: "6.58 inches",
      weight: "185g"
    }
  },
  "p20": { 
    name: "Asus ZenFone 8",
    desc: "The Asus ZenFone 8 packs powerful performance in a compact form factor. With its Snapdragon processor and high-refresh-rate display, it's designed for users who want flagship-level features in a smaller size.",
    techspec: {
      proc: "Snapdragon",
      ram: "8GB",
      storage: "128GB",
      bat: "4000mAh",
      size: "5.9 inches",
      weight: "169g"
    }
  },

};

   
  module.exports={
    phonesdata,
    shoesdata,
    tshirtsdata,
    proddata
  }