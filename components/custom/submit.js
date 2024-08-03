'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader } from 'lucide-react'
export default function Submit() {
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} className='bg-violet-500 text-white p-2 mt-2' type="submit">{pending ? <Loader className='animate-spin' /> : "Create"}</Button>
    )
}
