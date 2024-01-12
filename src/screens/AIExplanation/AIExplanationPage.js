import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import { WelcomeHeader } from '@forms/WelcomeHeader';

export default function AIExplanationPage({ nickname }) {
    return (
        <View style={tw`flex h-full items-center justify-center bg-[#FEFEFE]`}>
            <WelcomeHeader nickname={nickname} profileImage={require('@images/profile_image.png')} />
            <Text style={tw`text-[#9CA4AB] text-3xl font-semibold`}>AI 해설</Text>
        </View>
    );
}
