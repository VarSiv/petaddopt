import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
    const {user} = useUser()
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <View>
            <Text style={{
                fontFamily: 'outfit-regular',
                fontSize: 18
            }}>Welcome </Text>
            <Text style={{
                fontFamily: 'outfit-regular',
                fontSize: 25
            }}>{user?.firstName} </Text>
        </View>
        <Image source={{uri:user?.imageUrl}} style={{
            width: 40,
            height: 40,
            borderRadius: 99
        }}/>
    </View>
  )
}