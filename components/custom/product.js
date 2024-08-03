import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Separator } from '../ui/separator'

export default function Product({data}) {
    return (
        <Link href={`/${data.slug}`}>
            <Card className="m-4 p-4 shadow-md shadow-gray md:w-80 hover:scale-95 duration-200">
                <CardHeader>
                    <img className='min-h-64 object-cover' src={data.images[0]} alt={data.name} />
                </CardHeader>
                <CardTitle className="my-2 py-2">{data.name}</CardTitle>
                <Separator></Separator>
                <CardFooter className="text-3xl font-bold mx-0 px-2 py-4">${data.price}</CardFooter>
            </Card>
        </Link>
    )
}
