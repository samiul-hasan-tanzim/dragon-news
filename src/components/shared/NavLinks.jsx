'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ href, className, children }) => {
    const pathname = usePathname()
    // console.log(pathname, href)
    const isActive = pathname === href

    return (
        <Link href={href} className={`${isActive ? 'border-b-2 border-b-purple-500' : ''} ${className}`}>{children}</Link>
    );
};

export default NavLinks;