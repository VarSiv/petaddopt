import React from 'react'
import * as WebBrowser from 'expo-web-browser'
import { Text, View, Button, Image, Pressable} from 'react-native'
import { Link } from 'expo-router'
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import Colors from './../../constants/Colors'

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync()
    return () => {
      void WebBrowser.coolDownAsync()
    }
  }, [])
}

WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
        setActive({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])

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
        <Pressable onPress={onPress} style={{
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