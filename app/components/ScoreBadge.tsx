import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const getBadgeProps = (score: number) => {
  if (score > 70) {
    return {
      bg: "bg-badge-green",
      text: "text-green-600",
      label: "Strong",
    };
  } else if (score > 49) {
    return {
      bg: "bg-badge-yellow",
      text: "text-yellow-600",
      label: "Good Start",
    };
  } else {
    return {
      bg: "bg-badge-red",
      text: "text-red-600",
      label: "Needs Work",
    };
  }
};

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const { bg, text, label } = getBadgeProps(score);
  return (
    <div
      className={`inline-block px-2 py-1 rounded-full font-semibold text-xs ${bg} ${text}`}
    >
      <p>{label}</p>
    </div>
  );
};

export default ScoreBadge;
