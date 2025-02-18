import { ID } from "react-native-appwrite";
import icons from "./icons";

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
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '1',
    age: 26,
    gender: 'Female',
    location: 'Queens, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "1",
    views: 2703,
    totalviews: 72392,
    posts: [
      {
        postId: '1',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likes: 111,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '2',
        createdAt: Date.now(),
        body: 'Nulla et enim nec elit ornare luctus.',
        likes: 111,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now().toLocaleString()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '3',
        createdAt: Date.now(),
        body: 'Cras ut posuere urna. Vestibulum vulputate nulla semper ultrices laoreet. Fusce posuere sapien vel mauris auctor pellentesque.',
        likes: 111,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      }
    ]
  },
  {
    userId: '2',
    name: 'Minyoung Kim',
    username: 'minyong',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '2',
    age: 30,
    gender: 'Female',
    location: 'Long Island City, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 1893,
    totalviews: 72392,
    posts: [
      {
        postId: '4',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 222,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '5',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 222,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      }
    ]
  },
  {
    userId: '3',
    name: 'Jaedon Lee',
    username: 'Dicdon',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '3',
    age: 30,
    gender: 'Male',
    location: 'Midtown, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "2",
    views: 1939,
    totalviews: 72392,
    posts: [
      {
        postId: '6',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 333,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '7',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 333,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      }
    ]
  },
  {
    userId: '4',
    name: 'Snapchat Filter',
    username: 'Snapshit',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '4',
    age: 22,
    gender: 'Male',
    location: 'Midtown, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 1233,
    totalviews: 72392,
    posts: [
      {
        postId: '8',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 444,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '9',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 444,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      }
    ]
  },
  {
    userId: '5',
    name: 'Choyun Kim',
    username: 'chocho',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '5',
    age: 30,
    gender: 'Female',
    location: 'Midtown, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 2316,
    totalviews: 72392,
    posts: [
      {
        postId: '10',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 555,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '11',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 555,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      }
    ]
  },
  {
    userId: '6',
    name: 'Hobum Yoon',
    username: 'Hob',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '6',
    age: 31,
    gender: 'Male',
    location: 'Edgewater, New Jersey',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 1193,
    totalviews: 72392,
    posts: [
      {
        postId: '12',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 666,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '13',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 666,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      }
    ]
  },
  {
    userId: '7',
    name: 'Oliver Sam',
    username: 'Olivermanigga',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '7',
    age: 38,
    gender: 'Male',
    location: 'Bronx, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "3",
    views: 902,
    totalviews: 72392,
    posts: [
      {
        postId: '14',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 777,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '15',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 777,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      }
    ]
  },
  {
    userId: '8',
    name: 'Def con',
    username: 'Defcon',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '8',
    age: 46,
    gender: 'Male',
    location: 'Queens, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "4",
    views: 743,
    totalviews: 72392,
    posts: [
      {
        postId: '16',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 888,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
      {
        postId: '17',
        createdAt: Date.now(),
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        likes: 888,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      }
    ]
  },
  {
    userId: '9',
    name: 'Tan Kim',
    username: 'kimtan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit tortor, sodales eu porta ac, pellentesque sit amet ex.',
    avatar: '9',
    age: 27,
    gender: 'Male',
    location: 'Upper West, New York',
    tags: ['Bar', 'Drink'],
    gallery: [1,2,3,4,5,6,7,8,9],
    upcoming: "",
    views: 3450,
    totalviews: 72392,
    posts: [
      {
        postId: '18',
        createdAt: Date.now(),
        // body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque posuere porta.',
        body: '재도니.. 은서.. 좋아하냐..?',
        likes: 999,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          },
        ]
      },
      {
        postId: '19',
        createdAt: Date.now(),
        body: '아-앙- 개꿀딱스, 은서 사랑 버-억^^',
        likes: 999,
        comments: [
          {
            booralId: '3',
            comment: 'lol 😂',
            createdAt: Date.now()
          },
          {
            booralId: '8',
            comment: '😂😂😂😂😂',
            createdAt: Date.now()
          }
        ]
      },
    ]
  },
]