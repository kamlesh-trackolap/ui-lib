"use client"
import Button from '@/components/button'
import Input from '@/components/input/input'
import React from 'react'

const Page = () => {
  return (
    <div className='h-[90vh] w-full flex justify-center items-center'>
      <div className='flex flex-col gap-5 '>
        <Input placeholder="Enter text..." />

        <Input passwordToggle={<span>✅</span>} placeholder="Enter password" />

        <Input phone placeholder="Enter phone number" />
        <Input prefix={<span>🔍</span>} suffix={<span>✅</span>} placeholder="Search" className='w-[500px]' />

        <Input error placeholder="Error input" />
        <Input success placeholder="Success input" />

        <Input style={{ borderRadius: '20px', padding: '1rem' }} />
      </div>




      <Button className='bg-red-300 w-[400px] text-black text-2xl' loading>Testting..</Button>
    </div>
  )
}

export default Page
