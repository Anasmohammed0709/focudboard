import React from "react";
import { CalendarDays, Pencil, Trash2 } from "lucide-react";
import { formatDate } from "../utils/taskHelpers";
export default function TaskItem({ task, onEdit, onDelete, onStatus }) {
  return <article className="task-row">
    <div className={`task-check ${task.status === "Completed" ? "checked" : ""}`}>{task.status === "Completed" ? "✓" : ""}</div>
    <div className="task-main"><h3 className={task.status === "Completed" ? "completed-title" : ""}>{task.title}</h3><p>{task.description || "No description added."}</p><div className="task-meta"><span className="category">{task.category || "General"}</span><span className="due-date"><CalendarDays size={13}/>{formatDate(task.dueDate)}</span></div></div>
    <div className="task-badges"><span className={`badge status-${task.status.toLowerCase().replace(" ", "-")}`}>{task.status}</span><span className={`badge priority-${task.priority.toLowerCase()}`}>{task.priority}</span></div>
    <div className="task-actions"><label className="sr-only" htmlFor={`status-${task.id}`}>Update status for {task.title}</label><select id={`status-${task.id}`} className="status-select" value={task.status} onChange={e => onStatus(task.id, e.target.value)}><option>To do</option><option>In progress</option><option>Completed</option></select><button className="icon-button edit-button" onClick={() => onEdit(task)} aria-label={`Edit ${task.title}`}><Pencil size={16}/></button><button className="icon-button delete-action" onClick={() => onDelete(task)} aria-label={`Delete ${task.title}`}><Trash2 size={16}/></button></div>
  </article>;
}