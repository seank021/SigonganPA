import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import tw from 'twrnc';

import { PageHeader } from '@forms/PageHeader';
import { ChatForm1, ChatForm2 } from '@forms/ChatForm';

export default function ChatPage() {
    const myProfileImg = require("@images/profile_image.png");
    const otherProfileImg = require("@images/other_profile_image.png");

    return (
        <View style={tw`flex h-full items-center bg-[#FEFEFE]`}>
            <PageHeader pageName="채팅" />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`items-center gap-[10px]`} style={tw`w-full mt-[30%] mb-[25%]`}>
                <ChatForm1 image={require("@images/text_image_1.png")} text={null} time={null} profile={myProfileImg} />
                <ChatForm1 image={null} text="고양이가 어떤 모습으로 있는지 자세히 설명해주세요" time={null} profile={myProfileImg} /> 
                <ChatForm1 image={null} text="몇 마리인지도요~" time="15:42 PM" profile={null} />
                <ChatForm2 image={null} text="세마리의 고양이가 나란히 밥그릇의 사료를 먹고 있는 모습을 위에서 촬영한 사진입니다" time="15:42 PM" profile={otherProfileImg} />
                <ChatForm1 image={null} text="감사합니다!" time="15:42 PM" profile={myProfileImg} />
            </ScrollView>
            
            <View style={tw`absolute bottom-[5%] w-full h-[50px] flex justify-center items-center`}>
                <View style={tw`w-[90%] h-full flex justify-center border-[1px] border-[#E9EBED] bg-[#F6F6F6] rounded-[25px]`}>
                    <Pressable style={tw`absolute left-[10px]`}>
                        <Image source={require("@images/file.png")} style={tw`w-[30px] h-[30px]`} />
                    </Pressable>
                    <View style={tw`absolute ml-[45px] border-[#E9EBED] border-[1px] h-[25px]`} />
                    <TextInput style={tw`text-[#000] text-sm font-normal ml-[55px]`} placeholderTextColor={"#BFC3C6"} placeholder='메시지 입력...' />
                    <Pressable style={tw`absolute right-[10px]`}>
                        <Image source={require("@images/send.png")} style={tw`w-[40px] h-[40px]`} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
