'use client'

import React from 'react';

import Logo from '../assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import DropdownMenu from './dropdown';
import {signIn, useSession, signOut} from 'next-auth/react';

const header = () => {

    const {data: session} = useSession();

    const handleGoogleSignIn = () => {
        signIn('google');
      };
    
      const handleSignOut = async () => {
        await signOut({ callbackUrl: '/' });
      };
    
      const options = [
        { name: 'Perfil', url: '/profile' },
        { name: 'Mis Eventos', url: '/events'},
        { name: 'Cerrar sesión', onClick: handleSignOut }
      ];
    
  return (
    <header className='h-full flex flex-col justify-center sticky z-10 top-0  select-none backdrop-blur-xl transition-all duration-300'>
        <div className='mx-0 max-w-full px-4 md:px-6'>
            <nav className='flex items-center justify-between flex-wrap text-[#2B2B2B]'>
                <Link className='flex items-center' href='/'>
                    <Image src={Logo} className='w-32 lg:w-36' alt='invitarte logo'/>
                </Link>

                {session?.user ? (
                    <div className='flex flex-row items-center gap-5'>
                        <DropdownMenu userImage={session.user.image} options={options} />
                    </div>
                ) : (
                    <div className='flex flex-row items-center gap-5'>
                        <button className='px-5 py-2 text-sm bg-gray-300 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-95' onClick={() => handleGoogleSignIn()}>
                            Iniciar sesión
                        </button>
                    </div>
                )}
            </nav>
        </div>
    </header>
  )
}

export default header;