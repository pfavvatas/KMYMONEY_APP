import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "1",
        title: "Home",
        imageName: "home",
        screen: "HomeScreen"
    },
    {
        id: "2",
        title: "Institutions",
        imageName: "university",
        screen: "InstitutionsScreen"
    },
    {
        id: "3",
        title: "Accounts",
        imageName: "clipboard-list",
        screen: "AccountsScreen"
    },
    {
        id: "4",
        title: "Scheduled transactions",
        imageName: "calendar-alt",
        screen: "ScheduledTransactionsScreen"
    },
    {
        id: "5",
        title: "Categories",
        imageName: "list",
        screen: "CategoriesScreen"
    },
    {
        id: "6",
        title: "Tags",
        imageName: "tags",
        screen: "TagsScreen"
    },
    {
        id: "7",
        title: "Payees",
        imageName: "handshake",
        screen: "PayeesScreen"
    },
    {
        id: "8",
        title: "Ledgers",
        imageName: "exchange-alt",
        screen: "LedgersScreen"
    },
    {
        id: "9",
        title: "Investments",
        imageName: "chart-line",
        screen: "InvestmentsScreen"
    },
    {
        id: "10",
        title: "Reports",
        imageName: "chart-bar",
        screen: "ReportsScreen"
    },
    {
        id: "11",
        title: "Budgets",
        imageName: "wallet",
        screen: "BudgetsScreen"
    },
    {
        id: "12",
        title: "Forecast",
        imageName: "globe",
        screen: "ForecastScreen"
    },
    {
        id: "13",
        title: "Outbox",
        imageName: "outdent",
        screen: "OutboxScreen"
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            data={data}
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