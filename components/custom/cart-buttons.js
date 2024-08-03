"use client"
import { useState, useContext, useEffect } from 'react'
import { CartContext } from './contexts'
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { urbanist } from './fonts'
import { useToast } from '../ui/use-toast'
export default function CartButton({ product }) {
    const { cartItems, setCartItems } = useContext(CartContext)
    const [qnty, setQnty] = useState(1)
    const {toast}=useToast()
    const addToCart = () => {
        setCartItems([...cartItems, { product: product, qnty: qnty, }])
        toast({description:"Product added to cart"})
    }
    useEffect(() => {
        console.log(cartItems)
    }, cartItems)
    return (
        <div className={`py-2 flex justify-evenly items-end text-2xl font-light ${urbanist.className}`}>
            <Button className="bg-green-600 hover:bg-green-500 text-black md:mr-4 w-1/2" onClick={addToCart}>Add to Bag</Button>
            <div className='w-1/2'>
                <label className='text-lg py-2'>Qnty</label>
                <Select onValueChange={setQnty} defaultValue={qnty}>
                    <SelectTrigger>
                        <SelectValue ></SelectValue>
                    </SelectTrigger>
                    <SelectContent className="text-black" name="quantity" defaultValue={qnty} value={qnty} onChange={e => setQnty(e.target.options.selectedIndex)}>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="6">6</SelectItem>
                        <SelectItem value="7">7</SelectItem>
                        <SelectItem value="8">8</SelectItem>
                        <SelectItem value="9">9</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div >
    )
}
