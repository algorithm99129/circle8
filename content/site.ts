/* All copy for the marketing site. Edit here, not in the components. */

export const site = {
  name: "Circle8",
  tagline: "Your street, working together.",
  definition:
    "Circle8 pairs your shop with a neighbouring business every week for a partnership deal, and shows you how many customers it brings.",
  url: "https://circle8.app",
};

export type IconName =
  | "cafe" | "gym" | "salon" | "florist" | "clinic" | "book" | "tailor" | "bakery"
  | "join" | "match" | "tap" | "number"
  | "storefront" | "growth" | "gift" | "shield" | "eye-off" | "lock" | "scale";

export const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#week", label: "A week" },
  { href: "#benefits", label: "Benefits" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const facts = [
  { big: "8", label: "businesses in your circle, within walking distance, none competing with you" },
  { big: "1", label: "deal proposed every Monday, accepted with one tap" },
  { big: "100%", label: "of customers counted: every gift is claimed by code, so the Friday number is real" },
];

export const steps: { when: string; icon: IconName; title: string; text: string }[] = [
  {
    when: "Step 1 · once",
    icon: "join",
    title: "Join in 3 minutes",
    text: "Enter your phone number and your Google Maps link. Your name, address, hours and photos fill in on their own. No app store, no password.",
  },
  {
    when: "Step 2 · every Monday",
    icon: "match",
    title: "Get matched",
    text: "The app picks one neighbour from your circle who doesn't compete with you and proposes a deal: what you give their customers, what they give yours. Matches rotate, so over a few months you partner with everyone in your circle.",
  },
  {
    when: "Step 3 · one tap",
    icon: "tap",
    title: "Accept",
    text: "You receive a counter card, a poster and a social post, ready to print and share. Change the offer if you like; most owners don't need to.",
  },
  {
    when: "Step 4 · every Friday",
    icon: "number",
    title: "See the number",
    text: "How many customers came from your partner this week, how many you sent, and which offer worked best. No guessing.",
  },
];

export const benefits: { icon: IconName; title: string; points: string[] }[] = [
  {
    icon: "storefront",
    title: "If you're a busy shop",
    points: [
      "Every customer leaves with a gift from a neighbour, at no cost to you. The neighbour provides the gift.",
      "Send more customers than you receive and you're what we call an anchor: you get paid for the difference, or take free Pro instead.",
      "Ask for what you actually want back: customers in your quiet hours, bigger orders, or perks for your staff.",
      "No competing business can join your circle. You're the only café, the only gym, the only salon in it.",
    ],
  },
  {
    icon: "growth",
    title: "If you're growing",
    points: [
      "New customers arrive from the businesses next door, sent by owners their customers already trust.",
      "The poster, the counter card and the social post are made for you. Print and post, that's all.",
      "A real number every Friday, per partner, so you know what works.",
      "A customer list you own, built from redemptions with consent.",
    ],
  },
  {
    icon: "gift",
    title: "For your customers",
    points: [
      "A real gift, not a discount coupon: a free class, a free coffee, a free consultation.",
      "They scan a card, get a code by text message, and use it next door.",
      "No app, no account, no spam. One message, and they can opt out any time.",
      "They discover good businesses next door, recommended by one they already use.",
    ],
  },
];

export const compare = {
  columns: ["The street WhatsApp group", "Groupon-style deals", "Social ads", "Circle8"],
  shortColumns: ["WhatsApp group", "Groupon-style deals", "Social ads", "Circle8"],
  rows: [
    { label: "Finds you the right partner", values: ["No", "No", "No", "Yes, every Monday, never a competitor"] },
    { label: "Makes the material", values: ["No", "You build the deal", "You build the ad", "Poster, card and post, done"] },
    { label: "Shows the result", values: ["No", "Vouchers sold", "Clicks", "Customers, per partner, every Friday"] },
    { label: "What it costs", values: ["Free, and nothing happens", "About half the deal price", "Several dollars per customer", "Free to join; Pro about $29 a month"] },
    { label: "Your time per week", values: ["Reading", "Handling a rush", "Managing ads", "Under five minutes"] },
  ],
};

export const plans = [
  {
    name: "Member",
    price: "Free",
    per: "",
    who: "For every business with a front door.",
    featured: false,
    points: ["A place in a circle of eight", "A match proposed every Monday", "One active deal at a time", "Counter card and offer page", "The Friday number"],
  },
  {
    name: "Pro",
    price: "$29",
    per: "per month",
    who: "For owners who want more than one deal running.",
    featured: true,
    points: ["Unlimited deals at once", "Posters, social posts, Google Maps posts", "Your customer list and campaigns", "Results per partner, per offer, per weekday", "Priority in matching"],
  },
  {
    name: "Street plan",
    price: "from $200",
    per: "per month",
    who: "For associations, landlords and malls.",
    featured: false,
    points: ["Pro for every business on the street", "Monthly Street Quests and events", "A public street page", "A monthly footfall report"],
  },
];

export const privacyPoints: { icon: IconName; title: string; text: string }[] = [
  { icon: "eye-off", title: "You upload nothing.", text: "The customer claims the gift on their own phone. You never see which customer took what, and you never hand over a list." },
  { icon: "lock", title: "Your partner sees a code, not a person.", text: "Until the customer walks in and shows it, the partner has no name, no number, no profile. Partners see counts, never people." },
  { icon: "shield", title: "Nobody can message your customers but the app, and only with a yes.", text: "Follow-ups go out only if the customer agreed at claim time, about once a month, with opt-out in every message." },
  { icon: "scale", title: "Your numbers stay private.", text: "A partner sees only the result of your shared deal, never your totals." },
];

export const faqs = [
  { q: "Do my customers need an app?", a: "No. They scan the counter card or tap a link, enter their phone number, and get a code by text message. That code is their gift. No download, no account." },
  { q: "Do I need to install anything?", a: "No. Circle8 runs in your phone's browser; you can add it to your home screen like an app if you like. There is nothing to download from an app store and no password to remember." },
  { q: "Do I have to attend meetings or chat every day?", a: "No. The whole week is one tap on Monday and a glance on Friday. There is a chat for your circle inside the app, but nothing depends on it." },
  { q: "What if my partner doesn't accept the match?", a: "Then no deal runs that week and nothing is printed or counted. On Tuesday the app offers you the next-best neighbour, and you're matched again the following Monday. Declining a match now and then has no penalty." },
  { q: "What if I'm fully booked and have nothing spare to give?", a: "Give something that doesn't need capacity: a small add-on (a pastry with any coffee, a sample, a 10-minute consultation), or a perk for your partner's staff. Or become an anchor: send customers, receive fewer, and get paid or free Pro for the difference." },
  { q: "What if a partner competes with me?", a: "It can't happen inside a circle. Each circle has one business per category: one café, one gym, one salon. You can also decline any match, and you can ask us to change your circle." },
  { q: "What does it cost me to give a gift?", a: "Only what you choose to give, and the app suggests gifts that use spare capacity: a coffee that costs you 40 cents, an empty class spot, a quiet Tuesday chair. You set a limit per deal, and you can change the offer before you accept." },
  { q: "What if I send far more customers than I receive?", a: "Then you're what we call an anchor, and the app pays you back: your extra credits become free Pro, a monthly payout for redeemed customers, or reach to the whole street. You can also ask for what you'd rather receive, such as customers in your quiet hours or perks for your staff." },
  { q: "What if I receive more than I send?", a: "You pay about $1 per extra customer, capped at $40 a month. The amount is shown in the app for two days before it's charged, and we only ask for payment details at that point or when you upgrade to Pro. If it keeps happening, the app asks you to add a more attractive gift so the exchange stays fair." },
  { q: "Which businesses can join?", a: "Any business with a front door and customers: cafés, restaurants, bakeries, gyms and studios, salons and barbers, clinics, shops, repair and home services. Online-only businesses can't join a street circle yet." },
  { q: "Do I need a particular card machine or till?", a: "No. Circle8 works alongside whatever you use. Gifts are claimed on the customer's phone and redeemed by scanning or typing a code in the app, so nothing connects to your payment system." },
  { q: "How do you stop fake claims?", a: "Every claim is verified by a code sent to the customer's phone, one claim per phone per business, with limits on how fast claims can come from one place. Senders whose customers don't show up stop earning credits until they do, and you can dispute any claim within seven days." },
  { q: "Is my street covered?", a: "We open one street at a time and start when at least fifteen businesses on it have signed up, anchors first. Tell us your street below; if enough neighbours ask, we'll come and open it." },
];

export const categories = [
  "Café or restaurant", "Bakery or food shop", "Gym or studio", "Salon or barber", "Clinic or wellness", "Shop", "Repair or home service", "Other",
];

export const sizes = ["Under 30", "30–100", "100–300", "More than 300"];
