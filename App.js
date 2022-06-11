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



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name='MenuScreen'
              component={MenuScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='HomeScreen'
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='InstitutionsScreen'
              component={InstitutionsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='AccountsScreen'
              component={AccountsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ScheduledTransactionsScreen'
              component={ScheduledTransactionsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='CategoriesScreen'
              component={CategoriesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='TagsScreen'
              component={TagsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='PayeesScreen'
              component={PayeesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='LedgersScreen'
              component={LedgersScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='InvestmentsScreen'
              component={InvestmentsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ReportsScreen'
              component={ReportsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='BudgetsScreen'
              component={BudgetsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='ForecastScreen'
              component={ForecastScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='OutboxScreen'
              component={OutboxScreen}
              options={{
                headerShown: false,
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
