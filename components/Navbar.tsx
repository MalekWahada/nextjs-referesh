import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { auth, signIn, signOut } from '../auth'
import { BadgePlus, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = async () => {
    const session = await auth();

    async function handleSignIn() {
        'use server';
        await signIn('github')
    }

    async function handleSignOut() {
        'use server';
        await signOut({
            redirectTo: '/'
        })
    }

    return (
        <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
            <nav className='flex justify-between items-center'>
                <Link href="/">
                    <Image src='/logo.png' alt='logo' width={144} height={30} />
                </Link>
                <div className='flex items-centergap-5 text-black'>
                    {session?.user ? (
                        <>
                            <Link href='/startup/create'>
                                <span className='max-sm:hidden'>Create</span>
                                <BadgePlus className='size-6 sm:hidden' />
                            </Link>
                            <form action={handleSignOut}>
                                <button type='submit'>
                                    <span className='max-sm:hidden'>Logout</span>
                                    <LogOut className='size-6 sm:hidden text-red-500' />
                                </button>
                            </form>
                            <Link href={`/user/${session?.id}`}>
                                <Avatar className='size-10'>
                                    <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || ''} />
                                    <AvatarFallback>
                                        AV
                                    </AvatarFallback>
                                </Avatar>
                            </Link>
                        </>
                    ) : (
                        <form action={handleSignIn}>
                            <button type='submit'>Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
