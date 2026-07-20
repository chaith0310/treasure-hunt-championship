import { ArrowRight, Flag, Sparkles } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import LevelStepper from "../components/LevelStepper";
import { gameConfig } from "../config/gameConfig";
import { getLevelById } from "../utils/passwordValidator";

export default function MissionBrief({ progress }) {
  const { levelId } = useParams();
  const level = getLevelById(gameConfig.levels, levelId);
  if (!level) return <Navigate to="/" replace />;
  return <main className="premium-bg min-h-screen px-6 py-12"><section className="mx-auto max-w-7xl"><LevelStepper currentLevel={level.id} completedLevels={progress.completedLevels} /><GlassCard className="mt-8 overflow-hidden p-8 md:p-12"><div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-3xl"><div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black uppercase tracking-widest text-blue-700"><Flag size={16} /> Mission Brief</div><p className="text-sm font-black uppercase tracking-[0.34em] text-violet-600">Level {level.id}</p><h1 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-6xl">{level.title}</h1><p className="mt-6 text-xl font-medium leading-9 text-slate-600">{level.instructions}</p></div><div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-violet-600 p-8 text-white shadow-glow lg:w-80"><Sparkles size={36} /><p className="mt-5 text-sm font-bold uppercase tracking-widest text-blue-100">Challenge Type</p><p className="mt-2 text-2xl font-black capitalize">{level.type.replace(/([A-Z])/g, " $1")}</p><p className="mt-5 text-sm leading-6 text-blue-50">Every level is configurable from src/config/gameConfig.js.</p></div></div><Link to={`/level/${level.id}/challenge`} className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-7 py-4 text-base font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">Start Mission <ArrowRight size={18} /></Link></GlassCard></section></main>;
}
