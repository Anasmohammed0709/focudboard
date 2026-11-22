import React from "react";
import StatCard from "./StatCard";
import { getStats } from "../utils/taskHelpers";
export default function DashboardStats({ tasks }) {
  const stats = getStats(tasks);
  return <section className="stats-grid" aria-label="Task statistics">
    <StatCard type="total" label="Total tasks" value={stats.total} note="Across your workspace"/>
    <StatCard type="progress" label="In progress" value={stats.inProgress} note="Things moving forward"/>
    <StatCard type="completed" label="Completed" value={stats.completed} note="Great work so far"/>
    <StatCard type="percentage" label="Completion rate" value={`${stats.percentage}%`} note="Of all your tasks"/>
  </section>;
}