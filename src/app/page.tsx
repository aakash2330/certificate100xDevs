import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (<>
  <div className="h-screen flex justify-center items-center flex-col gap-[2rem]">
  <Link href="/sign"><Button className='w-[10rem] bg-red-400'>Sign Certificate</Button></Link>
   <Link href="/check"><Button className='w-[10rem]'>Check Certificate</Button></Link>
   </div>
   </>)
}
  
