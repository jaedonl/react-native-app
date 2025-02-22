import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { categories } from '@/constants/data'

const Filters = () => {
    const params = useLocalSearchParams<{filter?: string}>();
    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All');

    const handleCategoryPress = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory('');
            router.setParams({ filter: 'All' });
            return;
        }

        setSelectedCategory(category);
        router.setParams({ filter: category });
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3'>
            {categories.map((item) => (
                <TouchableOpacity key={item.title} onPress={() => handleCategoryPress(item.category)} className={`flex flex-col items-start mr-3 px-2 py-1 rounded-full ${selectedCategory === item.category ? 'bg-primary-300' : 'bg-primary-100 border border-primary-200'}`}>
                    <Text className={`text-sm ${selectedCategory === item.category ? 'text-white font-rubik-medium mt-0.5' : 'text-black-300 font-rubik'}`}>{item.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default Filters