import { FileSliders, FileStack, Github, Home, LinkedinIcon, NotebookText, Phone, User } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import ResponsiveComponent from '../ResponsiveComponent';
import clsx from 'clsx';

const getIcon = (iconName) => {
  switch (iconName) {
    case "home":
      return <Home className='w-full h-auto' strokeWidth={1.5} />;
    case "about":
      return <User className='w-full h-auto' strokeWidth={1.5} />;
    case "projects":
      return <FileSliders className='w-full h-auto' strokeWidth={1.5} />;
    case "contact":
      return <Phone className='w-full h-auto' strokeWidth={1.5} />;
    case "github":
      return <Github className='w-full h-auto' strokeWidth={1.5} />;
    case "linkedin":
      return <LinkedinIcon className='w-full h-auto' strokeWidth={1.5} />;
    case "stack":
      return <FileStack className='w-full h-auto' strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className='w-full h-auto' strokeWidth={1.5} />;

    default:
      return <Home className='w-full h-auto' strokeWidth={1.5} />;
  }
}

const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <ResponsiveComponent>
      {
        ({ size }) => {
          return size && size >= 480 ?
            <div className='absolute cursor-pointer z-50'
              style={{ transform: `translate(${x}, ${y})` }}>

              <Link href={link} target={newTab ? '_blank' : "_self"}
                className='text-foreground rounded-full flex items-center justify-center custom-bg'
                aria-label={label}
                name={label}>
                <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse hover:text-accent group-hover:pause'>
                  {getIcon(icon)}
                  <span className='peer absolute top-0 left-0 w-full h-full' />
                  <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg'>
                    {label}
                  </span>
                </span>
              </Link>
            </div>
            :
            <div className='w-fit cursor-pointer z-50'
              style={{ transform: `translate(${x}, ${y})` }}>

              <Link href={link} target={newTab ? '_blank' : "_self"}
                className='text-foreground rounded-full flex items-center justify-center custom-bg'
                aria-label={label}
                name={label}>
                <span className='relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent'>
                  {getIcon(icon)}
                  <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
                  <span className={clsx('absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap')}>
                    {label}
                  </span>

                </span>
              </Link>
            </div>
        }
      }


    </ResponsiveComponent>
  )
}

export default NavButton