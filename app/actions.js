"use server"

import connectMongo from "@/models/db"
import { Category, Product } from "@/models/models"

export async function addProduct(initialState, formData) {
    const data = {
        name: formData.get('name'),
        description: formData.get('description'),
        slug: formData.get('slug'),
        price: formData.get('price'),
        stock: formData.get('stock'),
        category: formData.get('category'),
        // images: formData.get('file')
    }
    console.log(data)
    try {
        await connectMongo()
        const product = await Product.create(data)
        return { message: "Product saved" }
    }
    catch (error) {
        console.log(error)
        throw error
    }
}



export async function addCategory(initialState, formData) {
    const data = {
        name: formData.get('name'),
        slug: formData.get('slug'),
    }
    try {
        await connectMongo()
        const category = await Category.create(data)
        return { message: "Category saved" }
    }
    catch (error) {
        console.log(error)
        throw error
    }

}