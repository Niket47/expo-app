import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProductScreen from './screens/ProductScreen';


const Root = () => {

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    function MyTabs() {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="MyTabs" component={MyTabs} />
                    <Tab.Screen name="Product" component={ProductScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Root

const styles = StyleSheet.create({})