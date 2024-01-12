import React from 'react';
import { View, Text, Image } from 'react-native';
import tw from 'twrnc';

export const ChatForm1 = ({ image, text, time, profile }) => { // 내가 보낸 메시지
    return (
        <View style={tw`flex flex-row gap-[10px] self-end`}>
            {image !== null &&
                <View style={tw`flex flex-col items-end max-w-[60%] gap-[5px]`}>
                    <Image source={image} style={tw`w-[120px] h-[120px] rounded-xl`} />
                    {time !== null && 
                        <Text style={tw`text-[#99A1A8] text-xs`}>{time}</Text>
                    }
                </View>
            }
            {text !== null &&
                <View style={tw`flex flex-col items-end max-w-[60%] gap-[5px]`}>
                    <View style={tw`bg-[#66CB63] rounded-l-xl rounded-tr-xl px-2 py-3`}>
                        <Text style={tw`text-sm text-[#FFF] font-semibold`}>{text}</Text>
                    </View>
                    {time !== null && 
                        <Text style={tw`text-[#99A1A8] text-xs`}>{time}</Text>
                    }
                </View>
            }
            {profile !== null ?
                <Image source={profile} style={tw`w-[50px] h-[50px] rounded-2xl mr-[5%] self-start`} />
                : <View style={tw`w-[50px] h-[50px] rounded-2xl mr-[5%] self-start`} />
            }
        </View>
    );
};

export const ChatForm2 = ({ image, text, time, profile }) => { // 상대방이 보낸 메시지
    return (
        <View style={tw`flex flex-row gap-[10px] self-start`}>
            {profile !== null ?
                <Image source={profile} style={tw`w-[50px] h-[50px] rounded-2xl ml-[5%] self-start`} />
                : <View style={tw`w-[50px] h-[50px] rounded-2xl ml-[5%] self-start`} />
            }
            {image !== null &&
                <View style={tw`flex flex-col items-start max-w-[60%] gap-[5px]`}>
                    <Image source={image} style={tw`w-[120px] h-[120px] rounded-xl`} />
                    {time !== null && 
                        <Text style={tw`text-[#99A1A8] text-xs`}>{time}</Text>
                    }
                </View>
            }
            {text !== null &&
                <View style={tw`flex flex-col items-start max-w-[60%] gap-[5px]`}>
                    <View style={tw`bg-[#F6F6F6] rounded-r-xl rounded-tl-xl px-2 py-3`}>
                        <Text style={tw`text-sm text-[#6D7680] font-semibold`}>{text}</Text>
                    </View>
                    {time !== null && 
                        <Text style={tw`text-[#99A1A8] text-xs`}>{time}</Text>
                    }
                </View>
            }
        </View>
    );
};
