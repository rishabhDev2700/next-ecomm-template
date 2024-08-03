import { fetchCategory, fetchProduct } from "@/lib/data"
import Carousel from "@/components/custom/carousel"
import { Separator } from "@/components/ui/separator"
import { teko } from "@/components/custom/fonts"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import CartButton from "@/components/custom/cart-buttons"
import Review from "@/components/custom/review"
import Link from "next/link"
export default async function Page({ params }) {
    const data = await fetchProduct(params.product)
    const productsData = await fetchCategory(data.category)
    const products = productsData.products
    return (
        <div className="min-h-[80vh] md:w-3/5 md:m-auto py-4">
            <div className="grid md:grid-cols-2 my-4">
                <Carousel className="self-stretch" images={data.images}></Carousel>
                <div className={`px-4 py-8 ${teko.className} md:px-8 w-full h-full flex flex-col justify-evenly`}>
                    <h1 className="text-6xl my-2">{data.name}</h1>
                    <h2 className="text-2xl md:text-4xl my-2 font-semibold">Price:${data.price}</h2>
                    <Separator />
                    <CartButton product={data} />
                    <div className="text-2xl font-semibold text-gray-700 my-2">Description</div>
                    <p className="text-lg font-light py-4">{data.description}</p>
                </div>
            </div>
            <div className="px-4 pb-8">
                <h2 className="text-3xl py-4">Reviews</h2>
                <div className="flex overflow-x-auto shadow-inner shadow-black/10 p-0 snap-mandatory snap-x">
                    <Review user={"rishabh"} text={"The other key difference is that update validators only run on the paths specified in the update. For instance, in the below example, because 'name' is not specified in the update operation, update validation will succeed."} rating={3} /><Review user={"Arnav"} text={"The other key difference is that update validators only run on the paths specified in the update. For instance, in the below example, because 'name' is not specified in the update operation, update validation will succeed."} rating={4} /><Review user={"Nikhil"} text={"The other key difference is that update validators only run on the paths specified in the update. For instance, in the below example, because 'name' is not specified in the update operation, update validation will succeed."} rating={5} />   <Review user={"rishabh"} text={"The other key difference is that update validators only run on the paths specified in the update. For instance, in the below example, because 'name' is not specified in the update operation, update validation will succeed."} rating={3} />
                </div>
            </div>
            <div className="px-4 pb-8">
                <h2 className="py-4 text-3xl">Related Products</h2>
                <div className="flex overflow-x-auto shadow-inner shadow-black/10 p-0 snap-mandatory snap-x">
                    {products.map(product => {
                        return (
                            <Link href={`${product.slug}`} key={product._id}>
                                <Card className="w-64 shadow-md shadow-black/20" >
                                    <div>
                                        <img className="w-full" src={product.images[0]} />
                                    </div>
                                    <CardHeader className="text-3xl font-bold">{product.name}</CardHeader>
                                    <Separator/>
                                    <CardFooter className="py-4 font-semibold text-xl">${product.price}</CardFooter>
                                </Card>
                            </Link>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}
