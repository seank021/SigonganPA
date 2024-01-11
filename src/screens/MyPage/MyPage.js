import React from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';

export default function MyPage({ nickname, setGoToHome }) {
    return (
        <View style={tw`flex-1 justify-center items-center bg-[#FEFEFE]`}>
            <Text>My</Text>
            <Text>{nickname}</Text>

            <Pressable style={tw`w-[90%] bg-[#66CA63] justify-center items-center rounded-2xl h-[60px]`} onPress={() => setGoToHome(false)}>
                <Text style={tw`text-white text-[18px] font-semibold`}>첫 화면으로 나가기</Text>
            </Pressable>
        </View>
    );
}
