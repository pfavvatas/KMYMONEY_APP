import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'

const CategoriesScreen = () => {
    const form = {
        title: 'CategoriesScreen'
    }
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-0`}>
                <View>
                    <Text style={tw`mt-2 text-lg font-semibold text-center`}>{form.title}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({})