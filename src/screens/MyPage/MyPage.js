import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

import { ButtonForm1 } from '@forms/ButtonForm';

export default function MyPage({ nickname, setGoToHome }) {
    return (
        <View style={tw`flex-1 justify-center items-center bg-[#FEFEFE]`}>
            <Text>My</Text>
            <Text>{nickname}</Text>
            <ButtonForm1 text="첫 화면으로 나가기" onPress={() => setGoToHome(false)} />
        </View>
    );
}
