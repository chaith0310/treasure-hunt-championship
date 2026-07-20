import React from "react";
import { Trophy, BarChart3, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { gameConfig } from "../config/gameConfig";
import ProgressBar from "./ProgressBar";

export default function Header({ teamName, currentLevel }) {
  const location = useLocation();
  if (location.pathname === "/") return null;
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-glow"><Trophy size={24} /></div><div><p className="text-xs font-black uppercase tracking-[0.28em] text-blue-600">{gameConfig.eventName}</p><h1 className="text-lg font-black text-slate-950">Level {currentLevel} of {gameConfig.totalLevels}</h1></div></div>
        <div className="flex-1 lg:max-w-xl"><ProgressBar currentLevel={currentLevel} /><p className="mt-1 text-right text-sm font-semibold text-slate-600">Team Name: {teamName || "Not registered"}</p></div>
        <nav className="flex gap-2"><Link to={`/level/${currentLevel}/brief`} className="rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><Home size={16} className="mr-2 inline" /> Mission</Link><Link to="/leaderboard" className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"><BarChart3 size={16} className="mr-2 inline" /> Leaderboard</Link></nav>
      </div>
    </header>
  );
}
