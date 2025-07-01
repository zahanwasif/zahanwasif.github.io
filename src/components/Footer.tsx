import React from "react";

export default function Footer() {
  return (
    <footer className='w-full bg-gradient-to-t from-black/80 via-black/60 to-transparent dark:from-zinc-900/90 dark:via-zinc-900/60 dark:to-transparent backdrop-blur-xl border-t border-zinc-800/60 shadow-[0_-2px_24px_0_rgba(0,0,0,0.15)] py-10 px-4 mt-24'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='flex flex-col items-center md:items-start gap-2'>
          <h3 className='text-xl font-bold tracking-tight text-white drop-shadow mb-1'>
            Let’s Connect
          </h3>
          <div className='flex items-center gap-3 text-zinc-300 text-sm'>
            <a
              href='mailto:zahan.wasif@gmail.com'
              className='flex items-center gap-1 hover:text-blue-400 transition-colors'>
              <svg
                width='18'
                height='18'
                fill='currentColor'
                className='inline'
                viewBox='0 0 24 24'>
                <path d='M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.08 11.98-7.08v-.217z' />
              </svg>
              zahan.wasif@gmail.com
            </a>
            <span className='hidden md:inline'>|</span>
            <a
              href='tel:+923164308443'
              className='flex items-center gap-1 hover:text-blue-400 transition-colors'>
              <svg
                width='18'
                height='18'
                fill='currentColor'
                className='inline'
                viewBox='0 0 24 24'>
                <path d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5A1 1 0 013 3.5h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z' />
              </svg>
              +92 316 4308443
            </a>
          </div>
        </div>
        <div className='flex items-center gap-6 mt-6 md:mt-0'>
          <a
            href='https://linkedin.com/in/zahanwasif'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
            className='group rounded-full bg-zinc-800/80 p-2 hover:bg-blue-600 transition-colors shadow-lg'>
            <svg
              width='24'
              height='24'
              fill='currentColor'
              className='text-zinc-200 group-hover:text-white'
              viewBox='0 0 24 24'>
              <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z' />
            </svg>
          </a>
          <a
            href='https://github.com/zahanwasif'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
            className='group rounded-full bg-zinc-800/80 p-2 hover:bg-pink-600 transition-colors shadow-lg'>
            <svg
              width='24'
              height='24'
              fill='currentColor'
              className='text-zinc-200 group-hover:text-white'
              viewBox='0 0 24 24'>
              <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.588 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z' />
            </svg>
          </a>
          <a
            href='mailto:zahan.wasif@gmail.com'
            aria-label='Email'
            className='group rounded-full bg-zinc-800/80 p-2 hover:bg-green-600 transition-colors shadow-lg'>
            <svg
              width='24'
              height='24'
              fill='currentColor'
              className='text-zinc-200 group-hover:text-white'
              viewBox='0 0 24 24'>
              <path d='M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.08 11.98-7.08v-.217z' />
            </svg>
          </a>
        </div>
        <div className='text-xs text-zinc-400 text-center md:text-right mt-8 md:mt-0'>
          <span className='block md:inline'>
            &copy; {new Date().getFullYear()}{" "}
            <span className='font-semibold text-white'>Zahan Wasif</span>. All
            rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

