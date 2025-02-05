import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";

interface CardProps {
    onPress?: () => void;
}

export const FeaturedCard = ({ onPress }: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-80 relative">
            <Image source={images.jaesoon} className="size-full rounded-2xl" />
            <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />
            
            <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-3 right-3">
                <Image source={icons.star} className="size-3.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-1">4.9</Text>
            </View>

            <View className="flex flex-col items items-start absolute bottom-5 inset-x-5">
                <Text className="text-xl font-rubik-extrabold text-white" numberOfLines={1}>Jaesoon</Text>
                <Text className="text-base font-rubik text-white">Midtown, New York</Text>

                <View className="flex flex-row items-center justify-between w-full">
                    <Text className="text-lg font-rubik-bold text-white">Pet friend, Healing</Text>
                    <Image source={icons.heart} className="size-5" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export const Card = ({ onPress }: CardProps) => {
    return (
        <TouchableOpacity onPress={onPress} className="flex-1 w-full px-2 py-2 rounded-lg bg-white shadow-lg shadow-black-100/70 relative mb-8">
            <View className="flex flex-row items-center absolute px-2 top-3 right-3 bg-white/90 p-1 rounded-full z-50">
                <Image source={icons.star} className="size-2.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">4.9</Text>
            </View>

            <Image source={images.jaesoon} className="w-full h-40 rounded-lg" />

            <View className="flex flex-col mt-2">
                <Text className="text-base font-rubik-bold text-black">Jaesoon</Text>
                <Text className="text-xs font-rubik text-black-200">Lower East Side, New York</Text>

                <View className="flex flex-row items-center justify-between mt-2">
                    <Text className="text-sm font-rubik-medium text-primary-300">Pet friend, Healing</Text>
                    <Image source={icons.heart} className="w-5 h-5 mr-2" tintColor='#191d31' />
                </View>
            </View>       
        </TouchableOpacity>
    )
}