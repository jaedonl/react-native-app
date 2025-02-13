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
      userId: '679866a199470e64e718',
      username: 'Jaedon',
      avatar: images.kimtan,
      age: 30,
      gender: 'Male',
    },
    boorals: ['123', '234', '345', '456'],
    publicity: true,
    size: 4,
    ageMin: 21,
    ageMax: 35,
    location: 'St Mark Pl, New York',
    categories: ['Bar', 'Drink'],
    gallery: ['izakaya1', 'izakaya2', 'izakaya3', 'izakaya4', 'izakaya5'],
    tags: ['Decibel', 'Sake', 'Izakaya'],
  },
  {
    id: '2',
    title: 'Street pizza crushing!',
    description: `Let's hit most famous pizzas in Lower East! We are meeting going to gather at Prince St Pizza at 7:00 p.m. We will pizza hop 3 famous pizza places near Lower East Side! The cost of the meal is expected to be about $30 each.`,
    hostBooral: {
      userId: '679866a199470e64e718',
      username: 'Jaedon',
      avatar: images.kimtan,
      age: 30,
      gender: 'Male',
    },
    boorals: ['123', '234', '345'],
    publicity: true,
    size: 4,
    ageMin: 21,
    ageMax: 35,
    location: 'Lower East Side, New York',
    categories: ['Streetfood', 'Drink'],
    gallery: ['pizza1', 'pizza2', 'pizza3', 'pizza4', 'pizza5'],
    tags: ['Prince St Pizza', 'Joes Pizza', 'Bleekers St Pizza','Johns Pizza', 'Julian Pizza'],
  },
  {
    id: '3',
    title: 'Bar hopping rabbits in West Village',
    description: `Crush all rockin bars We are meeting going to gather at West Village, Rubys at 8:00 p.m. Please bring your ID with you! Estimated cost expected to be about $70 - $90 per person.`,
    hostBooral: {
      userId: '679866a199470e64e718',
      username: 'Jaedon',
      avatar: images.kimtan,
      age: 30,
      gender: 'Male',
    },
    boorals: ['123', '234', '345'],
    publicity: true,
    size: 4,
    ageMin: 21,
    ageMax: 35,
    location: 'West Village, New York',
    categories: ['Bar', 'Drink'],
    gallery: ['barhopping1', 'barhopping2', 'barhopping3', 'barhopping4', 'barhopping5'],
    tags: ['Bar Hopping'],
  },
  {
    id: '4',
    title: 'Speakeasy in NYC',
    description: `Hitting famous speakeasy PDT. Let's talk about food, drinks, and the life. We will meet at 7:30 p.m. Please bring your ID.`,
    hostBooral: {
      userId: '679866a199470e64e718',
      username: 'Jaedon',
      avatar: images.kimtan,
      age: 30,
      gender: 'Male',
    },
    boorals: ['123'],
    publicity: true,
    size: 2,
    ageMin: 21,
    ageMax: 35,
    location: 'Downtown, New York',
    categories: ['Bar', 'Drink'],
    gallery: ['pdt1', 'pdt2', 'pdt3', 'pdt4', 'pdt5'],
    tags: ['PDT', 'Speakeasy'],
  },
]