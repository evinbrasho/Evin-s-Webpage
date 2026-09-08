'use client';

import Link from 'next/link';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';
import { useTheme } from 'next-themes';


import { Github, Linkedin, Download, Moon, Sun } from 'lucide-react';



export function NavBar() {

    const { setTheme, theme } = useTheme();
    // const warning =confirm('This is a warning message!');
    function changeTheme() {
        if (theme === 'light') {
            setTheme('dark');
        } else {

            setTheme('light');
        }
    }
    console.log(theme);

    return (
        <header className='sticky top-0 w-full border-b bg-background z-[20]'>
            <div className='h-14 flex items-center justify-between md:px-4'>
                {/* Desktop */}
                <MainNav />

                {/* Mobile */}
                <MobileNav />

                {/* Desktop & Mobile */}
                <div className='flex items-center space-x-4 ml-auto justify-end px-4'>
                    <Link title='View Resume' as={'/Resume.pdf'} href='/Resume.pdf' aria-label='Resume' target='_blank' rel='noopener noreferrer'>
                        <Download className='hover:hover:text-[#38b6ff]' size={35} />
                    </Link>
                    <Link
                        as={'https://www.linkedin.com/in/evin-rasho'}
                        href='https://www.linkedin.com/in/evin-rasho'
                        aria-label='LinkedIn'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Linkedin className='hover:hover:text-[#38b6ff]' size={35} />
                    </Link>
                    <Link
                        as={'https://github.com/evinbrasho'}
                        href='https://github.com/evinbrasho'
                        aria-label='GitHub '
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Github className='hover:hover:text-[#38b6ff]' size={35} />
                    </Link>
                    <Sun
                        onClick={changeTheme}
                        strokeWidth={1.75}
                        size={35}
                        className='rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0 hover:cursor-pointer hover:text-[#38b6ff]'
                    />
                    <Moon
                        onClick={changeTheme}
                        strokeWidth={1.75}
                        size={35}
                        className='absolute rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100 hover:cursor-pointer hover:text-[#38b6ff]'
                    />
                </div>
            </div>
        </header>
    );
}
