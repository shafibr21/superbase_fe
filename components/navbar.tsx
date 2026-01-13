import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <header className="bg-white/95 backdrop-blur sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 py-8">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={150} height={100} />
          </Link>
        <div className="flex-1 flex items-center justify-end gap-5">    
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-4 ">
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition w-17.75 h-3.75">
              HOME
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition w-45 h-3.75">
              PROGRAMS & SERVICES
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition w-17.75 h-3.75">
              ABOUT
            </Link>
            <Link href="#" className="text-sm font-medium text-foreground hover:text-primary transition w-17.75 h-3.75">
              CONTACT
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-secondary rounded-lg transition">
              <Image src="/shopping_bag.svg" alt="Shopping Bag" width={24} height={24} />
            </button>
            <Button className="bg-linear-to-l from-[#5D06E9] to-[#0B23FA] text-primary-foreground px-4 py-2 text-md rounded-sm w-27 h-12 font-medium shadow-lg">
              SIGN IN
            </Button>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar