import React from "react";
import { CheckCircle2, KeyRound } from "lucide-react";
import { useState } from "react";
import GlassCard from "../components/GlassCard";
import { isPasswordAccepted } from "../utils/passwordValidator";

export default function PasswordChallenge({ level, onComplete }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function verify() { if (isPasswordAccepted(password, level.acceptedPasswords)) { setError(""); onComplete(level.id); return; } setError("Password not accepted. Remove extra spaces or verify the clue with your team."); }
  return <GlassCard className="p-8 md:p-10"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-violet-600 p-7 text-white shadow-glow"><KeyRound size={40} /><h2 className="mt-6 text-3xl font-black">Mission Complete?</h2><p className="mt-3 leading-7 text-blue-50">Enter the password provided by the clue or validated by the organizer.</p></div><div><label className="text-sm font-black uppercase tracking-widest text-blue-700">Enter Password</label><div className="mt-3 flex flex-col gap-3 md:flex-row"><input value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && verify()} placeholder="Password" className="min-h-14 flex-1 rounded-2xl border border-blue-100 bg-white px-5 py-4 text-lg font-bold text-slate-900 outline-none ring-blue-100 transition focus:ring-4" /><button onClick={verify} className="rounded-2xl bg-slate-950 px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-0.5"><CheckCircle2 size={18} className="mr-2 inline" /> Verify</button></div>{error && <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700">{error}</p>}<p className="mt-5 text-sm font-semibold text-slate-500">Passwords are case-insensitive and ignore leading or trailing spaces. Multiple accepted answers are supported.</p></div></div></GlassCard>;
}
