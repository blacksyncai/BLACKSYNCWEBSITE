import { ReactNode } from "react";
import puzzlePattern from "../assets/puzzle-pattern.svg";
import "./PuzzleSection.css";

interface PuzzleSectionProps {
  children: ReactNode;
}

export default function PuzzleSection({ children }: PuzzleSectionProps) {
  return (
    <section className="puzzle-section">
      <div 
        className="puzzle-overlay"
        style={{
          backgroundImage: `url(${puzzlePattern})`,
        }}
      />
      <div className="puzzle-content">
        {children}
      </div>
    </section>
  );
}
