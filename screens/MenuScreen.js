import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import NavOptions2 from '../components/NavOptions2'

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-0`}>
                <View>
                    <Text style={tw`mt-2 text-lg font-semibold text-center`}>Menu</Text>
                </View>
                {/* <NavOptions /> */}
                <NavOptions2 />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})