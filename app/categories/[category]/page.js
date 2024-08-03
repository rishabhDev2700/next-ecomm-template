import { fetchCategory, fetchProduct } from "@/lib/data"
import Product from "@/components/custom/product"
export default async function Page({ params }) {
    const data = await fetchCategory(params.category)
    const products = data.products.map(product => <Product key={product._id} data={product} />)
    return (
        <div className="md:w-3/5 md:mx-auto min-h-[80vh] py-8">
            <h1 className="text-4xl text-center">{data.category.name}</h1>
            <div className="flex flex-wrap">
                {products}
            </div>
        </div>
    )
}
