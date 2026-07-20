import { CheckCircle2, Lock } from "lucide-react";
import { gameConfig } from "../config/gameConfig";
import React from "react";
import { build } from "vite";

export default function LevelStepper({ currentLevel, completedLevels = 0 }) {
  return <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">{gameConfig.levels.map((level) => { const isComplete = level.id <= completedLevels; const isCurrent = level.id === Number(currentLevel); return <div key={level.id} className={`rounded-2xl border p-4 transition ${isCurrent ? "border-blue-300 bg-blue-50 shadow-lg" : isComplete ? "border-emerald-200 bg-emerald-50" : "border-slate-100 bg-white"}`}><div className="flex items-center justify-between"><span className="text-xs font-black uppercase tracking-widest text-slate-500">L{level.id}</span>{isComplete ? <CheckCircle2 size={18} className="text-emerald-600" /> : <Lock size={16} className="text-slate-300" />}</div><p className="mt-2 text-sm font-black text-slate-900">{level.title}</p></div>; })}</div>;
}
