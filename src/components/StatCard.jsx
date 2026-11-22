import React from "react";
import { CheckCircle2, ListTodo, Clock3, ChartNoAxesColumnIncreasing } from "lucide-react";
const icons = { total: ListTodo, progress: Clock3, completed: CheckCircle2, percentage: ChartNoAxesColumnIncreasing };
export default function StatCard({ type, label, value, note }) {
  const Icon = icons[type];
  return <article className={`stat-card stat-${type}`}><div className="stat-top"><span>{label}</span><span className="stat-icon"><Icon size={19}/></span></div><div className="stat-value">{value}</div><div className="stat-note">{note}</div></article>;
}