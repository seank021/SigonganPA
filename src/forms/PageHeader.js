import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

export const PageHeader = ({ pageName }) => {
    const nav = useNavigation();

    const goBack = () => {
        nav.goBack();
    };

    return (
        <View style={tw`flex-row w-[80%] absolute top-10 items-center justify-between`}>
            <Pressable onPress={goBack}>
                <Image style={tw`w-[40px] h-[40px]`} source={require("@images/arrow_left.png")} />
            </Pressable>
            <Text style={tw`text-[#000] text-xl font-semibold`}>{pageName}</Text>
            <Image style={tw`w-[15px] h-[40px]`} source={require("@images/more_dots.png")} />
        </View>
    );
};
