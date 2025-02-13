import Navbar from '@/components/Navbar'
import React from 'react'

const options = [
  { title: "Sign up with user Account", link: "/user-signup" },
  { title: "Create a rider account", link: "#" },
  { title: "Order delivery with Macro Eats", link: "#" },
  { title: "Sign up Macro for Business", link: "#" }
];

export default function page() {
  return (
    <>
      <Navbar isDarkMode={undefined} />
      <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100 p-6 py-20 sm:py-10">
        <h1 className='text-3xl pb-5 font-semibold tracking-wide'>Ready to <span className='italic underline underline-offset-4 text-lightGreen'>Experience</span> Our Services?</h1>
        <h1 className='pb-10 text-xl font-thin text-gray-500'>Proceed with Macro by creating account. Let's make it better together.</h1>
        <div className="w-full max-w-3xl rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
          {options.map((option, index) => (
            <div key={index} className="border-black px-10 sm:px-16 w-full py-10 border">
              <a href={option.link} className="text-xl font-semibold flex justify-between items-center hover:text-blue-600">
                {option.title} <span className="text-2xl">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
