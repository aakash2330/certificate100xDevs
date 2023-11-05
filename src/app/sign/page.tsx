"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"


import { useState } from "react"

import Link from "next/link"
import axios from "axios"
import { signOut, useSession } from "next-auth/react"
import LoginPage from "../login/page"


//form schema


export default function ProfileForm() {


    const session = useSession();

   
  // defining the form

  const testZod = z.object({
    email:z.string(),
  })

  type testType = z.infer<typeof testZod> 
  const form = useForm<testType>({
    resolver: zodResolver(testZod),
    defaultValues: {
      email:""
    },
  })

  //  submit handler 
  async function onSubmit(values: testType) {
    console.log({values});
    const {data} = await axios.post("http://localhost:3000/api/sign",{email:values.email})
    console.log(data);
    console.log("Form submitted")
  }



  return (

    
    <div className="h-screen flex justify-center items-center flex-col">
   {!session.data && <div><LoginPage></LoginPage></div>}




    {session.data && <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>EMAIL</FormLabel>
              <FormControl>
                <Input placeholder="johnDoe@gmail.com" className="text-black" {...field} />
              </FormControl>
              <FormDescription>
                Email Id that needs to be signed
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />



        <HoverCard>
  <HoverCardTrigger className="hover:underline cursor-pointer text-sm">Need to check ?</HoverCardTrigger>
  <HoverCardContent className="flex text-xs">{"-->"}&nbsp;<p className="hover:underline cursor-pointer"><Link href="/check">Check Authenticiy</Link></p></HoverCardContent>
</HoverCard>


            <br/>
            <div className="flex gap-[2rem]">
        <Button type="submit">Submit</Button>
        <Button className="bg-red-400 " onClick={() => signOut()}>Logout</Button>
        </div>
      </form>
    </Form>
    <br/>
    
    </div>}
    </div>
  )

}
