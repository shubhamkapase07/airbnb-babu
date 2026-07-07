// All content for the Candolim listing, mirroring the reference page.
// Stored in the frontend (no backend needed for this task).

export type Photo = { src: string; alt: string; caption?: string };

export const photos: Photo[] = [
  { src: "/images/02-lounge.jpg", alt: "Living room with sofa and staircase", caption: "Living room" },
  { src: "/images/12-dining.jpg", alt: "Cozy seating area with grey sofa", caption: "Living room" },
  { src: "/images/10-bathroom.jpg", alt: "Bathroom with freestanding tub", caption: "Bathroom" },
  { src: "/images/04-bedroom.jpg", alt: "Bedroom with wooden accents and plants", caption: "Bedroom" },
  { src: "/images/14-hottub.jpg", alt: "Tropical pool lined with palm trees", caption: "Exterior" },
  { src: "/images/13-balcony.jpg", alt: "Modern living area with wood feature wall", caption: "Living room" },
  { src: "/images/07-livingroom.jpg", alt: "Bright living room with plants", caption: "Living room" },
  { src: "/images/06-bedroom2.jpg", alt: "Elegant bedroom with tufted headboard", caption: "Bedroom" },
  { src: "/images/09-kitchen.jpg", alt: "Fully equipped kitchen", caption: "Kitchen" },
  { src: "/images/08-pool.jpg", alt: "Resort swimming pool at sunset", caption: "Exterior" },
  { src: "/images/03-jacuzzi.jpg", alt: "Modern bathroom with glass shower", caption: "Bathroom" },
  { src: "/images/11-terrace.jpg", alt: "Dining area with modern furnishings", caption: "Dining area" },
  { src: "/images/05-exterior.jpg", alt: "Villa exterior with pool", caption: "Exterior" },
  { src: "/images/01-living.jpg", alt: "Building exterior at dusk", caption: "Exterior" },
];

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment in Candolim, India",
  specs: ["3 guests", "1 bedroom", "1 bed", "1 bathroom"],
  rating: 4.95,
  reviewsCount: 19,
  guestFavourite: true,
  location: "Candolim, Goa, India",
  price: 28499, // per stay total shown as "for 5 nights"
  nights: 5,
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  guests: 2,
  freeCancellationDate: "17 October",
  host: {
    name: "Mirashya Homes",
    since: "2 years hosting",
    avatar: "/images/host-logo.svg",
    reviews: 1463,
    rating: 4.68,
    yearsHosting: 2,
    verified: true,
    bornIn: "Born in the 80s",
    school: "Where I went to school: NICMAR GOA",
    responseRate: "100%",
    responseTime: "Responds within an hour",
  },
  coHosts: [
    "Sharath",
    "Aman Dev Pahwa",
    "Maria Karen Priyanka",
    "Simran",
    "Pallavi",
    "Sanyukta",
    "Shruti",
    "Amisha",
  ],
  highlights: [
    {
      icon: "outdoor",
      title: "Outdoor entertainment",
      body: "The pool and alfresco dining are great for summer trips.",
    },
    {
      icon: "cool",
      title: "Designed for staying cool",
      body: "Beat the heat with the A/C and ceiling fan.",
    },
    {
      icon: "key",
      title: "Self check-in",
      body: "You can check in with the building staff.",
    },
  ],
  description: `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖, popular cafés, restaurants, and nightlife 🍸, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴`,
  sleeping: [
    { title: "Bedroom", detail: "1 double bed", img: "/images/06-bedroom2.jpg" },
    { title: "Living room", detail: "1 sofa", img: "/images/07-livingroom.jpg" },
  ],
  ratingCategories: [
    { label: "Cleanliness", value: "5.0", icon: "cleanliness" },
    { label: "Accuracy", value: "5.0", icon: "accuracy" },
    { label: "Check-in", value: "5.0", icon: "checkin" },
    { label: "Communication", value: "5.0", icon: "communication" },
    { label: "Location", value: "4.8", icon: "location" },
    { label: "Value", value: "4.8", icon: "value" },
  ],
  ratingBars: [
    { star: 5, pct: 96 },
    { star: 4, pct: 4 },
    { star: 3, pct: 0 },
    { star: 2, pct: 0 },
    { star: 1, pct: 0 },
  ],
  reviewTags: [
    { emoji: "🛋️", label: "Comfort", count: 6 },
    { emoji: "✅", label: "Accuracy", count: 5 },
    { emoji: "🛁", label: "Hot tub", count: 5 },
    { emoji: "🏠", label: "Condition", count: 4 },
    { emoji: "🎁", label: "Hospitality", count: 8 },
    { emoji: "🧼", label: "Cleanliness", count: 4 },
    { emoji: "🎂", label: "Amenities", count: 2 },
    { emoji: "📍", label: "Location", count: 3 },
  ],
  things: {
    cancellation:
      "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
    houseRules: ["Check-in after 2:00 pm", "3 guests maximum", "Pets allowed"],
    safety: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
  },
  neighbourhood:
    "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
};

export type Amenity = { label: string; icon: string; unavailable?: boolean };

// Shown on the page (6) + full list (behind "Show all 50 amenities")
export const amenities: Amenity[] = [
  { label: "Kitchen", icon: "kitchen" },
  { label: "Wifi", icon: "wifi" },
  { label: "Dedicated workspace", icon: "workspace" },
  { label: "Free parking on premises", icon: "parking" },
  { label: "Pool", icon: "pool" },
  { label: "Hot tub", icon: "hottub" },
  { label: "Pets allowed", icon: "pets" },
  { label: "Exterior security cameras on property", icon: "camera" },
  { label: "Carbon monoxide alarm", icon: "co", unavailable: true },
  { label: "Smoke alarm", icon: "smoke", unavailable: true },
];

export const amenityGroups: { group: string; items: Amenity[] }[] = [
  {
    group: "Scenic views",
    items: [
      { label: "Garden view", icon: "view" },
      { label: "Pool view", icon: "view" },
    ],
  },
  {
    group: "Bathroom",
    items: [
      { label: "Hot tub", icon: "hottub" },
      { label: "Hair dryer", icon: "hairdryer" },
      { label: "Shampoo", icon: "shampoo" },
      { label: "Hot water", icon: "hotwater" },
    ],
  },
  {
    group: "Bedroom and laundry",
    items: [
      { label: "Washer", icon: "washer" },
      { label: "Essentials", icon: "essentials" },
      { label: "Hangers", icon: "hangers" },
      { label: "Bed linens", icon: "linens" },
      { label: "Iron", icon: "iron" },
    ],
  },
  {
    group: "Entertainment",
    items: [
      { label: "42\" HDTV with Netflix", icon: "tv" },
      { label: "Sound system", icon: "sound" },
    ],
  },
  {
    group: "Heating and cooling",
    items: [
      { label: "Air conditioning", icon: "cool" },
      { label: "Ceiling fan", icon: "fan" },
    ],
  },
  {
    group: "Internet and office",
    items: [
      { label: "Wifi", icon: "wifi" },
      { label: "Dedicated workspace", icon: "workspace" },
    ],
  },
  {
    group: "Kitchen and dining",
    items: [
      { label: "Kitchen", icon: "kitchen" },
      { label: "Refrigerator", icon: "fridge" },
      { label: "Microwave", icon: "microwave" },
      { label: "Cooking basics", icon: "cooking" },
      { label: "Dishes and silverware", icon: "dishes" },
      { label: "Stove", icon: "stove" },
      { label: "Coffee maker", icon: "coffee" },
    ],
  },
  {
    group: "Location features",
    items: [
      { label: "Private entrance", icon: "entrance" },
    ],
  },
  {
    group: "Outdoor",
    items: [
      { label: "Private patio or balcony", icon: "balcony" },
      { label: "Outdoor furniture", icon: "furniture" },
      { label: "Outdoor dining area", icon: "dining" },
    ],
  },
  {
    group: "Parking and facilities",
    items: [
      { label: "Free parking on premises", icon: "parking" },
      { label: "Pool", icon: "pool" },
    ],
  },
  {
    group: "Services",
    items: [
      { label: "Pets allowed", icon: "pets" },
      { label: "Self check-in", icon: "key" },
      { label: "Building staff", icon: "staff" },
    ],
  },
  {
    group: "Not included",
    items: [
      { label: "Carbon monoxide alarm", icon: "co", unavailable: true },
      { label: "Smoke alarm", icon: "smoke", unavailable: true },
    ],
  },
];

export type Review = {
  name: string;
  avatar?: string;
  initial?: string;
  avatarBg?: string;
  tenure: string;
  when: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Amit",
    initial: "A",
    avatarBg: "#f2e4d4",
    tenure: "2 months on Airbnb",
    when: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
  },
  {
    name: "Aheesh",
    avatar: "/images/rev-aheesh.jpg",
    tenure: "3 years on Airbnb",
    when: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to come back again.",
  },
  {
    name: "Samiksha",
    avatar: "/images/rev-samiksha.jpg",
    tenure: "8 months on Airbnb",
    when: "May 2026",
    text: "the host nitish was really great help",
  },
  {
    name: "Vedant",
    initial: "V",
    avatarBg: "#e6e0f8",
    tenure: "4 years on Airbnb",
    when: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. Highly recommend for anyone visiting North Goa.",
  },
  {
    name: "Vaibhav S",
    avatar: "/images/rev-vaibhav.jpg",
    tenure: "3 years on Airbnb",
    when: "May 2026",
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
  },
  {
    name: "Mohd",
    avatar: "/images/rev-mohd.jpg",
    tenure: "5 years on Airbnb",
    when: "May 2026",
    text: "Great place. Exactly as described in the listing.",
  },
];
