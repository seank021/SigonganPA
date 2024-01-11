import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function AIExplanationPage({ nickname }) {
    return (
        <View style={tw`flex-1 justify-center items-center bg-[#FEFEFE]`}>
            <Text>AI Explanation</Text>
            <Text>{nickname}</Text>
        </View>
    );
}
