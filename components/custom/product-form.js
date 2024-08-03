"use client"
import { useEffect, useState } from 'react'
import { addProduct } from '@/app/actions'
import { useFormState } from "react-dom"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Submit from './submit'
import { Input } from '../ui/input'
const initialState = {
    message: '',
}

export default function ProductForm() {
    const [state, formAction] = useFormState(addProduct, initialState)
    const [imgsSrc, setImgsSrc] = useState([])
    const [images, setImages] = useState([])
    const [categories, setCategories] = useState([])
    const handleImages = (e) => {
        console.log("Handle images")
        for (const file of e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImgsSrc([...imgsSrc, reader.result])
            };
            reader.onerror = () => {
                console.log(reader.error);
            };
        }
    }
    useEffect(() => {
        setImages([...imgsSrc.map((i) => <img src={i} key={i} />)])
        console.log(imgsSrc)
    }, [imgsSrc])

    useEffect(() => {
        let data = [];
        fetch("http://localhost:3000/api/categories").then(res => res.json()).then(body => {
            data = body['categories']
            setCategories(data)
        })
    }, [])
    return (
        <form action={formAction} className='flex flex-col mx-4' encType='multipart/form-data' method="post">
            <h1 className='text-4xl text-center my-8'>Product</h1>
            <input className='border p-2 my-1' type="text" name='name' placeholder='Name' required></input>
            <textarea className="border p-2 my-1" name="description" placeholder="Description"></textarea>
            <input className='border p-2 my-1' type="text" name='slug' placeholder='Slug' required></input>
            <input className='border p-2 my-1' type="number" name='price' placeholder='Price' required></input>
            <input className='border p-2 my-1' type="number" name='stock' placeholder='Stock' required></input>
            <Select name='category' required>
                <SelectTrigger className='border p-2 my-1'>
                    <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                    {categories.map((c) => {
                        return <SelectItem value={c.slug} key={c.slug}>{c.name}</SelectItem>
                    })}

                </SelectContent>
            </Select>
            <label>Images selected: {imgsSrc.length}</label>
            <input className='w-full border bg-white' type="file" name="file" multiple onChange={handleImages} />
            <Submit />
            <div className=''>
                {images}
            </div>
        </form>
    )
}
