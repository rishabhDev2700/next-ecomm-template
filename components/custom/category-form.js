"use client"
import { useFormState } from 'react-dom'
import { addCategory } from '@/app/actions'
import Submit from './submit'
const initialState = {
    message: '',
}

export default function CategoryForm() {
    const [state, formAction] = useFormState(addCategory, initialState)

    return (
        <form action={formAction} className='flex flex-col mx-4'>
            <h1 className='text-4xl text-center my-8'>Category</h1>
            <input className='border p-2 my-1' type="text" name='name' placeholder='Name' required></input>
            <input className='border p-2 my-1' type="text" name='slug' placeholder='Slug' required></input>
            <Submit />
            <p>{state?.message}</p>
        </form>
    )
}
