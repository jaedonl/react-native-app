import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, Dimensions, Platform, SafeAreaView, StyleSheet, Button } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';
import { useGlobalContext } from "@/lib/global-provider";
import { rooms, boorals } from "@/constants/data";

const Booral = () => {
  const { id } = useLocalSearchParams();
  const booral = boorals[parseInt(id.toString()) - 1];
  
  const beBooral = (id: string) => {}

  return (
    <SafeAreaView className="bg-white h-full">
      <View className='flex flex-row gap-4 px-5 mt-4'>
        <Image 
          source={booral.avatar === '1' ? images.hyunjin : booral.avatar === '2' ? images.minyoung : booral.avatar === '3' ? images.jaedon : booral.avatar === '4' ? images.snapchatfilter : booral.avatar === '5' ? images.chohyun : booral.avatar === '6' ? images.hob : booral.avatar === '7' ? images.oliversam : booral.avatar === '8' ? images.defcon : booral.avatar === '9' ? images.kimtan : images.jaesoon}
          className="size-36 rounded-full border border-primary-200"
        />

        <View className='flex flex-col flex-1 gap-1 py-2'>
          <View className='flex flex-row gap-1'>
            <Text className='text-xs '>Today <Text className='text-xs text-red-600'>{booral.views.toLocaleString()}</Text></Text>
            <Text className='text-xs'>|</Text>
            <Text className='text-xs'>Total {booral.totalviews.toLocaleString()}</Text>
          </View>
          
          <Text className='text-2xl font-rubik'>{booral.username}</Text>
          <Text className='text-sm text-black-200 mb-2'>{booral.gender}, {booral.age}</Text>
          
          
          
          <View className='flex flex-row gap-4'>
            <TouchableOpacity onPress={() => beBooral(id.toString())} className='bg-primary-300 p-2 rounded-xl shadow-md shadow-black-100/20 w-24'>
              <Text className='text-white font-rubik-medium text-center'>Post</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => beBooral(id.toString())} className='bg-primary-300 p-2 rounded-xl shadow-md shadow-black-100/20 w-24'>
              <Text className='text-white font-rubik-medium text-center'>Message</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default Booral