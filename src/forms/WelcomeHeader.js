import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

export const WelcomeHeader = ({ nickname, profileImage }) => {
    return (
        <View style={tw`w-[90%] flex-row justify-between items-center absolute top-10`}>
            <View style={tw`flex-row items-center`}>
                <Image style={tw`w-[60px] h-[60px]`} source={profileImage} />
                <View style={tw`flex-col ml-[10px]`}>
                    <Text style={tw`text-[#000] text-base font-bold`}>반가워요, {nickname}! 👋</Text>
                    <Text style={tw`text-[#9CA4AB] text-sm font-normal`}>해설자에게 질문해보아요!</Text>
                </View>
            </View>
            <Image style={tw`w-[30px] h-[30px] mr-[5%]`} source={require('@images/alarm.png')} />
        </View>
    );
};
