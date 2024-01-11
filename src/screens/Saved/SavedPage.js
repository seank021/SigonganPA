import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import { WelcomeHeader } from '@forms/WelcomeHeader';

export default function SavedPage({ nickname }) {
    return (
        <View style={tw`flex h-full items-center bg-[#FEFEFE] gap-[50px]`}>
            <WelcomeHeader nickname={nickname} profileImage={require('@images/profile_image.png')} />
            <Text style={tw`text-[#9CA4AB] text-3xl font-semibold mt-[10px]`}>저장</Text>
        </View>
    );
}
