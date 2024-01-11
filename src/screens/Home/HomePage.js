import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export default function HomePage({ nickname }) {
    const nav = useNavigation();
    
    const goToChat = () => {
        nav.navigate('ChatPage');
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-[#FEFEFE]`}>
            <Text>Home</Text>
            <Text>{nickname}</Text>

            <Pressable style={tw`w-[90%] bg-[#66CA63] justify-center items-center rounded-2xl h-[60px]`} onPress={goToChat}>
                <Text style={tw`text-white text-[18px] font-semibold`}>채팅 입장</Text>
            </Pressable>
        </View>
    );
}
