import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'
export default function LoginScreen() {
  return (
    <View style={{
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <Image source={require('./../../assets/images/login.png')}
        style={{
            width: '100%',
            height: 500
        }}
      />
      <View style={{
        padding:20,
        display: 'flex',
        alignItems: 'center'
      }}>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 26,
            paddingTop: 15,
            paddingBottom: 10
        }}>
            Ready to adopt a new friend?
        </Text>
        <Text style={{
            fontFamily: 'outfit-regular',
            fontSize: 16,
            color: Colors.GRAY
        }}>
            Adopt today the pet that will make you happy
        </Text>
        <Pressable style={{
            padding: 14,
            marginTop: 100,
            backgroundColor: Colors.PRIMARY,
            width: '100%',
            borderRadius: 14
        }}>
            <Text style={{
                fontFamily: 'outfit-regular',
                fontSize: 20,
                textAlign: 'center'
            }}>
                Get Started
            </Text>
        </Pressable>
      </View>
    </View>
  )
}