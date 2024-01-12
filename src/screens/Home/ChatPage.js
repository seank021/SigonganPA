import React, { useState } from 'react';
import { View, Image, ScrollView, TextInput, Pressable, Text } from 'react-native';
import tw from 'twrnc';
import Modal from 'react-native-modal';

import { PageHeader } from '@forms/PageHeader';
import { ChatForm1, ChatForm2 } from '@forms/ChatForm';

export default function ChatPage() {
    const myProfileImg = require("@images/profile_image.png");
    const otherProfileImg = require("@images/other_profile_image.png");
    const [chatMessages, setChatMessages] = useState([
        { type: 'myMessage', image: require("@images/text_image_1.png"), text: null, time: null, profile: myProfileImg },
        { type: 'myMessage', image: null, text: "고양이가 어떤 모습으로 있는지 자세히 설명해주세요", time: null, profile: myProfileImg },
        { type: 'myMessage', image: null, text: "몇 마리인지도요~", time: "15:42 PM", profile: null },
        { type: 'otherMessage', image: null, text: "세마리의 고양이가 나란히 밥그릇의 사료를 먹고 있는 모습을 위에서 촬영한 사진입니다", time: "15:42 PM", profile: otherProfileImg },
        { type: 'myMessage', image: null, text: "감사합니다!", time: "15:42 PM", profile: myProfileImg },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    
    const [text, setText] = useState("");

    const sendMessage = () => {
        if (text.trim() !== "") {
            setChatMessages(prevMessages => [
                ...prevMessages, 
                { type: 'myMessage', image: null, text: text, time: getCurrentTime(), profile: myProfileImg }
            ]);
            setText("");
        }
    }

    const getCurrentTime = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours %= 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    return (
        <View style={tw`flex h-full items-center bg-[#FEFEFE]`}>
            <PageHeader pageName="채팅" />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`items-center gap-[10px]`} style={tw`w-full m-[30%]`}>
                {chatMessages.map((message, index) => {
                    if (message.type === 'myMessage') {
                        return (
                            <ChatForm1 key={index} image={message.image} text={message.text} time={message.time} profile={message.profile} />
                        );
                    } else {
                        return (
                            <ChatForm2 key={index} image={message.image} text={message.text} time={message.time} profile={message.profile} />
                        );
                    }
                })}
            </ScrollView>
            
            <View style={tw`absolute bottom-[5%] w-full h-[50px] flex justify-center items-center`}>
                <View style={tw`w-[90%] h-full flex justify-center border-[1px] border-[#E9EBED] bg-[#F6F6F6] rounded-[25px]`}>
                    <Pressable style={tw`absolute left-[10px]`} onPress={() => setModalVisible(true)}>
                        <Image source={require("@images/file.png")} style={tw`w-[30px] h-[30px]`} />
                    </Pressable>
                    <View style={tw`absolute ml-[45px] border-[#E9EBED] border-[1px] h-[25px]`} />
                    <TextInput style={tw`text-[#000] text-sm font-normal ml-[55px]`} placeholderTextColor={"#BFC3C6"} placeholder='메시지 입력...' onChangeText={text => setText(text)} value={text} />
                    <Pressable style={tw`absolute right-[10px]`} onPress={sendMessage}>
                        <Image source={require("@images/send.png")} style={tw`w-[40px] h-[40px]`} />
                    </Pressable>
                </View>
            </View>

            <Modal style={tw`m-0`} animationIn={"slideInUp"} animationOut={"slideOutDown"} transparent={true} isVisible={modalVisible} hasBackdrop={true} backdropOpacity={0.5} onBackdropPress={() => setModalVisible(false)}>
                <View style={tw`justify-end h-full`}>
                    <View style={tw`flex-col justify-center items-start h-[180px] bg-[#FFF] rounded-t-[30px] gap-[15px]`}>
                        <Pressable style={tw`flex-row justify-center items-center gap-[10px] ml-[25%]`} onPress={() => setModalVisible(false)}>
                            <Image source={require("@images/camera.png")} style={tw`w-[50px] h-[50px]`} />
                            <Text style={tw`text-[#000] text-base font-semibold`}>직접 촬영하기</Text>
                        </Pressable>
                        <Pressable style={tw`flex-row justify-center items-center gap-[10px] ml-[25%]`} onPress={() => setModalVisible(false)}>
                            <Image source={require("@images/gallery.png")} style={tw`w-[50px] h-[50px]`} />
                            <Text style={tw`text-[#000] text-base font-semibold`}>갤러리에서 고르기</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
