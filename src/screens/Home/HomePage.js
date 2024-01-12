import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

import { ButtonForm1 } from '@forms/ButtonForm';
import { WelcomeHeader } from '@forms/WelcomeHeader';

export default function HomePage({ nickname }) {
    const nav = useNavigation();
    
    const goToChat = () => {
        nav.navigate('ChatPage');
    };

    return (
        <View style={tw`flex h-full items-center justify-center bg-[#FEFEFE]`}>
            <WelcomeHeader nickname={nickname} profileImage={require('@images/profile_image.png')} />
            <View style={tw`w-full items-center absolute top-[20%]`}>
                <ButtonForm1 text="채팅 입장" onPress={goToChat} />
            </View>
            <Text style={tw`text-[#9CA4AB] text-3xl font-semibold`}>홈 화면</Text>
        </View>
    );
}
