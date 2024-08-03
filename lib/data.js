import connectMongo from "@/models/db";
import { Category, Product } from "@/models/models";
export async function getProducts() {
    await connectMongo()
    products = await Product.find({})
    return products
}


export async function fetchAllCategories() {
    try {
        await connectMongo()
        const categories = await Category.find({})
        const categoriesData = JSON.parse(JSON.stringify(categories))
        return categoriesData
    }
    catch (error) {
        console.log(`Error fetching categories`)
    }
}

export async function fetchCategory(param) {
    try {
        await connectMongo()
        const category = await Category.findOne({ slug: param })

        const products = await Product.find({ category: category.slug })

        const categoryData = JSON.parse(JSON.stringify(category))
        const productData = JSON.parse(JSON.stringify(products))
        return { category: categoryData, products: productData }
    }
    catch (error) {
        console.log("Something went wrong while fetching products of category")
        throw error;
    }
}

// export async function fetch

export async function fetchProduct(slug) {
    try {
        await connectMongo()
        const product = await Product.findOne({ slug: slug })
        const productData = JSON.parse(JSON.stringify(product))
        return productData
    }
    catch (error) {
        console.log(`Unable to fetch ${slug} product`)
        throw error;
    }

}
export async function searchProducts(query) {
    try {
        const results = await Product.find({ $text: { $search: query } });
        return results;
    } catch (error) {
        console.error('Error searching articles:', error);
        throw error;
    }
}