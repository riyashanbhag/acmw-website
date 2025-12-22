import LinkedInIcon from '../assets/LinkedIn.svg';
import InstagramIcon from '../assets/Insta.svg';
import GithubIcon from '../assets/GitHub.svg';
import MailIcon from '../assets/Mail.svg';
import LocationIcon from '../assets/Location.svg';

export default function Connect() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-10 py-20 flex flex-col lg:flex-row items-start justify-between gap-12">
      
      {/* LEFT COLUMN: Title, Description, and Contact Box */}
      <div className="flex-1 flex flex-col gap-10">
        
        {/* 1. Animated Header Section */}
        <div className="group">
          <h2 className="text-6xl font-black text-white mb-2 uppercase tracking-tighter">
            Connect <span className="text-[#99399E] animate-pulse">With Us</span>
          </h2>
          <div className="h-1.5 bg-[#2B609E] rounded-full w-48 transition-all duration-1000 group-hover:w-64"></div>
          
          <p className="text-gray-400 text-xl mt-8 leading-relaxed max-w-md font-medium">
            Explore our social media handles to know about our latest events, programs and insights.
          </p>
        </div>

        {/* 2. Rectangle 13: Get in Touch Box */}
        <div 
          style={{
            background: '#031224cc',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(1px)',
            borderRadius: '19px',
            width: '495.44px',
            height: '283px'
          }}
          className="p-8 flex flex-col justify-center transition-transform hover:scale-[1.01]"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
          
          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-6">
               <img src={LocationIcon} alt="LinkedIn" className="w-8 h-8 invert group-hover:invert-0" />
              <div>
                <p className="text-white font-bold text-base">Visit Us:</p>
                <p className="text-gray-400 text-sm">Manipal Institute Of Technology,Eshwar Nagar,
Manipal,Karnataka</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
               <img src={MailIcon} alt="LinkedIn" className="w-8 h-8 invert group-hover:invert-0" />
              <div>
                <p className="text-white font-bold text-base">Mail Us:</p>
                <p className="text-gray-400 text-sm">abc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Social Circles (Inverted Triangle) */}
<div className="flex-1 flex flex-col items-center gap-10 pt-16">
  <div className="flex gap-10">
    
    {/* LinkedIn Link */}
    <a 
      href="https://www.linkedin.com/company/acm-w-manipal/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group"
    >
      <div className="w-60 h-60 rounded-full bg-[#D9D9D9] flex flex-col items-center justify-center text-black transition-all duration-300 hover:bg-[#8FAEE4] hover:text-black cursor-pointer hover:scale-110 shadow-xl">
        <img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12 invert group-hover:invert-0" />
        <span className="text-2xl font-bold mt-2">LinkedIn</span>
        <span className="text-2xs opacity-60">Let's Connect</span>
      </div>
    </a>

    {/* Instagram Link */}
    <a 
      href="https://www.instagram.com/acmwmanipal?igsh=MThzMWc5anA4aDd2OA==" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group"
    >
      <div className="w-60 h-60 rounded-full bg-[#D9D9D9] flex flex-col items-center justify-center text-black transition-all duration-300 hover:bg-[#CE62A8] hover:text-black cursor-pointer hover:scale-110 shadow-xl">
        <img src={InstagramIcon} alt="LinkedIn" className="w-12 h-12 invert group-hover:invert-0" />
        <span className="text-2xl font-bold mt-2">Instagram</span>
        <span className="text-2xs opacity-60">Share your Ideas</span>
      </div>
    </a>
  </div>

  {/* GitHub Link (Centered below) */}
  <a 
    href="https://github.com/ACMW-Manipal" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group"
  >
    <div className="w-60 h-60 rounded-full bg-[#D9D9D9] flex flex-col items-center justify-center text-black transition-all duration-300 hover:bg-[#FFD277] hover:text-black cursor-pointer hover:scale-110 shadow-xl">
      <img src={GithubIcon} alt="LinkedIn" className="w-12 h-12 invert group-hover:invert-0" />
      <span className="text-2xl font-bold mt-2">GitHub</span>
      <span className="text-2xs opacity-60">Fork & Contribute</span>
    </div>
  </a>
</div>
    </section>
  );
}