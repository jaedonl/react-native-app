import { View, Image, FlatList, TouchableOpacity, Text } from 'react-native'
import images from '@/constants/images'
import React from 'react'

// interface Gallery {
//     url: string;
// }

// interface GridGalleryProps {
//     gallery: Gallery[];
// }
const gallery = [
  { url: images.izakaya1 },
  { url: images.pizza1 },
  { url: images.barhopping1 },
  { url: images.pdt1 },
  { url: images.widowjane1 },
  { url: images.jongrobbq1 },
]

const GridGallery = () => {
    const onPressImage = () => {}

    return (
        <FlatList 
            data={gallery}
            keyExtractor={(item) => item.toString()}
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            contentContainerClassName="flex"
            renderItem={({item}) => (
                <TouchableOpacity 
                    onPress={() => onPressImage()} 
                    className='flex-1 aspect-square border border-primary-100'>
                    <Image source={item.url} className="flex-1 aspect-square" />
                </TouchableOpacity>
            )}
        />
    )
}

export default GridGallery