import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

export default function StartPage() {
    const nav = useNavigation();
    const goToChooseNicknamePage = () => {
        nav.navigate("ChooseNicknamePage");
    };

    return (
        <SafeAreaView style={tw`flex-1 flex-col justify-around items-center bg-[#B9E3F1]`}>
            <Image style={tw`w-[85%] h-[40%] mt-[10%]`} source={require("@images/startImage.png")} />
            <View style={tw`justify-center items-center gap-[10px]`}>
                <Text style={tw`text-[#FFF] text-2xl font-bold text-center leading-[34px]`}>
                    세상을 보는 또 다른 눈,{"\n"}브로디
                </Text>
                <Text style={tw`text-[#FFF] text-base font-semibold text-center leading-[28px]`}>
                    우리의 시야를 조금씩 나누어{"\n"}모두가 더 넓은 세상을 보도록 합니다
                </Text>
            </View>
            <View style={tw`w-[90%] justify-center items-center gap-[20px] mb-[10%]`}>
                <Pressable style={tw`w-full bg-[#66CA63] justify-center items-center rounded-2xl h-[60px]`} onPress={() => goToChooseNicknamePage()}>
                    <Text style={tw`text-white text-[18px] font-semibold`}>사진 해설을 받고 싶어요</Text>
                </Pressable>
                <Pressable style={tw`w-full bg-[#FFF] justify-center items-center rounded-2xl h-[60px]`}>
                    <Text style={tw`text-white text-[18px] font-semibold text-[#66CA63]`}>해설자로 활동할게요</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}
