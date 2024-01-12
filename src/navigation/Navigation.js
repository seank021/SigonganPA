import React, { useLayoutEffect, useState } from 'react';
import { Image } from 'react-native';
import tw from 'twrnc';

import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import StartPage from '@screens/Start/StartPage';
import ChooseNicknamePage from '@screens/Start/ChooseNicknamePage';

import HomePage from '@screens/Home/HomePage';
import ChatPage from '@screens/Home/ChatPage';

import AIExplanationPage from '@screens/AIExplanation/AIExplanationPage';

import SavedPage from '@screens/Saved/SavedPage';

import MyPage from '@screens/MyPage/MyPage';

const Navigation = () => {
    const [goToHome, setGoToHome] = useState(false);
    const [nickname, setNickname] = useState('');

    const AuthStack = () => {
        return (
            <Stack.Navigator initialRouteName='StartPage' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="StartPage" children={() => <StartPage />} />
                <Stack.Screen name="ChooseNicknamePage" children={() => <ChooseNicknamePage setGoToHome={setGoToHome} setNickname={setNickname} />} />
            </Stack.Navigator>
        );
    };

    const HomeStack = ({ navigation, route }) => {
        useLayoutEffect(() => {
            const routeName = getFocusedRouteNameFromRoute(route);
            if (routeName === "ChatPage") {
                navigation.setOptions({ tabBarStyle: { display: 'none' } });
            } else {
                navigation.setOptions({ tabBarStyle: tw`h-[80px] border-t-[1px] border-[#F8F8F8]` });
            }
        }, [navigation, route]);

        return (
            <Stack.Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomePage" children={() => <HomePage nickname={nickname} />} />
                <Stack.Screen name="ChatPage" children={() => <ChatPage />} />
            </Stack.Navigator>
        );
    };

    const AIExplanationStack = () => {
        return (
            <Stack.Navigator initialRouteName='AIExplanationPage' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AIExplanationPage" children={() => <AIExplanationPage nickname={nickname} />} />
            </Stack.Navigator>
        );
    };

    const SavedStack = () => {
        return (
            <Stack.Navigator initialRouteName='SavedPage' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SavedPage" children={() => <SavedPage nickname={nickname} />} />
            </Stack.Navigator>
        );
    };

    const MyPageStack = () => {
        return (
            <Stack.Navigator initialRouteName='MyPage' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MyPage" children={() => <MyPage nickname={nickname} setGoToHome={setGoToHome} />} />
            </Stack.Navigator>
        );
    }

    const Tabs = () => {
        return (
            <Tab.Navigator
                initialRouteName='HomeTab'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: tw`h-[80px] border-t-[1px] border-[#F8F8F8]`,
                }}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={HomeStack}
                    options={{
                        tabBarIcon: ({focused}) => (
                            focused ? <Image source={require("@images/home_focused.png")} style={tw`w-[40px] h-[40px]`} /> : <Image source={require("@images/home.png")} style={tw`w-[40px] h-[40px]`} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="AIExplanationTab"
                    component={AIExplanationStack}
                    options={{
                        tabBarIcon: ({focused}) => (
                            focused ? <Image source={require("@images/ai_explanation_focused.png")} style={tw`w-[40px] h-[40px]`} /> : <Image source={require("@images/ai_explanation.png")} style={tw`w-[40px] h-[40px]`} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="SavedTab"
                    component={SavedStack}
                    options={{
                        tabBarIcon: ({focused}) => (
                            focused ? <Image source={require("@images/saved_focused.png")} style={tw`w-[40px] h-[40px]`} /> : <Image source={require("@images/saved.png")} style={tw`w-[40px] h-[40px]`} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="MyPageTab"
                    component={MyPageStack}
                    options={{
                        tabBarIcon: ({focused}) => (
                            focused ? <Image source={require("@images/my_focused.png")} style={tw`w-[40px] h-[40px]`} /> : <Image source={require("@images/my.png")} style={tw`w-[40px] h-[40px]`} />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    };

    return (
        <NavigationContainer>
            {goToHome ? <Tabs /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Navigation;
