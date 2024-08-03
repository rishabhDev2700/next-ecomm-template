import React from 'react'
import { LoaderCircle } from 'lucide-react'
export default function Loading() {
  return (
    <div className="grid content-center justify-center items-center min-h-[80vh]">
        <LoaderCircle size={52} className='animate-spin'/>
    </div>
  )
}
