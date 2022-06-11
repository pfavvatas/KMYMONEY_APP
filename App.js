import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen, MenuScreen, InstitutionsScreen, AccountsScreen,
  ScheduledTransactionsScreen, CategoriesScreen, TagsScreen, PayeesScreen,
  LedgersScreen, InvestmentsScreen, ReportsScreen, BudgetsScreen, ForecastScreen,
  OutboxScreen
} from './screens'

export const globalScreenOptions = {
  headerStyle: { backgrountColor: "#2C6BED"},
  headerTitleStyle: { color: "black" },
  headerTintColor: "black",
};


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator screenOptions={globalScreenOptions}>
            <Stack.Screen
              name='Menu'
              component={MenuScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Institutions'
              component={InstitutionsScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Accounts'
              component={AccountsScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='ScheduledTransactions'
              component={ScheduledTransactionsScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Categories'
              component={CategoriesScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Tags'
              component={TagsScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Payees'
              component={PayeesScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Ledgers'
              component={LedgersScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Investments'
              component={InvestmentsScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Reports'
              component={ReportsScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Budgets'
              component={BudgetsScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Forecast'
              component={ForecastScreen}
              options={{
                headerShown: true,
              }}
            />
            <Stack.Screen
              name='Outbox'
              component={OutboxScreen}
              options={{
                headerShown: true,
              }}
            />
          </Stack.Navigator>
          {/* <HomeScreen/> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
