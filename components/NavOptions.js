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
            numColumns={2}
            // horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 m-2 w-40`}>
                    <View style={tw``}>
                        <Icon
                            style={{
                                // width: 40,
                                // height: 40,
                                resizeMode: "contain"
                            }}
                            name={item.imageName}
                            color="black"
                            type='font-awesome-5' />
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