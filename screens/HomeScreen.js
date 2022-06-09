import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image 
            style={{
                width: 50, 
                height: 50, 
                resizeMode: "contain",
            }}
            source={{
                uri: "https://kmymoney.org/assets/img/app_icon.png",
            }}
        />
        <Text>KMYMONEY</Text>
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})