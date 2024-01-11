import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function SavedPage({ nickname }) {
    return (
        <View style={tw`flex-1 justify-center items-center bg-[#FEFEFE]`}>
            <Text>Saved</Text>
            <Text>{nickname}</Text>
        </View>
    );
}
