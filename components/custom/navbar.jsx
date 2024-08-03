import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { ModeToggle } from "../theme-toggler"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Cart from "./cart"

const links = [
  { title: "Home", href: "/" },
  { title: "Categories", href: "/categories" },
  { title: "About", href: "/about" }
]

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-white/30 backdrop-blur-sm border-b-2 shadow-md shadow-gray-500/40 z-50 flex justify-between items-center">
      <div className="hidden px-2 py-2 md:flex items-center justify-end w-screen">
        <header className="hidden md:flex text-4xl w-auto font-semibold border-2 border-black">Fuzz <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-light pl-1">Store</div></header>
        <nav className="hidden md:flex w-9/12 justify-end items-center">
          {links.map(item => {
            return (<Link className="px-8 py-4 mx-2 hover:bg-indigo-500 hover:text-white hover:shadow-md hover:shadow-indigo-700/70 rounded-sm duration-200" href={item.href} key={item.title}>
              {item.title}
            </Link>)
          })}
        </nav>
      </div>
      <div className="flex justify-between items-center mx-8 w-full py-4">

        <Sheet>
          <SheetTrigger><MenuIcon className="md:hidden" size={32} /></SheetTrigger>

          <SheetContent side="left">
            <SheetHeader>Categories</SheetHeader>
            <nav className="flex flex-col">
              {links.map(item => {
                return (<Link className="py-4 px-8" href={item.href} key={item.title}>
                  {item.title}
                </Link>)
              })}
            </nav>
            <ModeToggle className="text-center" />
          </SheetContent>
        </Sheet>
        <header className="flex w-min text-xl font-semibold border-2 border-black md:hidden">Fuzz <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-light pl-1">Store</div></header>
        <Cart />
      </div>
    </div>
  )

}