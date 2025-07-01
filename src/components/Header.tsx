"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className='fixed top-0 w-full z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm'>
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <Link
            href='/'
            className='text-2xl font-extrabold tracking-tight flex items-center gap-2'>
            <span className='bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>
              Zahan Wasif
            </span>
          </Link>
          {/* Desktop nav */}
          <div className='hidden md:flex items-center space-x-8 text-base font-medium'>
            <Link
              href='#projects'
              className='hover:text-blue-600 dark:hover:text-cyan-400 transition-colors'>
              Projects
            </Link>
            <Link
              href='#contact'
              className='hover:text-blue-600 dark:hover:text-cyan-400 transition-colors'>
              Contact
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            className='md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            aria-label='Open menu'
            onClick={() => setOpen((v) => !v)}>
            <span className='sr-only'>Open menu</span>
            <svg
              width='28'
              height='28'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='text-blue-500 dark:text-cyan-400'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        {/* Mobile nav */}
        {open && (
          <div className='md:hidden flex flex-col items-end gap-4 mt-2 bg-white/90 dark:bg-black/90 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-800 animate-fade-in'>
            <Link
              href='#projects'
              className='w-full py-2 px-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors'
              onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link
              href='#contact'
              className='w-full py-2 px-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors'
              onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

