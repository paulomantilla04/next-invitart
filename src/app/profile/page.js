'use client'
import { useSession } from 'next-auth/react';
import Image from "next/image";
import Card from '@/components/card';
export default function Profile() {

  
  const {data:session} = useSession();
  const username = session?.user?.name;
  const email = session?.user?.email;
  const image = session?.user?.image;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className='text-3xl font-bold mb-20'>PERFIL</div>
      <Card username={username} email={email} image={image} />
    </main>
  );
}
