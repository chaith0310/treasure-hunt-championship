import { Navigate, useParams } from "react-router-dom";
import GlassCard from "../components/GlassCard";
import { gameConfig } from "../config/gameConfig";
import { getLevelById } from "../utils/passwordValidator";
import PasswordChallenge from "./PasswordChallenge";
import ImagePuzzleChallenge from "./ImagePuzzleChallenge";
import MCQChallenge from "./MCQChallenge";

export default function ChallengeRouter({ onComplete }) {
  const { levelId } = useParams();
  const level = getLevelById(gameConfig.levels, levelId);
  if (!level) return <Navigate to="/" replace />;
  let ChallengeComponent = PasswordChallenge;
  if (level.type === "imagePuzzle") ChallengeComponent = ImagePuzzleChallenge;
  if (level.type === "mcq") ChallengeComponent = MCQChallenge;
  return <main className="premium-bg min-h-screen px-6 py-12"><section className="mx-auto max-w-7xl"><GlassCard className="mb-8 p-7"><p className="text-sm font-black uppercase tracking-[0.34em] text-blue-700">Level {level.id}</p><h1 className="mt-2 text-4xl font-black text-slate-950">{level.title}</h1><p className="mt-3 max-w-4xl text-lg font-medium leading-8 text-slate-600">{level.instructions}</p></GlassCard><ChallengeComponent level={level} onComplete={onComplete} /></section></main>;
}
