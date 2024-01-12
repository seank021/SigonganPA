import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import { ButtonForm1 } from '@forms/ButtonForm';
import { WelcomeHeader } from '@forms/WelcomeHeader';

export default function MyPage({ nickname, setGoToHome }) {
    return (
    <View style={tw`flex h-full items-center justify-center bg-[#FEFEFE]`}>
            <WelcomeHeader nickname={nickname} profileImage={require('@images/profile_image.png')} />
            <View style={tw`w-full items-center absolute top-35`}>
                <ButtonForm1 text="첫 화면으로 나가기" onPress={() => setGoToHome(false)} />
            </View>
            <Text style={tw`text-[#9CA4AB] text-3xl font-semibold`}>MY</Text>
        </View>
    );
}
