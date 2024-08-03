import React from 'react'
import { StarFill, StarLine } from './star'
import { Separator } from '@/components/ui/separator'
export default function Review(props) {
    let ratings = []
    for(let i=0;i<5;i++){
        if(i<props.rating){
            ratings.push((<StarFill key={i}/>))
        }
        else{
            ratings.push((<StarLine key={i}/>))
        }
    }
    return (
        <div className='min-w-[20rem] border p-4 mx-2 text-md shadow-lg shadow-black/25 snap-start'>
            <div className='flex'>
                <div className='font-bold text-xl'>{props.user}</div>
                <div className='w-1/2 flex justify-evenly items-center px-2'>
                    {ratings}
                </div>
            </div>
                <Separator/>
            <div className='py-2'>
                {props.text}
            </div>
        </div>
    )
}
