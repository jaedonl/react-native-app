import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from 'react'
import icons from "@/constants/icons";
import images from "@/constants/images";
import { boorals } from "@/constants/data";

interface BooralCardProps {
    item: {
        username: string;
        desc: string;
        location: string;
        age: number;
        gender: string;    
        avatar: string;
        upcoming: string;
        views: number
    };
    onPress?: () => void;
}

const BooralCard = ({ item, onPress }: BooralCardProps) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-80 relative">
            <Image 
                source={item.avatar === '1' ? images.hyunjin : item.avatar === '2' ? images.minyoung : item.avatar === '3' ? images.jaedon : item.avatar === '4' ? images.snapchatfilter : item.avatar === '5' ? images.chohyun : item.avatar === '6' ? images.hob : item.avatar === '7' ? images.oliversam : item.avatar === '8' ? images.defcon : item.avatar === '9' ? images.kimtan : images.jaesoon}
                className="size-full rounded-2xl" 
            />
            <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />
            
            <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-3 right-3">
                <Image source={icons.view} className="size-3.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-1">{item.views.toLocaleString()}</Text>
            </View>

            <View className="flex flex-col items items-start absolute bottom-5 inset-x-5">
                <Text className="text-xl font-rubik-extrabold text-white" numberOfLines={1}>{item.username}</Text>
                <Text className="text-base font-rubik text-white">{item.location}</Text>

                <View className="flex flex-row items-center justify-between w-full">
                    <Text className="text-lg font-rubik-bold text-white">{item.gender}, {item.age}</Text>
                    <Image source={icons.heart} className="size-5" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default BooralCard