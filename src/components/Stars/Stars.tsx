import React from "react";
import Star from "./Star/star";
import './Stars.css';

interface StarsProps {
    count?: number;
  }

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== "number" || count < 1 || count > 5) return null;

  return (
    <ul className="card-body-stars">
      {[...Array(Math.round(count))].map((_, idx) => <li key={idx + 1}><Star /></li>)}
    </ul>
  );
};   

export default Stars;