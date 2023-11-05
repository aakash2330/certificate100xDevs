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


//form schema


export default function CheckForm() {


   
  // defining the form

  const testZod = z.object({
    certificateId:z.string(),
  })

  type testType = z.infer<typeof testZod> 
  const form = useForm<testType>({
    resolver: zodResolver(testZod),
    defaultValues: {
        certificateId:""
    },
  })

  //  submit handler 
  async function onSubmit(values: testType) {
    console.log({values});
    const {data} = await axios.post("http://localhost:3000/api/check",{certificateId:values.certificateId})
    console.log(data);
    console.log("Form submitted")
  }



  return (
    <div className="h-screen flex justify-center items-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="certificateId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Certificate Id</FormLabel>
              <FormControl>
                <Input placeholder="xxxx-xxxx-xxxx" className="text-black" {...field} />
              </FormControl>
              <FormDescription>
              Your Unique Certificate Id .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


<>
        
        </>
        <HoverCard>
  <HoverCardTrigger className="hover:underline cursor-pointer text-sm">Need to check ?</HoverCardTrigger>
  <HoverCardContent className="flex text-xs">{"-->"}&nbsp;<p className="hover:underline cursor-pointer"><Link href="/check">Check Authenticiy</Link></p></HoverCardContent>
</HoverCard>
            <br/>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )

}
