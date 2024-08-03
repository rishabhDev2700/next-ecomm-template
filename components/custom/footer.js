import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-neutral-800 text-white px-4 py-8'>
            <div className='flex justify-center flex-wrap'>
                <Link className='mx-4 my-2 p-4' href="">Home</Link>
                <Link className='mx-4 my-2 p-4' href="">Categories</Link>
                <Link className='mx-4 my-2 p-4' href="">About</Link>
                <Link className='mx-4 my-2 p-4' href="">Contact-us</Link>
                <Link className='mx-4 my-2 p-4' href="http://fuzzydevs.com" target='_blank'>Fuzzydevs.com</Link>
            </div>
            <div className='text-center font-mono'>
                <div>Copyright 2024</div>
                <div>All Rights Reserved.</div>
            </div>
        </footer>
    )
}
