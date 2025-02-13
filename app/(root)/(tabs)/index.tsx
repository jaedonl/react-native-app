import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Card";
import Filters from "@/components/Filters";
import { useGlobalContext } from "@/lib/global-provider";
import { rooms } from "@/constants/data";


export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const handleCardPress = (id: string) => {
    router.push(`/rooms/${id}`)
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList 
        data={rooms}
        // numColumns={2}
        renderItem={({item}) => (
          <Card item={item} onPress={() => handleCardPress(item.id)} />
        )}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-24"
        // columnWrapperClassName="flex gap-5 px-5"
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
                <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>

                <TouchableOpacity>
                  <Text className="text-base font-rubik-medium text-primary-300">See All</Text>
                </TouchableOpacity>
              </View>

              <FlatList 
                data={rooms}
                renderItem={({item}) => <FeaturedCard item={item} onPress={() => handleCardPress(item.id)}/>}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                contentContainerClassName="flex gap-5 mt-5"
              />
            </View>

            <View className="my-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
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
