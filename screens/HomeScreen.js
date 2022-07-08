import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import { HomeCard } from '../components'
import { ScrollView } from 'react-native-web'

const HomeScreen = () => {
    const form = {
        title: 'Home'
    }
    
    const data = [
        {
            title: "Assets and Liabilities Summary",
            children: () => { return(
                <Text>ToDo: Table 1</Text>
            )}
        },
        {
            title: "Payment Acounts",
            children: () => { return(
                <Text>ToDo: Table 2</Text>
            )}
        }
    ]

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <ScrollView>
            <View style={tw`p-0`}>
                {data.map((item, i) => {
                    return(
                        <HomeCard 
                            key={i}
                            data={item}
                        />
                    )
                })}
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})