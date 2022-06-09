import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const data = [
    {
        id: "1",
        title: "Home",
        image: "https://kmymoney.org/assets/img/app_icon.png",
        screen: "HomeScrean"
    },
    {
        id: "2",
        title: "Institutions",
        image: "https://kmymoney.org/assets/img/app_icon.png",
        screen: "Screan2"
    },
    {
        id: "3",
        title: "Accounts",
        image: "https://kmymoney.org/assets/img/app_icon.png",
        screen: "Screan3"
    },
];

const NavOptions = () => {
  return (
    <FlatList
        data={data}
        numColumns={2}
        // horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: "contain"
                        }}
                        source={{
                            uri: item.image,
                        }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                </View>                
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})