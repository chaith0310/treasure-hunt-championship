import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import { gameConfig } from "./config/gameConfig";
import LandingPage from "./pages/LandingPage";
import MissionBrief from "./pages/MissionBrief";
import ChallengeRouter from "./pages/ChallengeRouter";
import Leaderboard from "./pages/Leaderboard";
import CompletionPage from "./pages/CompletionPage";

function readProgress() { const fallback = { currentLevel: 1, completedLevels: 0, complete: false }; try { return JSON.parse(localStorage.getItem(gameConfig.storageKeys.progress)) || fallback; } catch { return fallback; } }
function readLeaderboard() { try { return JSON.parse(localStorage.getItem(gameConfig.storageKeys.leaderboard) || "[]"); } catch { return []; } }
function upsertCurrentTeam(teamName, progress) { if (!teamName) return; const stored = readLeaderboard(); const nextTeam = { teamName, currentLevel: progress.currentLevel, completedLevels: progress.completedLevels }; const withoutCurrent = stored.filter((team) => team.teamName !== teamName); localStorage.setItem(gameConfig.storageKeys.leaderboard, JSON.stringify([...withoutCurrent, nextTeam])); }

export default function App() {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState(localStorage.getItem(gameConfig.storageKeys.team) || "");
  const [progress, setProgress] = useState(readProgress);
  useEffect(() => { localStorage.setItem(gameConfig.storageKeys.progress, JSON.stringify(progress)); upsertCurrentTeam(teamName, progress); }, [progress, teamName]);
  function startGame(name) { localStorage.setItem(gameConfig.storageKeys.team, name); setTeamName(name); const freshProgress = { currentLevel: 1, completedLevels: 0, complete: false }; setProgress(freshProgress); upsertCurrentTeam(name, freshProgress); }
  function completeLevel(levelId) { const nextCompleted = Math.max(progress.completedLevels, Number(levelId)); if (Number(levelId) >= gameConfig.totalLevels) { const completeProgress = { currentLevel: gameConfig.totalLevels, completedLevels: gameConfig.totalLevels, complete: true }; setProgress(completeProgress); upsertCurrentTeam(teamName, completeProgress); navigate("/completion"); return; } const nextProgress = { currentLevel: Number(levelId) + 1, completedLevels: nextCompleted, complete: false }; setProgress(nextProgress); upsertCurrentTeam(teamName, nextProgress); navigate(`/level/${Number(levelId) + 1}/brief`); }
  const currentTeam = useMemo(() => ({ teamName, currentLevel: progress.currentLevel, completedLevels: progress.completedLevels }), [teamName, progress]);
  return <><Header teamName={teamName} currentLevel={progress.currentLevel} /><Routes><Route path="/" element={<LandingPage onStart={startGame} />} /><Route path="/level/:levelId/brief" element={teamName ? <MissionBrief progress={progress} /> : <Navigate to="/" replace />} /><Route path="/level/:levelId/challenge" element={teamName ? <ChallengeRouter onComplete={completeLevel} /> : <Navigate to="/" replace />} /><Route path="/leaderboard" element={<Leaderboard currentTeam={currentTeam} />} /><Route path="/completion" element={<CompletionPage finalPosition={null} />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></>;
}
