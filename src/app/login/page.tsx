"use client"

import Image from 'next/image'

import { Inter } from 'next/font/google'

import { signIn, useSession, signOut } from "next-auth/react"
import { Button } from '@/components/ui/button';




export default function LoginPage() {
  const session = useSession();
  console.log(session)
  return (
    <div className='bg-red-400'>
      {session.data && <div style={{ display: "flex", justifyContent: "space-between" }}>

        {session.data.user?.email}

        <div>
          <button onClick={() => signOut()}>Logout</button>
        </div>
      </div>}
      {!session.data && <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button className="bg-red-400 " onClick={() => signIn()}>LOGIN</Button>
        </div>
      </div>}
    </div>
  )
}
