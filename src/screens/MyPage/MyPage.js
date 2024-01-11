import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import { ButtonForm1 } from '@forms/ButtonForm';
import { WelcomeHeader } from '@forms/WelcomeHeader';

export default function MyPage({ nickname, setGoToHome }) {
    return (
    <View style={tw`flex h-full items-center bg-[#FEFEFE] gap-[50px]`}>
            <WelcomeHeader nickname={nickname} profileImage={require('@images/profile_image.png')} />
            <ButtonForm1 text="첫 화면으로 나가기" onPress={() => setGoToHome(false)} />
            <Text style={tw`text-[#9CA4AB] text-3xl font-semibold mt-[10px]`}>MY</Text>
        </View>
    );
}
