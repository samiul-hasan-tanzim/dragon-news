import Image from 'next/image';
import Link from 'next/link';
import userAvater from '@/assets/user.png';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-6'>
            <div></div>
            <ul className='flex items-center justify-between gap-5 text-gray-700'>
                <li><NavLinks href={'/'}>Home</NavLinks></li>
                <li><NavLinks href={'/about'}>About</NavLinks></li>
                <li><NavLinks href={'/career'} className={`text-yellow-400`}>Career</NavLinks></li>
            </ul>
            <div className='flex items-center gap-5'>
                <Image src={userAvater} width={60} alt='User avater' />
                <Link href={'/login'}> <button className='btn bg-purple-500 text-white'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;