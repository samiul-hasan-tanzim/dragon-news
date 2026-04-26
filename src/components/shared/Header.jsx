"use client"
import logo from '@/assets/logo.png';
import { format } from 'date-fns';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // cleanup
    }, []);

    return (
        <div className='text-center space-y-3 my-5'>
            <Image src={logo} width={300} alt='logo' className='mx-auto' />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(currentTime, "EEEE, dd MMMM yyyy — hh:mm:ss a")}</p>
        </div>
    );
};

export default Header;