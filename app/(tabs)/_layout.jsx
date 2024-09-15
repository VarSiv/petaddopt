import { View, Text} from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tabs.Screen name='home' options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({color})=><Feather name="home" size={24} color={color} />
      }}/>

      <Tabs.Screen name='favorite' options={{
        title: 'Favorites',
        headerShown: false,
        tabBarIcon: ({color})=><Feather name="heart" size={24} color={color} />
      }}/>

      <Tabs.Screen name='inbox' options={{
        title: 'Inbox',
        headerShown: false,
        tabBarIcon: ({color})=><Feather name="inbox" size={24} color={color} />
      }}/>

      <Tabs.Screen name='profile' options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({color})=><Feather name="user" size={24} color={color} />
      }}/>

    </Tabs>
  )
}