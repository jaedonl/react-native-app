import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";

interface CardProps {
    item: {
        id: string;
        title: string;
        location: string;
        publicity: boolean;
        size: number;
        boorals: string[];
        ageMin: number;
        ageMax: number;
        categories: string[];
        tags: string[];
        gallery: string[];
        upcoming: string;
    };
    onPress?: () => void;
}

export const Card = ({ item, onPress }: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-row gap-3 px-2 py-2 rounded-xl bg-white shadow-md shadow-black-100/20 relative mx-5 mb-4">
            <Image 
                source={item.id === '1' ? images.izakaya1 : item.id === '2' ? images.pizza1 : item.id === '3' ? images.barhopping1 : item.id === '4' ? images.pdt1 : item.id === '5' ? images.widowjane1 : item.id === '6' ? images.jongrobbq1 : ''}
                className="size-32 rounded-xl" 
            />
            <View className="flex flex-col flex-1 relative">
                <View className="flex flex-col gap-1">
                    <View className="flex flex-row flex-1 items-center justify-between">
                        <View className="flex flex-row items-center justify-center">
                            <Text className="text-xs font-rubik-medium text-black-200">{item.upcoming}</Text>
                            <Text className="text-xs font-rubik-sm text-black-200 bg-gray-100 rounded-full px-2 py-1 ml-2">Age {item.ageMin}-{item.ageMax}</Text>
                        </View>
                        
                        <View className="flex flex-row items-center">
                        {item.boorals.length === item.size ? (
                            <>
                                <Image source={icons.person} className="size-4 rounded-full"/>
                                <Text className="text-xs font-rubik-semibold text-red-600">{item.boorals.length}/{item.size} <Text className="text-xs font-rubik-semibold text-red-600 capitalize">full</Text></Text>
                            </>
                        ) : (
                            <>
                                <Image source={icons.person} className="size-4 rounded-full"/>
                                <Text className="text-xs font-rubik-semibold text-black-100">{item.boorals.length}/{item.size}</Text>
                            </>
                        )}
                        </View>
                    </View>

                    <Text numberOfLines={2} ellipsizeMode="tail" className="text-lg font-rubik-medium text-black leading-6">{item.title}</Text>
                    <Text className="text-sm font-rubik text-black-200">{item.location}</Text>
                    
                </View>

                <View className="absolute bottom-0 left-0">
                    <View className="flex flex-row gap-2">
                        {item.categories.map((category) => (
                            <Text className="text-xs font-rubik-bold text-primary-300 px-1 py-1 bg-primary-100 rounded-full">
                                {category}
                            </Text>
                        ))}
                    </View>
                </View>
            </View>       
        </TouchableOpacity>
    )
}