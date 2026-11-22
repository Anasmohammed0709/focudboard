import React from "react";
import { SlidersHorizontal } from "lucide-react";
const tabs = ["All tasks", "To do", "In progress", "Completed"];
export default function TaskFilters({ status, onStatus, priority, onPriority }) {
  return <div className="filter-row"><div className="tabs" role="tablist" aria-label="Filter tasks by status">{tabs.map(tab => <button key={tab} role="tab" aria-selected={status === tab} className={status === tab ? "tab active-tab" : "tab"} onClick={() => onStatus(tab)}>{tab}</button>)}</div><label className="priority-filter"><SlidersHorizontal size={16}/><span className="sr-only">Filter by priority</span><select value={priority} onChange={e => onPriority(e.target.value)}><option value="All">All priorities</option><option>High</option><option>Medium</option><option>Low</option></select></label></div>;
}