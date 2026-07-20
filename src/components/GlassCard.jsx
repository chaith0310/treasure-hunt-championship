import React from "react";
export default function GlassCard({ children, className = "" }) {
  return <div className={`glass-border rounded-[2rem] shadow-premium ${className}`}>{children}</div>;
}
