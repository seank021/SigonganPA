import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { ButtonForm1 } from '@forms/ButtonForm';

export default function HomePage({ nickname }) {
    const nav = useNavigation();
    
    const goToChat = () => {
        nav.navigate('ChatPage');
    };

    return (
        <View style={tw`flex-1 justify-center items-center bg-[#FEFEFE]`}>
            <Text>Home</Text>
            <Text>{nickname}</Text>
            <ButtonForm1 text="채팅 입장" onPress={goToChat} />
        </View>
    );
}
