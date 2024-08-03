import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className='px-2'>
            <Skeleton className="w-full h-96 mt-8 bg-gray-200" />
            <Skeleton className="w-full h-12 mt-12 bg-gray-200" />
            <Skeleton className="w-32 h-8 my-2 bg-gray-200" />
            <Separator />
            <Skeleton className="w-32 h-8 my-2 bg-gray-200" />
            <Skeleton className="w-24 h-8 my-2 bg-gray-200" />
            <div className="flex">
                <Skeleton className="w-1/2 h-14 my-2 mx-1 bg-gray-200" />
                <Skeleton className="w-1/2 h-14 my-2 mx-1 bg-gray-200" />
            </div>

        </div>
    )
}
