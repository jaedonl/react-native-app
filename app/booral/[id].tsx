import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, Dimensions, Animated, Platform, SafeAreaView, StyleSheet, Button } from 'react-native'
import React, { useRef, useState } from 'react';
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { boorals } from "@/constants/data";
import PagerView from 'react-native-pager-view';
import Post from '@/components/Post';
import GridGallery from '@/components/GridGallery';

type Tab = {
  key: string;
  title: string;
};

const tabs: Tab[] = [
  { key: 'posts', title: 'Posts' },
  { key: 'memories', title: 'Memories' },
  { key: 'events', title: 'Events' },
  { key: 'letters', title: 'Letters' },
];

const Booral = () => {
  const { id } = useLocalSearchParams();
  const booral = boorals[parseInt(id.toString()) - 1];
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const pagerRef = useRef<PagerView>(null);

  // Called when the page is changed by swipe.
  const onPageSelected = (e: any) => {
    const index = e.nativeEvent.position;
    setSelectedIndex(index);
  };

  // Called when a tab is pressed.
  const onTabPress = (index: number) => {
    setSelectedIndex(index);
    pagerRef.current?.setPage(index);
  };

  // Animated value to track the current page offset (position + offset)
  const pageOffset = useRef(new Animated.Value(0)).current;

  // Calculate tab width from screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const tabWidth = screenWidth / tabs.length;

  // Update animated value when user scrolls the pager
  const onPageScroll = (e: any) => {
    const position = e.nativeEvent.position;
    const offset = e.nativeEvent.offset;
    // Set the animated value to (position + offset)
    pageOffset.setValue(position + offset);
  };

  const indicatorTranslateX = pageOffset.interpolate({
    inputRange: [0, tabs.length - 1],
    outputRange: [0, tabWidth * (tabs.length - 1)],
  });
  
  const beBooral = (id: string) => {}

  return (
    <SafeAreaView className="bg-white h-full">
      <View className='flex flex-row gap-4 px-5 my-4'>
        <Image 
          source={booral.avatar === '1' ? images.hyunjin : booral.avatar === '2' ? images.minyoung : booral.avatar === '3' ? images.jaedon : booral.avatar === '4' ? images.snapchatfilter : booral.avatar === '5' ? images.chohyun : booral.avatar === '6' ? images.hob : booral.avatar === '7' ? images.oliversam : booral.avatar === '8' ? images.defcon : booral.avatar === '9' ? images.kimtan : images.jaesoon}
          className="size-36 rounded-full border border-primary-300"
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
            
            <TouchableOpacity onPress={() => beBooral(id.toString())} className='bg-blue-900 p-2 rounded-xl shadow-md shadow-black-100/20 w-24'>
              <Text className='text-white font-rubik-medium text-center'>Booral</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className='relative'>
        <View className='flex flex-row justify-between items-center border-gray-400'>
          {tabs.map((tab, idx) => (
            <TouchableOpacity key={tab.key} onPress={() => onTabPress(idx)} className='flex-1 py-1'>
              <Text className={`text-md text-center py-1 ${selectedIndex === idx ? 'font-bold' : 'text-gray-500'}`}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Animated.View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: tabWidth,
              height: 3,
              backgroundColor: '#ff9913',
              transform: [{ translateX: indicatorTranslateX }],
            }}
        />
      </View>

      <PagerView
        initialPage={0}
        style={{flex: 1}}
        ref={pagerRef}
        onPageSelected={onPageSelected}
        onPageScroll={onPageScroll}
      >
        <View key="posts" className="flex-1 mt-2">
          {booral.posts.map((post) => (
            <Post userId={booral.userId} post={post} />
          ))}
        </View>
        
        <View key="memories" className="flex flex-1">
          <GridGallery />
        </View>

        <View key="events" className="flex flex-1 justify-center items-center">
          <Text className="text-xl">Content for Events</Text>
        </View>

        <View key="letters" className="flex flex-1 justify-center items-center">
          <Text className="text-xl">Content for Letters</Text>
        </View>
      </PagerView>
    </SafeAreaView>
  )
}

export default Booral