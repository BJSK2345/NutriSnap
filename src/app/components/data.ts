export const STORES = [
  {
    id: "store-a",
    name: "Store A",
    address: "112 Birchwood Ave, Mellow",
    distance: "0.3 mi",
    healthScore: 92,
    basketCost: "$28.40",
    affordable: ["Bananas", "Oats", "Canned Beans", "Spinach", "Eggs"],
    items: [
      { name: "Bananas", price: "$0.59 / lb" },
      { name: "Oats", price: "$2.49" },
      { name: "Canned Beans", price: "$0.89" },
      { name: "Spinach", price: "$1.99" },
      { name: "Eggs", price: "$2.99" }
    ],
    lat: 40.7128,
    lng: -74.006,
    hours: "8:00 AM - 9:00 PM",
    phone: "(555) 123-4567",
    ebtAccepted: true,
  },
  {
    id: "store-b",
    name: "Store B",
    address: "347 Elmridge Blvd, Mellow",
    distance: "0.7 mi",
    healthScore: 78,
    basketCost: "$24.15",
    affordable: ["Apples", "Brown Rice", "Lentils", "Carrots", "Greek Yogurt"],
    items: [
      { name: "Apples", price: "$1.29 / lb" },
      { name: "Brown Rice", price: "$1.89" },
      { name: "Lentils", price: "$1.19" },
      { name: "Carrots", price: "$0.99" },
      { name: "Greek Yogurt", price: "$3.49" }
    ],
    lat: 40.7148,
    lng: -74.009,
    hours: "7:00 AM - 10:00 PM",
    phone: "(555) 234-5678",
    ebtAccepted: true,
  },
  {
    id: "store-c",
    name: "Store C",
    address: "589 Maplewood Dr, Mellow",
    distance: "1.1 mi",
    healthScore: 85,
    basketCost: "$31.60",
    affordable: ["Sweet Potatoes", "Canned Tuna", "Peanut Butter", "Broccoli", "Whole Wheat Bread"],
    items: [
      { name: "Sweet Potatoes", price: "$1.09 / lb" },
      { name: "Canned Tuna", price: "$1.29" },
      { name: "Peanut Butter", price: "$2.19" },
      { name: "Broccoli", price: "$1.49 / lb" },
      { name: "Whole Wheat Bread", price: "$1.99" }
    ],
    lat: 40.7108,
    lng: -74.003,
    hours: "8:00 AM - 10:00 PM",
    phone: "(555) 345-6789",
    ebtAccepted: false,
  },
  {
    id: "store-d",
    name: "Store D",
    address: "204 Cedarstone Rd, Mellow",
    distance: "1.5 mi",
    healthScore: 70,
    basketCost: "$21.90",
    affordable: ["Cabbage", "Dried Lentils", "Canned Tomatoes", "Onions", "Frozen Peas"],
    items: [
      { name: "Cabbage", price: "$0.79 / lb" },
      { name: "Dried Lentils", price: "$1.09" },
      { name: "Canned Tomatoes", price: "$0.99" },
      { name: "Onions", price: "$0.89 / lb" },
      { name: "Frozen Peas", price: "$1.29" }
    ],
    lat: 40.7168,
    lng: -74.012,
    hours: "9:00 AM - 8:00 PM",
    phone: "(555) 456-7890",
    ebtAccepted: true,
  },
  {
    id: "store-e",
    name: "Store E",
    address: "813 Pinehurst Lane, Mellow",
    distance: "2.0 mi",
    healthScore: 88,
    basketCost: "$35.20",
    affordable: ["Kale", "Quinoa", "Chickpeas", "Avocados", "Almond Milk"],
    items: [
      { name: "Kale", price: "$1.99" },
      { name: "Quinoa", price: "$2.99" },
      { name: "Chickpeas", price: "$0.89" },
      { name: "Avocados", price: "$1.25 each" },
      { name: "Almond Milk", price: "$2.99" }
    ],
    lat: 40.7088,
    lng: -73.999,
    hours: "8:00 AM - 9:00 PM",
    phone: "(555) 567-8901",
    ebtAccepted: true,
  },
];

export const MEAL_PLAN = [
  {
    day: "Mon",
    breakfast: { name: "Oatmeal + Banana", cal: 380 },
    lunch: { name: "Lentil Soup + Bread", cal: 490 },
    dinner: { name: "Bean Rice Bowl", cal: 560 },
    cost: "$4.20",
  },
  {
    day: "Tue",
    breakfast: { name: "Eggs + Toast", cal: 340 },
    lunch: { name: "Tuna Salad Wrap", cal: 450 },
    dinner: { name: "Veggie Stir-Fry", cal: 520 },
    cost: "$5.10",
  },
  {
    day: "Wed",
    breakfast: { name: "Greek Yogurt + Apple", cal: 290 },
    lunch: { name: "Peanut Butter Sandwich", cal: 480 },
    dinner: { name: "Sweet Potato + Beans", cal: 540 },
    cost: "$3.90",
  },
  {
    day: "Thu",
    breakfast: { name: "Oatmeal + Berries", cal: 360 },
    lunch: { name: "Chickpea Salad", cal: 410 },
    dinner: { name: "Brown Rice + Spinach", cal: 480 },
    cost: "$4.50",
  },
  {
    day: "Fri",
    breakfast: { name: "Banana + Peanut Butter", cal: 400 },
    lunch: { name: "Veggie Soup", cal: 320 },
    dinner: { name: "Pasta + Canned Tomatoes", cal: 590 },
    cost: "$4.80",
  },
  {
    day: "Sat",
    breakfast: { name: "Eggs + Vegetables", cal: 370 },
    lunch: { name: "Quinoa Bowl", cal: 460 },
    dinner: { name: "Lentil Curry + Rice", cal: 610 },
    cost: "$5.60",
  },
  {
    day: "Sun",
    breakfast: { name: "Oatmeal + Walnuts", cal: 420 },
    lunch: { name: "Bean Burrito", cal: 530 },
    dinner: { name: "Baked Potato + Salad", cal: 470 },
    cost: "$4.10",
  },
];

export const MONTH_PLAN = {
  "Week 1": [
    { day: "Mon", breakfast: { name: "Oatmeal + Banana", cal: 380 }, lunch: { name: "Lentil Soup + Bread", cal: 490 }, dinner: { name: "Bean Rice Bowl", cal: 560 }, cost: "$4.20" },
    { day: "Tue", breakfast: { name: "Eggs + Toast", cal: 340 }, lunch: { name: "Tuna Salad Wrap", cal: 450 }, dinner: { name: "Veggie Stir-Fry", cal: 520 }, cost: "$5.10" },
    { day: "Wed", breakfast: { name: "Greek Yogurt + Apple", cal: 290 }, lunch: { name: "Peanut Butter Sandwich", cal: 480 }, dinner: { name: "Sweet Potato + Beans", cal: 540 }, cost: "$3.90" },
    { day: "Thu", breakfast: { name: "Oatmeal + Berries", cal: 360 }, lunch: { name: "Chickpea Salad", cal: 410 }, dinner: { name: "Brown Rice + Spinach", cal: 480 }, cost: "$4.50" },
    { day: "Fri", breakfast: { name: "Banana + Peanut Butter", cal: 400 }, lunch: { name: "Veggie Soup", cal: 320 }, dinner: { name: "Pasta + Canned Tomatoes", cal: 590 }, cost: "$4.80" },
    { day: "Sat", breakfast: { name: "Eggs + Vegetables", cal: 370 }, lunch: { name: "Quinoa Bowl", cal: 460 }, dinner: { name: "Lentil Curry + Rice", cal: 610 }, cost: "$5.60" },
    { day: "Sun", breakfast: { name: "Oatmeal + Walnuts", cal: 420 }, lunch: { name: "Bean Burrito", cal: 530 }, dinner: { name: "Baked Potato + Salad", cal: 470 }, cost: "$4.10" }
  ],
  "Week 2": [
    { day: "Mon", breakfast: { name: "Oatmeal + Apple", cal: 350 }, lunch: { name: "Tuna Salad Wrap", cal: 450 }, dinner: { name: "Lentil Curry + Rice", cal: 610 }, cost: "$4.60" },
    { day: "Tue", breakfast: { name: "Banana + Peanut Butter", cal: 400 }, lunch: { name: "Bean Rice Bowl", cal: 560 }, dinner: { name: "Pasta + Canned Tomatoes", cal: 590 }, cost: "$4.30" },
    { day: "Wed", breakfast: { name: "Eggs + Toast", cal: 340 }, lunch: { name: "Veggie Soup", cal: 320 }, dinner: { name: "Sweet Potato + Beans", cal: 540 }, cost: "$3.80" },
    { day: "Thu", breakfast: { name: "Greek Yogurt + Banana", cal: 310 }, lunch: { name: "Peanut Butter Sandwich", cal: 480 }, dinner: { name: "Bean Burrito", cal: 530 }, cost: "$4.20" },
    { day: "Fri", breakfast: { name: "Oatmeal + Banana", cal: 380 }, lunch: { name: "Chickpea Salad", cal: 410 }, dinner: { name: "Veggie Stir-Fry", cal: 520 }, cost: "$4.90" },
    { day: "Sat", breakfast: { name: "Eggs + Vegetables", cal: 370 }, lunch: { name: "Lentil Soup + Bread", cal: 490 }, dinner: { name: "Baked Potato + Salad", cal: 470 }, cost: "$4.80" },
    { day: "Sun", breakfast: { name: "Oatmeal + Walnuts", cal: 420 }, lunch: { name: "Quinoa Bowl", cal: 460 }, dinner: { name: "Brown Rice + Spinach", cal: 480 }, cost: "$4.50" }
  ],
  "Week 3": [
    { day: "Mon", breakfast: { name: "Greek Yogurt + Apple", cal: 290 }, lunch: { name: "Chickpea Salad", cal: 410 }, dinner: { name: "Sweet Potato + Beans", cal: 540 }, cost: "$4.10" },
    { day: "Tue", breakfast: { name: "Oatmeal + Berries", cal: 360 }, lunch: { name: "Peanut Butter Sandwich", cal: 480 }, dinner: { name: "Veggie Stir-Fry", cal: 520 }, cost: "$4.40" },
    { day: "Wed", breakfast: { name: "Eggs + Toast", cal: 340 }, lunch: { name: "Tuna Salad Wrap", cal: 450 }, dinner: { name: "Lentil Curry + Rice", cal: 610 }, cost: "$5.30" },
    { day: "Thu", breakfast: { name: "Banana + Peanut Butter", cal: 400 }, lunch: { name: "Lentil Soup + Bread", cal: 490 }, dinner: { name: "Bean Rice Bowl", cal: 560 }, cost: "$4.50" },
    { day: "Fri", breakfast: { name: "Oatmeal + Banana", cal: 380 }, lunch: { name: "Veggie Soup", cal: 320 }, dinner: { name: "Pasta + Canned Tomatoes", cal: 590 }, cost: "$4.00" },
    { day: "Sat", breakfast: { name: "Eggs + Vegetables", cal: 370 }, lunch: { name: "Quinoa Bowl", cal: 460 }, dinner: { name: "Bean Burrito", cal: 530 }, cost: "$5.10" },
    { day: "Sun", breakfast: { name: "Oatmeal + Walnuts", cal: 420 }, lunch: { name: "Baked Potato + Salad", cal: 470 }, cost: "$4.20" }
  ],
  "Week 4": [
    { day: "Mon", breakfast: { name: "Oatmeal + Banana", cal: 380 }, lunch: { name: "Veggie Soup", cal: 320 }, dinner: { name: "Bean Rice Bowl", cal: 560 }, cost: "$3.90" },
    { day: "Tue", breakfast: { name: "Eggs + Toast", cal: 340 }, lunch: { name: "Tuna Salad Wrap", cal: 450 }, dinner: { name: "Lentil Curry + Rice", cal: 610 }, cost: "$5.40" },
    { day: "Wed", breakfast: { name: "Greek Yogurt + Apple", cal: 290 }, lunch: { name: "Peanut Butter Sandwich", cal: 480 }, dinner: { name: "Sweet Potato + Beans", cal: 540 }, cost: "$4.10" },
    { day: "Thu", breakfast: { name: "Oatmeal + Berries", cal: 360 }, lunch: { name: "Chickpea Salad", cal: 410 }, dinner: { name: "Brown Rice + Spinach", cal: 480 }, cost: "$4.60" },
    { day: "Fri", breakfast: { name: "Banana + Peanut Butter", cal: 400 }, lunch: { name: "Lentil Soup + Bread", cal: 490 }, dinner: { name: "Pasta + Canned Tomatoes", cal: 590 }, cost: "$4.90" },
    { day: "Sat", breakfast: { name: "Eggs + Vegetables", cal: 370 }, lunch: { name: "Quinoa Bowl", cal: 460 }, dinner: { name: "Veggie Stir-Fry", cal: 520 }, cost: "$5.00" },
    { day: "Sun", breakfast: { name: "Oatmeal + Walnuts", cal: 420 }, lunch: { name: "Bean Burrito", cal: 530 }, dinner: { name: "Baked Potato + Salad", cal: 470 }, cost: "$4.30" }
  ]
};

export const RECIPES = [
  {
    name: "Oatmeal + Banana",
    url: "https://www.allrecipes.com/recipe/244440/banana-oatmeal/",
    ingredients: ["1/2 cup Rolled Oats", "1 cup Water or Milk", "1 ripe Banana (sliced)", "Pinch of Cinnamon"],
    instructions: "In a saucepan, bring water or milk to a boil. Stir in oats and cook for 5 minutes over medium heat. Top with banana slices and cinnamon."
  },
  {
    name: "Lentil Soup + Bread",
    url: "https://www.allrecipes.com/recipe/13978/easy-lentil-soup/",
    ingredients: ["1 cup Dried Lentils", "1 Onion (diced)", "2 Carrots (sliced)", "1 can Diced Tomatoes", "Whole Wheat Bread"],
    instructions: "Sauté onions and carrots in a pot. Add lentils, diced tomatoes, and 4 cups of water. Bring to a boil, then cover and simmer for 30-40 minutes until lentils are tender. Serve hot with toasted bread."
  },
  {
    name: "Bean Rice Bowl",
    url: "https://www.allrecipes.com/recipe/222652/quick-black-beans-and-rice/",
    ingredients: ["1 cup Brown Rice", "1 can Black or Pinto Beans", "1/2 cup Spinach", "1/2 Onion (chopped)", "Spices (cumin, garlic powder)"],
    instructions: "Cook brown rice according to package directions. Sauté onions in a pan, add drained beans and spices, and warm through. Serve beans over rice and top with fresh or wilted spinach."
  },
  {
    name: "Eggs + Toast",
    url: "https://www.allrecipes.com/recipe/143809/best-scrambled-eggs/",
    ingredients: ["2 large Eggs", "2 slices Whole Wheat Bread", "1 tsp Butter or Oil", "Salt and Pepper"],
    instructions: "Whisk eggs with a pinch of salt and pepper. Heat butter in a pan over medium-low heat, add eggs, and scramble gently until set. Toast the bread and serve alongside."
  },
  {
    name: "Tuna Salad Wrap",
    url: "https://www.allrecipes.com/recipe/86274/tuna-salad-wrap/",
    ingredients: ["1 can Tuna (drained)", "2 tbsp Greek Yogurt", "1/4 cup Celery or Carrots (chopped)", "1 Tortilla Wrap"],
    instructions: "In a bowl, mix drained tuna, greek yogurt, and chopped celery/carrots. Spread the mixture onto a tortilla wrap, roll it up tightly, and slice in half."
  },
  {
    name: "Veggie Stir-Fry",
    url: "https://www.allrecipes.com/recipe/223382/easy-vegetable-stir-fry/",
    ingredients: ["1 cup Broccoli florets", "1/2 cup Carrots (sliced)", "1/2 cup Onions or Cabbage", "1 cup cooked Brown Rice", "1 tbsp Soy Sauce"],
    instructions: "Heat a skillet with a splash of oil. Add broccoli, carrots, and onions, and stir-fry for 5-7 minutes. Add soy sauce and stir, then serve over hot brown rice."
  },
  {
    name: "Greek Yogurt + Apple",
    url: "https://www.allrecipes.com/recipe/261395/honey-greek-yogurt-with-apples/",
    ingredients: ["1 cup Plain Greek Yogurt", "1 Apple (sliced)", "1 tsp Honey or Maple Syrup (optional)"],
    instructions: "Scoop yogurt into a bowl. Slice apple and arrange on top. Drizzle with honey or maple syrup if desired."
  },
  {
    name: "Peanut Butter Sandwich",
    url: "https://www.allrecipes.com/recipe/268533/sweet-potato-black-bean-bowls/",
    ingredients: ["2 slices Whole Wheat Bread", "2 tbsp Peanut Butter", "1/2 Banana or Apple (sliced, optional)"],
    instructions: "Spread peanut butter evenly onto one slice of bread. Top with banana or apple slices if using, then cover with the second slice."
  },
  {
    name: "Sweet Potato + Beans",
    url: "https://www.allrecipes.com/recipe/268533/sweet-potato-black-bean-bowls/",
    ingredients: ["1 medium Sweet Potato", "1/2 cup Canned Black Beans", "1/2 Onion (diced)", "Cumin, chili powder"],
    instructions: "Prick sweet potato with a fork and microwave for 5 minutes until soft. Slice open, mash slightly, and top with warmed black beans and sautéed onions."
  },
  {
    name: "Chickpea Salad",
    url: "https://www.allrecipes.com/recipe/14470/chickpea-salad/",
    ingredients: ["1 can Chickpeas (rinsed)", "1/2 cup Spinach (chopped)", "1/4 cup Onion (diced)", "1 tbsp Olive oil & Lemon juice"],
    instructions: "In a bowl, toss chickpeas, chopped spinach, and onion with olive oil, lemon juice, salt, and pepper. Serve cold."
  },
  {
    name: "Pasta + Canned Tomatoes",
    url: "https://www.allrecipes.com/recipe/269151/pasta-with-quick-cherry-tomato-sauce/",
    ingredients: ["2 oz Whole Wheat Pasta", "1/2 can Diced Tomatoes", "1 clove Garlic (minced)", "1 tsp Olive oil", "Dried oregano"],
    instructions: "Boil pasta. In a pan, sauté garlic in olive oil, then add tomatoes and oregano. Simmer for 10 minutes, toss with pasta, and serve."
  },
  {
    name: "Quinoa Bowl",
    url: "https://www.allrecipes.com/recipe/257321/easy-quinoa-salad-bowl/",
    ingredients: ["1/2 cup Quinoa", "1/2 cup Chickpeas or Lentils", "1/2 cup Kale or Spinach", "Lemon juice"],
    instructions: "Cook quinoa. Steam kale or spinach. In a bowl, assemble cooked quinoa, steamed greens, and chickpeas. Drizzle with lemon juice and a pinch of salt."
  },
  {
    name: "Lentil Curry + Rice",
    url: "https://www.allrecipes.com/recipe/229063/easy-lentil-curry/",
    ingredients: ["1/2 cup Lentils", "1 cup Brown Rice", "1 tbsp Curry Powder", "1/2 Onion (diced)", "Garlic"],
    instructions: "Cook rice. Sauté onion and garlic, then add lentils, curry powder, and 2 cups of water. Simmer covered for 30 minutes until soft. Serve curry over rice."
  },
  {
    name: "Bean Burrito",
    url: "https://www.allrecipes.com/recipe/13954/quick-and-easy-refried-bean-burritos/",
    ingredients: ["1 large Tortilla", "1/2 cup Canned Beans (mashed)", "1/4 cup Rice (optional)", "Salsa"],
    instructions: "Warm the tortilla in a dry skillet. Warm the mashed beans. Spread beans and rice onto tortilla, spoon salsa over them, roll up, and serve."
  },
  {
    name: "Baked Potato + Salad",
    url: "https://www.allrecipes.com/recipe/85337/microwave-baked-potato/",
    ingredients: ["1 Russet Potato", "1 cup Spinach or Mixed Greens", "1 tbsp Low-calorie Dressing", "Greek yogurt (optional, as sour cream)"],
    instructions: "Poke potato with a fork and microwave for 5-7 minutes. Serve with a side salad of spinach tossed in dressing."
  }
];

export const BUDGET = {
  monthly: 280,
  spent: 163,
  remaining: 117,
  avgSavings: 47,
  weeklySpend: [38, 42, 35, 48],
};

export const NOTIFICATIONS = [
  {
    id: "notif-1",
    title: "Double SNAP Dollars Available",
    message: "Store A is offering double value ($20 match) on SNAP/EBT purchases of fresh fruits and vegetables this weekend! Perfect time to stock up on spinach and bananas.",
    time: "2 hours ago",
    type: "promo",
    unread: true,
  },
  {
    id: "notif-2",
    title: "Monthly Budget Goal Hit!",
    message: "Awesome job! You are currently $17 under your planned budget for the first half of the month. Keep it up!",
    time: "1 day ago",
    type: "success",
    unread: true,
  },
  {
    id: "notif-3",
    title: "Smart Shopping Tip",
    message: "Buying dried lentils at Store D instead of canned beans at Store A can save you up to $0.40 per meal. Check the updated recipes!",
    time: "3 days ago",
    type: "info",
    unread: false,
  },
  {
    id: "notif-4",
    title: "Discount Alert at Store C",
    message: "Whole Wheat Bread is currently 15% off at Store C, bringing it down to $1.69 a loaf through Wednesday.",
    time: "5 days ago",
    type: "promo",
    unread: false,
  }
];
