import { Link, Redirect, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { useUser } from "@clerk/clerk-expo";

export default function Index() {
  const {user} = useUser();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user?
        <Redirect href='(tabs)/home' /> :
        <Redirect href='/login' /> 
      }
    </View>
  );
}
