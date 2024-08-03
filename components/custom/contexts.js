"use client"
import { createContext, useState } from "react";

export const CartContext = createContext({})

import React from 'react'

export default function Cart({children}) {
    const [cartItems, setCartItems] = useState([])
    return (
        <CartContext.Provider value={{ cartItems, setCartItems }} >
            {children}
        </CartContext.Provider>
    )
}
