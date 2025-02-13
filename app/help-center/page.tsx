import UserDashBoardNavbar from '@/components/UserDashBoardNavbar'
import React from 'react'
import SideNavbar from '../Rider/SideNavbar'
import Footer from '@/components/Footer'

export default function page() {
  return (
   <>
   <UserDashBoardNavbar />
   {/* <SideNavbar/> */}
    <div className="min-h-screen bg-white/10 text-white flex flex-col items-center p-6 pt-28">
    <h1 className="text-3xl font-bold mb-2 text-darkBG">Customer Support</h1>
    <p className="text-gray-400 text-[1.1rem] mb-6 text-center">
      Need help? We're here 24/7 to assist you with any questions or concerns you may have about our services.
    </p>
    
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Quick Help Section */}
      <div className="bg-darkBG p-6 rounded-lg shadow-md md:col-span-1">
        <h2 className="text-xl font-semibold mb-4">Quick Help</h2>
        <div className="space-y-4">
          {['How to Book a Ride', 'Payment Issues', 'Lost Items'].map((item, index) => (
            <div key={index} className="bg-lightBG p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-700">
              <span>{item}</span>
              <span className="text-xl">&gt;</span>
            </div>
          ))}
        </div>
      </div>

      {/* Send Us a Message Form */}
      <div className="bg-darkBG p-6 rounded-lg shadow-md md:col-span-2 w-full">
        <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="p-3 bg-lightBG rounded-md w-full text-white" />
            <input type="email" placeholder="Email Address" className="p-3 bg-lightBG rounded-md w-full text-white" />
          </div>
          <select className="p-3 bg-lightBG rounded-md w-full text-white">
            <option>Select a topic</option>
            <option>Booking Issue</option>
            <option>Payment Problem</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Message" className="p-3 bg-lightBG rounded-md w-full text-white min-h-[150px]"></textarea>
          <button className="bg-lightGreen w-full p-3 rounded-md font-bold">Send Message</button>
        </form>
      </div>
    </div>

    {/* Emergency Contact Section */}
    <div className="w-full max-w-5xl mt-6 bg-red-900 text-white p-4 rounded-lg flex justify-between items-center border border-red-700">
      <div>
        <strong className="text-lg">Emergency Contact</strong>
        <p className="text-sm text-gray-300">Available 24/7 for urgent assistance</p>
      </div>
      <button className="bg-red-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
        <span>📞</span> Call Emergency
      </button>
    </div>
  </div>
  <Footer />
  </>
  )
}
