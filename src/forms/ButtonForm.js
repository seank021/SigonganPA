import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';

export const ButtonForm1 = ({ text, onPress }) => { // 초록 배경, 흰 글씨, 약간 둥근 모서리
    return (
        <Pressable style={tw`w-[90%] bg-[#66CA63] justify-center items-center rounded-2xl h-[60px]`} onPress={onPress}>
            <Text style={tw`text-white text-[18px] font-semibold`}>{text}</Text>
        </Pressable>
    );
};

export const ButtonForm2 = ({ text, onPress }) => { // 흰 배경, 초록 글씨, 약간 둥근 모서리
    return (
        <Pressable style={tw`w-[90%] bg-white justify-center items-center rounded-2xl h-[60px]`} onPress={onPress}>
            <Text style={tw`text-[#66CA63] text-[18px] font-semibold`}>{text}</Text>
        </Pressable>
    );
};

export const ButtonForm3 = ({ text, onPress }) => { // 초록 배경, 흰 글씨, 둥근 모서리
    return (
        <Pressable style={tw`w-[90%] bg-[#66CA63] justify-center items-center rounded-full h-[60px]`} onPress={onPress}>
            <Text style={tw`text-white text-[18px] font-semibold`}>{text}</Text>
        </Pressable>
    );
};
