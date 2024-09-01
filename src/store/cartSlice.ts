import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type ProductsInCartType = {
    [id: number]: number
}

const initialState: ProductsInCartType = {
    1: 3,
    2: 3,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (prevState, action) => ({
            ...prevState,
            [action.payload.id]:
                (prevState[action.payload.id] || 0) + action.payload.count,
        }),
        removeProductFromCart: (prevState, action) =>
            omit(prevState, action.payload),
        changeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.quantity,
        }),
    },
})

export const {
    addProductToCart,
    removeProductFromCart,
    changeProductQuantity,
} = cartSlice.actions

export default cartSlice.reducer
