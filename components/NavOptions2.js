import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { menuData } from './';


const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={menuData}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={[tw`bg-gray-200 `, { height: 0.5 }]} />}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`flex-row items-center p-5`}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-200 p-3`}
                        name={item.imageName}
                        color="black"
                        type='font-awesome-5'
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg pb-2`}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})