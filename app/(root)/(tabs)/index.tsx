import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card } from "@/components/Card";
import BooralCard from "@/components/BooralCard";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";
import { rooms, boorals } from "@/constants/data";

export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const handleCardPress = (id: string) => {
    router.push(`/rooms/${id}`)
  };

  const handleBooralPress = (id: string) => {
    router.push(`/booral/${id}`)
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList 
        data={rooms}
        renderItem={({item}) => (
          <Card item={item} onPress={() => handleCardPress(item.id)} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="pb-24"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image source={{ uri: user?.avatar}} className="size-12 rounded-full" />
                <View className="flex flex-col items-start ml-2 justify-center">
                  <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
                  <Text className="text-base font-rubik-medium text-black-300">{user?.name}</Text>
                </View>
              </View>

              <Image source={icons.bell} className="size-6" />
            </View>

            <Search />
            
            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">Hot Booral🔥</Text>

                <TouchableOpacity>
                  <Text className="text-base font-rubik-medium text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>

              <FlatList 
                data={boorals}
                renderItem={({item}) => (
                  <BooralCard item={item} onPress={() => handleBooralPress(item.userId)}/>
                )}
                keyExtractor={(item) => item.userId.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">Latest Event</Text>
                <TouchableOpacity>
                  <Text className="text-base font-rubik-medium text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>

              <Filters />

            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
