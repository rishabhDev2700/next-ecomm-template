import { fetchAllCategories } from "@/lib/data"
import { Card, CardHeader } from "@/components/ui/card"
import Link from "next/link"
export default async function Page() {
    const categories = await fetchAllCategories()
    const list = categories.map(category => {
        return (
            <Link href={`categories/${category.slug}`}>
                <Card className="w-64 md:w-96 md:h-96 md:flex md:flex-col md:justify-between mx-auto my-1 my-4 shadow-md shadow-black/20 hover:bg-blue-500 hover:text-white duration-200" key={category.name}>
                    <div>
                        <img className="w-full md:h-72 md:object-cover rounded-t-md" src={category.cover} />
                    </div>
                    <CardHeader className="md:mb-2 text-2xl md:font-semibold">{category.name}</CardHeader>
                </Card>
            </Link>
        )
    })
    return (
        <div className="md:w-4/5 min-h-[80vh] md:mx-auto px-4 py-8 text-center">
            <h2 className="py-4 text-3xl">Categories</h2>
            <div className="overflow-x-auto md:flex lg:flex-wrap  md:justify-start lg:justify-evenly">
                {list}

            </div>
        </div>
    )
}
