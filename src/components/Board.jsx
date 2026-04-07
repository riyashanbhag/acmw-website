import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Board.css";
import { allBoardData } from "./boarddata";

const Board = () => {
  const { year } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [year]);

  const displayData =
    year && allBoardData[year] ? allBoardData[year] : allBoardData.current;
  const titleYear = year ? `${year}–${(parseInt(year) % 100) + 1}` : "2025–26";

  return (
    <section className="board-section">
      {/* PROFESSIONAL TECH HEADER */}
      <div className="board-header">
        <div className="header-top-bar">
          <span className="terminal-text">
            ACMW_DATABASE_ROOT // {year || "CURRENT"}
          </span>
          <div className="header-line"></div>
        </div>

        <h2 className="board-title">
          BOARD <span className="blue-glow">OF</span> {titleYear}
        </h2>

        <div className="header-bottom-bar">
          <div className="header-line"></div>
          <span className="tech-sub">EST. 2018 // CODING COMMUNITY</span>
        </div>
      </div>

      <div className="board-grid">
        {displayData.map((member, index) => (
          <div
            key={`${year || "curr"}-${index}`}
            className="board-card"
            style={{ "--order": index }}
          >
            <div className="image-container">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="text-content">
              <h3>{member.name}</h3>
              <p className="role-text">{member.role.toUpperCase()}</p>
            </div>
            <div className="card-overlay">
              <p className="card-quote">"{member.tagline}"</p>
              <div className="social-icons">
                <a href={member.github} target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Board;
