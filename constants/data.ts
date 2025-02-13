import { ID } from "react-native-appwrite";
import icons from "./icons";
import images from "./images";

export const cards = [
  {
    title: "Card 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    category: "house",
    image: images.newYork,
  },
  {
    title: "Card 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    category: "house",
    image: images.japan,
  },
  {
    title: "Card 3",
    location: "Location 3",
    price: "$300",
    rating: 2,
    category: "flat",
    image: images.newYork,
  },
  {
    title: "Card 4",
    location: "Location 4",
    price: "$400",
    rating: 5,
    category: "villa",
    image: images.japan,
  },
];

export const featuredCards = [
  {
    title: "Featured 1",
    location: "Location 1",
    price: "$100",
    rating: 4.8,
    image: images.newYork,
    category: "house",
  },
  {
    title: "Featured 2",
    location: "Location 2",
    price: "$200",
    rating: 3,
    image: images.japan,
    category: "flat",
  },
];

export const categories = [
  { title: "All", category: "All" },
  { title: "Dinner", category: "Dinner" },
  { title: "Lunch", category: "Lunch" },
  { title: "Brunch", category: "Brunch" },
  { title: "Breakfast", category: "Breakfast" },
  { title: "Bar", category: "Bar" },
  { title: "Cafe", category: "Coffee" },
  { title: "Streetfood", category: "Streetfood" },
  { title: "Drink", category: "Drink" },
  { title: "Others", category: "Others" },
];

export const settings = [
  {
    title: "My Bookings",
    icon: icons.calendar,
  },
  {
    title: "Payments",
    icon: icons.wallet,
  },
  {
    title: "Profile",
    icon: icons.person,
  },
  {
    title: "Notifications",
    icon: icons.bell,
  },
  {
    title: "Security",
    icon: icons.shield,
  },
  {
    title: "Language",
    icon: icons.language,
  },
  {
    title: "Help Center",
    icon: icons.info,
  },
  {
    title: "Invite Friends",
    icon: icons.people,
  },
];

// publicity, max guests, age limit, location, language
export const rules = [
  {
    title: "Laundry",
    icon: icons.laundry,
  },
  {
    title: "Car Parking",
    icon: icons.carPark,
  },
  {
    title: "Sports Center",
    icon: icons.run,
  },
  {
    title: "Cutlery",
    icon: icons.cutlery,
  },
  {
    title: "Gym",
    icon: icons.dumbell,
  },
  {
    title: "Swimming pool",
    icon: icons.swim,
  },
  {
    title: "Wifi",
    icon: icons.wifi,
  },
  {
    title: "Pet Center",
    icon: icons.dog,
  },
];

export const gallery = [
  {
    id: 1,
    image: images.newYork,
  },
  {
    id: 2,
    image: images.japan,
  },
  {
    id: 3,
    image: images.newYork,
  },
  {
    id: 4,
    image: images.japan,
  },
  {
    id: 5,
    image: images.newYork,
  },
  {
    id: 6,
    image: images.japan,
  },
];

export const rooms = [
  {
    id: '1',
    title: 'Izakaya lovers only!',
    description: `Let's have some izakaya food and sake! We are meeting going to gather at Izakaya Nomad at 7:30 p.m. Please bring your ID with you! The cost of the meal is expected to be about $50 - $90 per person.`,
    hostBooral: {
      userId: '3',
      username: 'Dicdon',
      avatar: '3',
      age: 30,
      gender: 'Male',
    },
    boorals: ['4', '6', '7', '8'],
    publicity: true,
    size: 4,
    ageMin: 21,
    ageMax: 35,
    location: 'Flatiron, New York',
    map: {
      latitude: 40.74418, 
      longitude: -73.98946,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    categories: ['Bar', 'Drink'],
    gallery: ['izakaya1', 'izakaya2', 'izakaya3', 'izakaya4', 'izakaya5'],
    tags: ['Decibel', 'Sake', 'Izakaya'],
    upcoming: "FRI, 14th",
  },
  {
    id: '2',
    title: 'Street pizza crushing!',
    description: `Let's hit most famous pizzas in Lower East! We are meeting going to gather at Prince St Pizza at 7:00 p.m. We will pizza hop 3 famous pizza places near Lower East Side! The cost of the meal is expected to be about $30 each.`,
    hostBooral: {
      userId: '7',
      username: 'Olivermanigga',
      avatar: '7',
      age: 38,
      gender: 'Male',
    },
    boorals: ['1', '2', '5'],
    publicity: true,
    size: 4,
    ageMin: 21,
    ageMax: 35,
    location: 'Lower East Side, New York',
    map: {
      latitude: 40.72324, 
      longitude: -73.99454,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    categories: ['Streetfood', 'Drink'],
    gallery: ['pizza1', 'pizza2', 'pizza3', 'pizza4', 'pizza5'],
    tags: ['Prince St Pizza', 'Joes Pizza', 'Bleekers St Pizza','Johns Pizza', 'Julian Pizza'],
    upcoming: "SAT, 15th",
  },
  {
    id: '3',
    title: 'Bar hopping rabbits in West Village',
    description: `Crush all rockin bars We are meeting going to gather at West Village, Rubys at 8:00 p.m. Please bring your ID with you! Estimated cost expected to be about $70 - $90 per person.`,
    hostBooral: {
      userId: '8',
      username: 'Defcon',
      avatar: '8',
      age: 36,
      gender: 'Male',
    },
    boorals: ['2', '6', '7'],
    publicity: true,
    size: 4,
    ageMin: 21,
    ageMax: 35,
    location: 'West Village, New York',
    map: {
      latitude: 40.73437, 
      longitude: -74.00274,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    categories: ['Bar', 'Drink'],
    gallery: ['barhopping1', 'barhopping2', 'barhopping3', 'barhopping4', 'barhopping5'],
    tags: ['Bar Hopping', 'Beer', 'Whiskey', 'Cocktail'],
    upcoming: "FRI, 14th",
  },
  {
    id: '4',
    title: 'Speakeasy in NYC',
    description: `Hitting famous speakeasy PDT. Let's talk about food, drinks, and the life. We will meet at 7:30 p.m. Please bring your ID.`,
    hostBooral: {
      userId: '1',
      username: 'flushingTwice',
      avatar: '1',
      age: 27,
      gender: 'Female',
    },
    boorals: ['123'],
    publicity: true,
    size: 2,
    ageMin: 21,
    ageMax: 35,
    location: 'Downtown, New York',
    map: {
      latitude: 40.72722, 
      longitude: -73.98372,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    categories: ['Bar', 'Drink'],
    gallery: ['pdt1', 'pdt2', 'pdt3', 'pdt4', 'pdt5'],
    tags: ['PDT', 'Speakeasy'],
    upcoming: "THU, 13rd",
  },
  {
    id: '5',
    title: 'Distillery in Brooklyn Red Hook',
    description: `NYC Brooklyn city distillery experiences!. We will meet at 2:30 p.m. Please bring your ID.`,
    hostBooral: {
      userId: '2',
      username: 'minyong',
      avatar: '2',
      age: 30,
      gender: 'Female',
    },
    boorals: ['123'],
    publicity: true,
    size: 2,
    ageMin: 21,
    ageMax: 35,
    location: 'Red Hook Brooklyn, New York',
    map: {
      latitude: 40.67762, 
      longitude: -74.01523,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    categories: ['Bar', 'Drink'],
    gallery: ['pdt1', 'pdt2', 'pdt3', 'pdt4', 'pdt5'],
    tags: ['PDT', 'Speakeasy'],
    upcoming: "SAT, 15th",
  },
  {
    id: '6',
    title: 'K-BBQ Night!',
    description: `Hitting Korean BBQ in Korea Town NYC! We might drink so if you want to drink, bring your ID. We will meet at 6:30 p.m.`,
    hostBooral: {
      userId: '6',
      username: 'hob',
      avatar: '6',
      age: 31,
      gender: 'Male',
    },
    boorals: ['123'],
    publicity: true,
    size: 6,
    ageMin: 21,
    ageMax: 35,
    location: 'Midtown, New York',
    map: {
      latitude: 40.74773, 
      longitude: -73.98684,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
    categories: ['Bar', 'Drink'],
    gallery: ['pdt1', 'pdt2', 'pdt3', 'pdt4', 'pdt5'],
    tags: ['PDT', 'Speakeasy'],
    upcoming: "THU, 13rd",
  },
]

export const boorals = [
  {
    userId: '1',
    name: 'Hyunjin Kim',
    username: 'flushingTwice',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '1',
    age: 26,
    gender: 'Female',
    location: 'Queens, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "1",
    views: 2703
  },
  {
    userId: '2',
    name: 'Minyoung Kim',
    username: 'minyong',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '2',
    age: 30,
    gender: 'Female',
    location: 'Long Island City, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 1893
  },
  {
    userId: '3',
    name: 'Jaedon Lee',
    username: 'Dicdon',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '3',
    age: 30,
    gender: 'Male',
    location: 'Midtown, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "2",
    views: 1939
  },
  {
    userId: '4',
    name: 'Snapchat Filter',
    username: 'Snapshit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '4',
    age: 22,
    gender: 'Male',
    location: 'Midtown, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 1233
  },
  {
    userId: '5',
    name: 'Choyun Kim',
    username: 'chocho',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '5',
    age: 30,
    gender: 'Female',
    location: 'Midtown, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 2316
  },
  {
    userId: '6',
    name: 'Hobum Yoon',
    username: 'Hob',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '6',
    age: 31,
    gender: 'Male',
    location: 'Edgewater, New Jersey',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 1193
  },
  {
    userId: '7',
    name: 'Oliver Sam',
    username: 'Olivermanigga',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '7',
    age: 38,
    gender: 'Male',
    location: 'Bronx, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "3",
    views: 902
  },
  {
    userId: '8',
    name: 'Def con',
    username: 'Defcon',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '8',
    age: 46,
    gender: 'Male',
    location: 'Queens, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "4",
    views: 743
  },
  {
    userId: '9',
    name: 'Tan Kim',
    username: 'kimtan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex. Maecenas a dolor nec mi pretium volutpat. Donec sed egestas ligula. Vestibulum ac vehicula lectus.',
    avatar: '9',
    age: 27,
    gender: 'Male',
    location: 'Upper West, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 3450
  },
]