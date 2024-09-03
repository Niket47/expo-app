import { View, Text } from 'react-native'
import React from 'react'
import Root from './root'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const PhaseAMain = () => {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    )
}

export default PhaseAMain