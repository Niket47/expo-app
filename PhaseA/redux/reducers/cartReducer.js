import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    cartData: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemPresent = state.cartData.find((item) => item.id == action.payload?.id)
            if (itemPresent) {
                itemPresent.quantity++
            } else {
                state.cartData.push({ ...action.payload, quantity: 1 })
            }
        },
        onIncrement: (state, action) => {
            const itemPresent = state.cartData.find((item) => item.id == action.payload?.id)
            if (itemPresent) {
                itemPresent.quantity++
            }
        },
        onDecrement: (state, action) => {
            const itemPresent = state.cartData.find((item) => item.id == action.payload?.id)
            if (itemPresent.quantity == 1) {
                itemPresent.quantity = 0;
                const removeItem = state.cartData.filter((item) => item.id !== action.payload?.id)
                state.cartData = removeItem
            } else {
                itemPresent.quantity--
            }
        },
        onDeleteFromCart: (state, action) => {
            state.cartData.filter((item) => item.id !== action.payload?.id)
        }
    },
})

export const { onIncrement, onDecrement, addToCart, onDeleteFromCart } = cartSlice.actions

export default cartSlice.reducer