import React from 'react';

export default function ContactForm() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-10 py-24">
      {/* Title Section */}
      <div className="mb-10">
        <h2 className="text-5xl font-bold text-white mb-2">Send A Message</h2>
        <div className="w-48 h-1.5 bg-[#2B609E] rounded-full mb-4"></div>
      </div>

      {/* Main Form Container - Updated for Transparency */}
      <div 
        className="rounded-[40px] p-12 shadow-2xl border border-white/10"
        style={{
          background: 'rgba(255, 255, 255, 0.05)', // Very light transparent white
          backdropFilter: 'blur(10px)',            // Blur effect for glass look
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
      >
        <form className="flex flex-col gap-8">
          
          {/* Name Input - Slightly transparent inputs too */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-semibold ml-4">Name</label>
            <input 
              type="text" 
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#99399E] transition-all focus:bg-white/20"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-semibold ml-4">Email</label>
            <input 
              type="email" 
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#99399E] transition-all focus:bg-white/20"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 font-semibold ml-4">Message</label>
            <textarea 
              rows="4"
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#99399E] transition-all focus:bg-white/20"
              placeholder="Type your message here..."
            />
          </div>

          {/* Submit Button - Updated to match your theme purple */}
          <div className="flex justify-center mt-4">
            <button 
              type="submit"
              className="bg-[#99399E] text-white px-20 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:bg-[#7a2d7e] hover:scale-105 hover:shadow-[0_0_20px_rgba(153,57,158,0.4)] active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}