import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className="bg-white/50 backdrop-blur border-t border-border mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-black text-center sm:text-left w-69.25 h-3.75 font-semibold">
            $35 FOR 5 DAYS (1 ACTIVITY PER DAY)
          </p>
          <div className="flex items-center gap-3">
            <Button className="bg-transparent text-black px-4 py-2 text-md rounded-sm w-27 h-12 font-medium hover:bg-nonee">
              Back
            </Button>
            <Button className="bg-linear-to-l from-[#5D06E9] to-[#0B23FA] text-primary-foreground px-4 py-2 text-md rounded-sm w-27 h-12 font-medium shadow-lg">
              NEXT
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer