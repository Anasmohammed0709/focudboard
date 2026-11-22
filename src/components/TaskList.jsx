import React from "react";
import { ClipboardList, Plus } from "lucide-react";
import TaskItem from "./TaskItem";
import TaskFilters from "./TaskFilters";
export default function TaskList({ tasks, status, onStatus, priority, onPriority, onEdit, onDelete, onUpdateStatus, onCreate }) {
  return <section className="tasks-panel">
    <div className="section-heading"><div><span className="eyebrow">YOUR WORKSPACE</span><h2>My tasks <span className="heading-count">{tasks.length}</span></h2></div><button className="task-add-button" onClick={onCreate}><Plus size={16}/> Add task</button></div>
    <TaskFilters status={status} onStatus={onStatus} priority={priority} onPriority={onPriority}/>
    <div className="task-list">{tasks.length ? tasks.map(task => <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onStatus={onUpdateStatus}/>) : <div className="empty-state"><div className="empty-icon"><ClipboardList size={25}/></div><h3>No tasks found</h3><p>Try changing your search or filters, or create a new task.</p><button className="primary-button" onClick={onCreate}><Plus size={16}/> Create a task</button></div>}</div>
  </section>;
}