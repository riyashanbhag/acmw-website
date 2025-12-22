import DotGrid from './components/DotGrid';
import Navbar from './components/Navbar';
import Connect from './components/Connect';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';

function App() {
  return (
    // 'flex flex-col' ensures sections stack vertically
    <div className="relative z-10 flex flex-col w-full bg-[#030014] flex flex-col">

      {/* BACKGROUND: Fixed so it stays behind as you scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotGrid dotSize={4} gap={25} baseColor="#271e37" activeColor="#1C90CE" />
      </div>

      <Navbar />

      {/* SECTION 1: HERO - Top padding remains, Bottom padding reduced */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] pt-[200px] pb-8 text-center px-4">

        {/* 1. Top Label - Now pushed below navbar */}
        <div className="mb-8 animate-fade-in">
          <span className="text-[#99399E] text-sm font-bold tracking-[0.4em] uppercase">
            Get In Touch
          </span>
        </div>

        {/* 2. Main Glowing Title */}
        <div className="relative group mb-8">
          <h1 className="text-7xl md:text-[100px] font-black text-white tracking-tighter uppercase leading-none">
            Contact Us
          </h1>
          <div className="absolute inset-0 blur-[100px] bg-[#5227FF] opacity-45 -z-10 scale-110"></div>
        </div>

        {/* Decorative Divider Line: Dot between two fading lines */}
        <div className="flex items-center justify-center w-full gap-4 mb-10">

          {/* Left Line: Fades in from the left */}
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#99399E]/50 to-[#99399E]"></div>

          {/* Central Dot: Glowing and solid */}
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-[#99399E] shadow-[0_0_15px_rgba(82,39,255,1)]"></div>
            {/* Subtle outer ring for extra 'pop' */}
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#99399E] animate-ping opacity-20"></div>
          </div>

          {/* Right Line: Fades out to the right */}
          <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#99399E]/50 to-[#99399E]"></div>

        </div>

        {/* 4. Subtext */}
        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
          We're here to answer your questions and explore opportunities together
        </p>

      </section>


      {/* Suble Scroll Hook Animation */}
      <div className="flex flex-col items-center justify-center py-0 opacity-50">
        <div className="text-gray-500 text-[15px] tracking-[0.5em] uppercase mb-4 animate-pulse">
          Scroll to Connect
        </div>
        <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#5227FF] to-transparent animate-bounce"></div>
      </div>
      {/* SECTION 2: CONNECT (Sitting below the Hero) */}
      <Connect />
      <FAQ /> {/* Add FAQ here */}
      {/* Extra space at bottom */}
      <ContactForm /> {/* Place it at the very end */}
      <div className="h-32 shrink-0"></div>
    </div>
  );
}
export default App;