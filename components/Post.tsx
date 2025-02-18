import { Image, Text, TouchableOpacity, View } from "react-native";
import React, {useState} from 'react'
import images from "@/constants/images";
import icons from "@/constants/icons";
import { format } from 'date-fns';
import { boorals } from '@/constants/data';

interface Post {
    userId: string;
    post: {
        postId: string;
        createdAt: number;
        body: string;
        likes: number;
        publicity: boolean;
        comments: Object[];
    }
}

const Post = ({userId, post} : Post) => {
    const booral = boorals[parseInt(userId.toString()) - 1];
    const [like, setLike] = useState<boolean>(false);

    const createdAt = post.createdAt;
    const formattedDate = format(new Date(createdAt), 'PPp');

    const likePost = (postId: string) => {
        if (like === true) post.likes--
        else post.likes++
        setLike((prev) => !prev)        
    }

    const viewComment = (postId: string) => {}

    const reportPost = (postId: string) => {}

    return (
        <View className="flex gap-2 p-2 rounded-xl bg-white shadow-md shadow-black-100/20 relative mx-2 mb-2">
            <View className="flex flex-row items-center justify-center gap-2">
                <Image 
                    source={booral.userId === '1' ? images.hyunjin : booral.userId === '2' ? images.minyoung : booral.userId === '3' ? images.jaedon : booral.userId === '4' ? images.snapchatfilter : booral.userId === '5' ? images.chohyun : booral.userId === '6' ? images.hob : booral.userId === '7' ? images.oliversam : booral.userId === '8' ? images.defcon : booral.userId === '9' ? images.kimtan : images.jaesoon}
                    className="size-16 rounded-full"
                />
                <View className="flex-1 py-2">
                    <View className="flex-1 flex flex-row justify-between">
                        <Text className="text-lg font-rubik-medium text-black leading-6">{booral.username}</Text>
                        <TouchableOpacity>
                            <Image source={icons.more} className="size-6" tintColor='#666876' resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                    <View className="flex flex-row items-center gap-2 ">
                        <Text className="text-xs text-black-300">{formattedDate}</Text>
                        {post.publicity 
                            ? <Image source={icons.globe} className="size-4" tintColor='#666876' resizeMode='contain' /> 
                            : <Image source={icons.lock} className="size-4" tintColor='#666876' resizeMode='contain' />
                        }
                    </View>
                </View>
            </View>
                
            <View className="py-2">
                <Text className="text-base font-rubik">{post.body}</Text>
            </View>
            
            <View className="flex flex-row items-center gap-3">
                <TouchableOpacity onPress={() => likePost(post.postId)} className="flex flex-row gap-1 items-center px-2 py-1 bg-primary-100 rounded-full border border-primary-200">
                    <Image source={images.booral} tintColor={like ? '#ff9913' : '#666876'} resizeMode='contain' className='size-4' />
                    <Text className="text-xs font-rubik">{post.likes}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => viewComment(post.postId)} className="flex flex-row gap-1 items-center  px-2 py-1 bg-primary-100 rounded-full border border-primary-200">
                    <Image source={icons.comment} tintColor='#666876' resizeMode='contain' className='size-4' />
                    <Text className="text-xs font-rubik">{post.comments.length}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => reportPost(post.postId)} className="flex flex-row gap-1 items-center px-2 py-1 bg-primary-100 rounded-full border border-primary-200">
                    <Image source={icons.flag} tintColor='#666876' resizeMode='contain' className='size-4' />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Post