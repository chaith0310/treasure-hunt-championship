import { gameConfig } from "../config/gameConfig";
import React from "react";

export default function ProgressBar({ currentLevel = 1 }) {
  const progress = Math.min(100, Math.round((Number(currentLevel) / gameConfig.totalLevels) * 100));
  return <div className="h-3 w-full overflow-hidden rounded-full bg-blue-100"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 transition-all duration-700 ease-out" style={{ width: `${progress}%` }} /></div>;
}
