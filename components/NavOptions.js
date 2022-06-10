import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed';

const data = [
    {
        id: "1",
        title: "Home",
        imageName: "home",
        screen: "HomeScrean"
    },
    {
        id: "2",
        title: "Institutions",
        imageName: "university",
        screen: "Screan2"
    },
    {
        id: "3",
        title: "Accounts",
        imageName: "clipboard-list",
        screen: "Screan3"
    },
    {
        id: "4",
        title: "Scheduled transactions",
        imageName: "calendar-alt",
        screen: "Screan4"
    },
    {
        id: "5",
        title: "Categories",
        imageName: "list",
        screen: "Screan5"
    },
    {
        id: "6",
        title: "Tags",
        imageName: "tags",
        screen: "Screan6"
    },
    {
        id: "7",
        title: "Payees",
        imageName: "handshake",
        screen: "Screan7"
    },
    {
        id: "8",
        title: "Ledgers",
        imageName: "exchange-alt",
        screen: "Screan8"
    },
    {
        id: "9",
        title: "Investments",
        imageName: "chart-line",
        screen: "Screan9"
    },
    {
        id: "10",
        title: "Reports",
        imageName: "chart-bar",
        screen: "Screan10"
    },
    {
        id: "11",
        title: "Budgets",
        imageName: "wallet",
        screen: "Screan11"
    },
    {
        id: "12",
        title: "Forecast",
        imageName: "globe",
        screen: "Screan12"
    },
    {
        id: "13",
        title: "Outbox",
        imageName: "outdent",
        screen: "Screan13"
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
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 m-2 w-40`}>
                <View style={tw``}>
                    <Icon 
                        style={{
                            // width: 40,
                            // height: 40,
                            resizeMode: "contain"
                        }}
                        name={item.imageName}
                        color="black" 
                        type='font-awesome-5'/>
                    {/* <Image
                        style={{
                            width: 40,
                            height: 40,
                            resizeMode: "contain"
                        }}
                        source={item.imageLink}
                    /> */}
                    <Text style={tw`mt-2 text-lg font-semibold text-center`}>{item.title}</Text>
                </View>                
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})