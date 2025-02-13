import { ID } from "react-native-appwrite";
import { databases, config } from "./appwrite";
import {
  agentImages,
  galleryImages,
  propertiesImages,
  reviewImages,
} from "@/lib/data"

const COLLECTIONS = {
  BOORAL: config.booralsCollectionId,
  ROOMS: config.roomsCollectionId,
};

const genderTypes = [
  "male",
  "female",
  "other",
];

const categories = [
  "Restaurant",
  "Bar",
  "Cafe",
  "Streetfood",
  "Drink",
  "Others",
];

function getRandomSubset<T>(
  array: T[],
  minItems: number,
  maxItems: number
): T[] {
  if (minItems > maxItems) {
    throw new Error("minItems cannot be greater than maxItems");
  }
  if (minItems < 0 || maxItems > array.length) {
    throw new Error(
      "minItems or maxItems are out of valid range for the array"
    );
  }

  // Generate a random size for the subset within the range [minItems, maxItems]
  const subsetSize =
    Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;

  // Create a copy of the array to avoid modifying the original
  const arrayCopy = [...array];

  // Shuffle the array copy using Fisher-Yates algorithm
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[randomIndex]] = [
      arrayCopy[randomIndex],
      arrayCopy[i],
    ];
  }

  // Return the first `subsetSize` elements of the shuffled array
  return arrayCopy.slice(0, subsetSize);
}

async function seed() {
  try {
    // Clear existing data from all collections
    for (const key in COLLECTIONS) {
      const collectionId = COLLECTIONS[key as keyof typeof COLLECTIONS];
      const documents = await databases.listDocuments(
        config.databaseId!,
        collectionId!
      );
      for (const doc of documents.documents) {
        await databases.deleteDocument(
          config.databaseId!,
          collectionId!,
          doc.$id
        );
      }
    }

    console.log("Cleared all existing data.");

    // Seed hosts
    const boorals = [];
    for (let i = 1; i <= 5; i++) {
      const booral = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.BOORAL!,
        ID.unique(),
        {
          name: `booral ${i}`,
          email: `booral${i}@example.com`,
          avatar: agentImages[Math.floor(Math.random() * agentImages.length)],
        }
      );
      boorals.push(booral);
    }
    console.log(`Seeded ${boorals.length} agents.`);
    
    // Seed Properties
    for (let i = 1; i <= 20; i++) {
      const assignedBooral = boorals[Math.floor(Math.random() * boorals.length)];

      const selectedCategories = categories
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * categories.length) + 1);

      const image =
        propertiesImages.length - 1 >= i
          ? propertiesImages[i]
          : propertiesImages[
              Math.floor(Math.random() * propertiesImages.length)
            ];

      const room = await databases.createDocument(
        config.databaseId!,
        COLLECTIONS.ROOMS!,
        ID.unique(),
        {
          name: `Room ${i}`,
          description: `This is the description for Property ${i}.`,
          booral: assignedBooral.$id,
          guest: ['1', '2', '3'],
          location: `123 Room Street, City ${i}`,
          geolocation: `192.168.1.${i}, 192.168.1.${i}`,
          min_age: 21,
          max_age: 36,
          categories: selectedCategories,
          image: image,
        }
      );

      console.log(`Seeded property: ${room.name}`);
    }

    console.log("Data seeding completed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

export default seed;