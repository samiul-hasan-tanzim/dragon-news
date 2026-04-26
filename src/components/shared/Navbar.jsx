"use client"
import Image from 'next/image';
import Link from 'next/link';
import userAvater from '@/assets/user.png';
import NavLinks from './NavLinks';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    // console.log(session)
    const user = session?.user
    // console.log(user?.image)
    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <ul className='flex items-center justify-between gap-5 text-gray-700'>
                <li><NavLinks href={'/'}>Home</NavLinks></li>
                <li><NavLinks href={'/about'}>About</NavLinks></li>
                <li><NavLinks href={'/career'} className={`text-yellow-400`}>Career</NavLinks></li>
            </ul>
            <div className='flex items-center gap-5'>
                <div>
                    {
                        isPending ? <span className="loading loading-spinner loading-xl"></span> : user ? (
                            <div className='flex items-center gap-5'>
                                <Image src={isValidUrl(user?.image) ? user.image : userAvater} width={60} height={60} alt='User avater' />
                                <Link href={'#'}> <button onClick={async () => await authClient.signOut()} className='btn bg-purple-500 text-white'>Logout</button></Link>
                            </div>
                        ) : <Link href={'/login'}> <button className='btn bg-purple-500 text-white'>Login</button></Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;