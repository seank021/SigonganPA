import React, { useState } from "react";
import { View, Text, Image, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

export default function StartPage({ setGoToHome, setNickname }) {
    const nav = useNavigation();

    const [nicknameInput, setNicknameInput] = useState("");

    const goBack = () => {
        nav.goBack();
    };

    return (
        <SafeAreaView style={tw`flex-1 flex-col items-center bg-[#FEFEFE]`}>
            <Pressable style={tw`self-start ml-[10%] my-[10%]`} onPress={() => goBack()}>
                <Image style={tw`w-[40px] h-[40px]`} source={require("@images/arrow_left.png")} />
            </Pressable>
            <View style={tw`justify-center items-center gap-[10px] mb-[10%]`}>
                <Text style={tw`text-[#000] text-2xl font-bold text-center leading-[34px]`}>
                    닉네임 정하기
                </Text>
                <Text style={tw`text-[#899299] text-base font-semibold text-center leading-[28px]`}>
                    사용하실 닉네임을 입력해주세요
                </Text>
            </View>
            <View style={tw`w-[90%] justify-center items-center gap-[10px] mb-[20%]`}>
                <TextInput style={tw`w-full h-[60px] border-[1px] border-[#F6F6F6] bg-[#F6F6F6] rounded-3xl px-[20px]`} placeholder="닉네임 입력하기" placeholderTextColor={"#9CA4AB"} onChangeText={(text) => setNicknameInput(text)} />
            </View>
            <Pressable style={tw`w-[90%] bg-[#66CA63] justify-center items-center rounded-3xl h-[60px]`} onPress={() => { setGoToHome(true); setNickname(nicknameInput); }}>
                <Text style={tw`text-white text-[18px] font-semibold`}>브로디 시작하기</Text>
            </Pressable>
        </SafeAreaView>
    );
}
