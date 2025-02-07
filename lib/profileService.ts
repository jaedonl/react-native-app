import { Client, Databases, Permission, Role } from 'react-native-appwrite';
import { config, client } from './appwrite';  // reuse your existing client setup

const database = new Databases(client);

export async function createUserProfile(userId: string, profileData: { 
    username: string; 
    age: number; 
    [key: string]: any; 
}) {
  try {
    // Replace 'YOUR_DATABASE_ID' and 'profiles' with your actual IDs
    const profile = await database.createDocument(
      `${process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID}`, // 'Your database ID'
      `${process.env.EXPO_PUBLIC_APPWRITE_BOORALS_COLLECTION_ID}`, // 'Your profiles collection ID'
      userId, // using the Appwrite account ID as the document ID
      profileData,
      [
        Permission.read(Role.user(userId)),
        Permission.write(Role.user(userId))
      ]
    );
    console.log("Profile created:", profile);
    return profile;
  } catch (error) {
    console.error("Error creating user profile:", error);
    return null;
  }
}
