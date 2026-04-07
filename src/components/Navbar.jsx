import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [showPastYears, setShowPastYears] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToBoard = (path) => {
    setIsTeamOpen(false);
    setShowPastYears(false);
    navigate(path);
  };

  const navLinks = ["Home", "Team", "Event", "Gallery", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] flex items-center h-[120px] transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      {/* LOGO */}
      <div className="pl-8 cursor-pointer" onClick={() => navigate("/")}>
        <img src="/images/acmw.png" alt="ACM-W Logo" className="h-[100px]" />
      </div>

      {/* NAV PILL */}
      <div className="absolute left-[200px] top-[40px] flex items-center justify-center bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-10 py-3 shadow-lg">
        <ul className="flex gap-10 text-white font-semibold uppercase tracking-widest">
          {navLinks.map((link) => (
            <li
              key={link}
              className="relative cursor-pointer group"
              onMouseEnter={() => link === "Team" && setIsTeamOpen(true)}
              onMouseLeave={() => {
                if (link === "Team") {
                  setIsTeamOpen(false);
                  setShowPastYears(false);
                }
              }}
            >
              <span
                onClick={() => link === "Home" && navigate("/")}
                className="hover:text-[#2B609E] transition"
              >
                {link}
              </span>

              {/* TEAM DROPDOWN */}
              {link === "Team" && isTeamOpen && (
                <div className="absolute top-8 left-0 bg-[#0a001a] border border-white/10 rounded-lg shadow-lg p-4">
                  <div
                    className="hover:text-[#2B609E] cursor-pointer"
                    onClick={() => goToBoard("/team-current")}
                  >
                    Current Board
                  </div>

                  <div className="mt-2">
                    <div
                      className="cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPastYears(!showPastYears);
                      }}
                    >
                      Past Boards {showPastYears ? "▼" : "▶"}
                    </div>

                    {showPastYears && (
                      <div className="ml-3 mt-2 space-y-1">
                        {["2024", "2023", "2022", "2021", "2020"].map((year) => (
                          <div
                            key={year}
                            className="cursor-pointer hover:text-[#2B609E]"
                            onClick={() => goToBoard(`/team/${year}`)}
                          >
                            Board {year}-{parseInt(year) + 1}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}