import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PhaseAMain from './PhaseA/MainPhaseA';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <PhaseAMain />
        </View>
    )
}

export default App

const styles = StyleSheet.create({})