import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, Dimensions, Platform, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { router, useLocalSearchParams } from "expo-router";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { rooms } from '@/constants/data';
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT, Marker } from 'react-native-maps';

import { useAppwrite } from "@/lib/useAppwrite";
import { useGlobalContext } from "@/lib/global-provider";


const Rooms = () => {
    const { id } = useLocalSearchParams();

    const windowHeight = Dimensions.get("window").height;

    const room = rooms[parseInt(id.toString()) - 1];

    const onPressShowAll = () => {}
    const onPressImage = (image: string) => {}

    const gallery = [
        { url: images.izakaya1 },
        { url: images.pizza1 },
        { url: images.barhopping1 },
        { url: images.pdt1 },
        { url: images.pdt1 },
    ]
    const galleryToRender = gallery.length > 3 ? gallery.slice(0,3) : gallery;

    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 bg-white"
            >
                <View className="relative w-full" style={{ height: windowHeight / 3.5 }}>
                    <Image
                        source={id === '1' ? images.izakaya1 : id === '2' ? images.pizza1 : id === '3' ? images.barhopping1 : id === '4' ? images.pdt1 : id === '5' ? images.widowjane1 : id === '6' ? images.jongrobbq1 : ''}
                        className="size-full"
                        resizeMode="cover"
                    />
                    <Image source={images.whiteGradient} className="absolute top-0 w-full z-40"/>
        
                    <View
                        className="z-50 absolute inset-x-7"
                        style={{ 
                            top: Platform.OS === "ios" ? 70 : 20,
                        }}
                    >
                        <View className="flex flex-row items-center w-full justify-between">
                            <TouchableOpacity
                                onPress={() => router.back()}
                                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                            >
                                <Image source={icons.backArrow} className="size-5" />
                            </TouchableOpacity>
                
                            <View className="flex flex-row items-center gap-3">
                                <Image
                                    source={icons.heart}
                                    className="size-7"
                                    tintColor={"#191D31"}
                                />
                                <Image source={icons.send} className="size-7" />
                            </View>
                        </View>
                    </View>
                </View>
        
                <View className="px-5 mt-4 flex gap-1">
                    <View className='flex flex-row'>
                        <Text className='text-xs font-rubik-sm text-black-300 bg-gray-200 rounded-full px-2 py-1'>Age {room.ageMin}-{room.ageMax}</Text>
                    </View>
                    
                    <Text className="text-2xl font-rubik-bold">
                        {room?.title}
                    </Text>
            
                    <View className="flex flex-col gap-3">
                        <View>
                            <Text className='text-md font-rubik text-black-200'>{room?.location}</Text>
                        </View>
                        <View className="flex flex-row items-center gap-1">
                            {room?.categories?.map((category) => (
                                <Text className="text-xs font-rubik-bold text-primary-300 px-2 py-1 bg-primary-100 rounded-full">
                                    {category}
                                </Text>
                            ))}
                        </View>
                        
                        <View className="flex flex-row align-center flex-wrap">
                            {room.tags.map((tag, idx) => {
                                if (idx === 0) return <Text className="text-black-200 text-sm font-rubik-medium">{tag} {}</Text>
                                return <Text className="text-black-200 text-sm font-rubik-medium">&#8226;  {tag}</Text>
                            })}
                        </View>
                    </View>

                    <View className="w-full border-t border-primary-200 pt-7 mt-2">
                        {/* <Text className="text-black-300 text-xl font-rubik-bold">
                            Host Booral
                        </Text> */}
            
                        <View className="flex flex-row items-center justify-between">
                            <View className="flex flex-row items-center">
                                <Image
                                    source={room.hostBooral.avatar === '1' ? images.hyunjin : room.hostBooral.avatar === '2' ? images.minyoung : room.hostBooral.avatar === '3' ? images.jaedon : room.hostBooral.avatar === '4' ? images.snapchatfilter : room.hostBooral.avatar === '5' ? images.chohyun : room.hostBooral.avatar === '6' ? images.hob : room.hostBooral.avatar === '7' ? images.oliversam : room.hostBooral.avatar === '8' ? images.defcon : room.hostBooral.avatar === '9' ? images.kimtan : images.jaesoon}
                                    className="size-14 rounded-full"
                                />
                
                                <View className="flex flex-col items-start justify-center ml-3">
                                    <View className='flex flex-row items-center justify-center gap-1'>
                                        <Text className="text-lg text-black-300 text-start font-rubik-bold">
                                            {room?.hostBooral.username}
                                        </Text>
                                        <Text className='text-xs font-rubik-bold text-primary-300  bg-primary-100 rounded-full px-2 py-1'>Host</Text>
                                    </View>
                
                                    <Text className="text-sm text-black-200 text-start font-rubik-medium">
                                        {room?.hostBooral.age} &#8226; {room?.hostBooral.gender} 
                                    </Text>
                                </View>
                            </View>
                
                            <View className="flex flex-row items-center gap-3">
                                <Image source={icons.chat} className="size-7" />
                                <Image source={icons.phone} className="size-7" />
                            </View>
                        </View>
                    </View>
        
                    <View className="mt-4">
                        <Text className="text-black-300 text-xl font-rubik-bold">
                            Overview
                        </Text>
                        <Text className="text-black-200 text-base font-rubik mt-2">
                            {room?.description}
                        </Text>
                    </View>
        
                    {room?.gallery.length > 0 && (
                        <View className="mt-7">
                            <Text className="text-black-300 text-xl font-rubik-bold">
                                Photos
                            </Text>
                            <FlatList
                                data={galleryToRender}
                                keyExtractor={(item) => item.toString()}
                                numColumns={3}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    if (index === 2 && room.gallery.length > 3) {
                                        return (
                                        <TouchableOpacity onPress={() => onPressShowAll} className="flex-1 m-1 relative rounded-xl aspect-square">
                                            <Image source={item.url} className="rounded-xl flex-1 aspect-square" />
                                            <View className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-xl">
                                            <Text className="text-white text-lg font-bold">
                                                +{room.gallery.length - 2}
                                            </Text>
                                            </View>
                                        </TouchableOpacity>
                                        );
                                    }
                                    return (
                                        <TouchableOpacity onPress={() => onPressImage(item.toString())} className="rounded-xl flex-1 aspect-square m-1">
                                            <Image source={item.url} className="rounded-xl flex-1 aspect-square"/>
                                        </TouchableOpacity>
                                    )
                
                                }}
                                contentContainerClassName="flex gap-4 mt-3"
                            />
                        </View>
                    )}
        
                    <View className="mt-7">
                        <Text className="text-black-300 text-xl font-rubik-bold">
                            Location
                        </Text>
                        <View className="flex flex-row items-center justify-start mt-4 gap-2">
                            <Image source={icons.location} className="w-7 h-7" />
                            <Text className="text-black-200 text-sm font-rubik-medium">
                                {room?.location}
                            </Text>
                        </View>
            
                        {/* <Image source={images.map} className="h-52 w-full mt-5 rounded-xl"/> */}
                        
                        <View style={styles.mapContainer}>
                            <MapView 
                                style={styles.map}
                                provider={PROVIDER_DEFAULT}
                                initialRegion={room.map}
                                showsUserLocation
                                showsMyLocationButton
                            >
                                <Marker coordinate={room.map} />
                            </MapView>
                        </View>
                    </View>
    
                </View>
            </ScrollView>  
        </View>
    );
}
export default Rooms

const styles = StyleSheet.create({
    mapContainer: {
      height: 150, // Adjust height to make the map view smaller
      marginHorizontal: 0,
      marginVertical: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      overflow: 'hidden',
      borderRadius: 15,
    },
    map: {
      flex: 1,
    },
});