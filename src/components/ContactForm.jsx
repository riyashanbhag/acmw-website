import React from 'react';

export default function ContactForm() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-10 py-24">
      {/* Title Section */}
      <div className="mb-10">
        <h2 className="text-5xl font-bold text-white mb-2">Send A Message</h2>
        <div className="w-48 h-1.5 bg-[#2B609E] rounded-full mb-4"></div>
      </div>

      {/* Main Form Container */}
      <div className="bg-[#D9D9D9] rounded-[40px] p-12 shadow-2xl">
        <form className="flex flex-col gap-8">
          
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 font-semibold ml-4">Name</label>
            <input 
              type="text" 
              className="w-full bg-white rounded-2xl py-4 px-6 text-black focus:outline-none focus:ring-2 focus:ring-[#5227FF] transition-all"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 font-semibold ml-4">Email</label>
            <input 
              type="email" 
              className="w-full bg-white rounded-2xl py-4 px-6 text-black focus:outline-none focus:ring-2 focus:ring-[#5227FF] transition-all"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 font-semibold ml-4">Message</label>
            <textarea 
              rows="4"
              className="w-full bg-white rounded-2xl py-4 px-6 text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#5227FF] transition-all"
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button with Hover Effect */}
          <div className="flex justify-center mt-4">
            <button 
              type="submit"
              className="bg-[#4D5591] text-white px-20 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:bg-[#3b4270] hover:scale-105 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] active:scale-95"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}