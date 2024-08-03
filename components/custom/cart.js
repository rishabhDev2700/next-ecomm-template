"use client"
import { useContext, useEffect } from 'react'
import { CartContext } from './contexts'
import { ShoppingBag } from "lucide-react"
import { Sheet, SheetHeader, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from '../ui/sheet'
import { Card, CardFooter, CardHeader } from '../ui/card'
import { Separator } from '../ui/separator'
import CartOptions from './cart-options'
export default function Cart() {
    const { cartItems, setCartItems } = useContext(CartContext)
    const items = cartItems.map((item,index) => {
        return <Card className="flex" key={item.product._id}>
            <div><img className='w-32' src={item.product.images[0]} /></div>
            <div>
            <CardHeader>{item.product.name}</CardHeader>
            <CardFooter>${item.product.price}</CardFooter>
            <CartOptions qnty={item.qnty} index={index} cart={cartItems} setter={setCartItems}></CartOptions>
            </div>
        </Card>
    })
    return (
        <Sheet>
            <SheetTrigger asChild className=""><ShoppingBag className="" size={32} /></SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription>Your Selected Products</SheetDescription>
                </SheetHeader>
                <div className='grid gap-4 py-4'>
                {items ? items : "Empty Cart"}
                </div>
                <Separator></Separator>
                <Card>
                    <CardHeader>Total:{cartItems.reduce((acc,curr)=>acc+(curr.product.price*Number(curr.qnty)),0)}</CardHeader>
                </Card>

            </SheetContent>
        </Sheet>
    )
}
