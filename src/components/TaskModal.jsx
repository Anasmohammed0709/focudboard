import React from "react";
import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
const blank = { title: "", description: "", category: "General", status: "To do", priority: "Medium", dueDate: "" };
export default function TaskModal({ task, onClose, onSave }) {
  const [form, setForm] = useState(task ? { ...task } : blank);
  const [error, setError] = useState("");
  const titleId = useId();
  useEffect(() => { const previous = document.activeElement; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; previous?.focus?.(); }; }, []);
  const change = e => { setForm(current => ({ ...current, [e.target.name]: e.target.value })); if (e.target.name === "title") setError(""); };
  function submit(e) {
    e.preventDefault();
    if (!form.title.trim()) { setError("Please enter a task title."); document.getElementById(titleId)?.focus(); return; }
    onSave({ ...form, title: form.title.trim(), id: task?.id || (crypto.randomUUID?.() ?? `task-${Date.now()}`) });
  }
  return <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div className="modal-heading"><div><span className="eyebrow">{task ? "UPDATE YOUR WORK" : "MAKE IT HAPPEN"}</span><h2 id="modal-title">{task ? "Edit task" : "Create a task"}</h2><p>Give your next step a little clarity.</p></div><button className="icon-button" onClick={onClose} aria-label="Close form"><X/></button></div>
    <form onSubmit={submit} className="task-form">
      <label htmlFor={titleId}>Task title <span>*</span></label><input id={titleId} name="title" value={form.title} onChange={change} placeholder="e.g. Prepare project presentation" aria-invalid={!!error} aria-describedby={error ? "title-error" : undefined} autoFocus/>{error && <small className="field-error" id="title-error">{error}</small>}
      <label htmlFor="description">Description</label><textarea id="description" name="description" value={form.description} onChange={change} placeholder="Add a few details about this task..." rows="3"/>
      <label htmlFor="category">Category</label><input id="category" name="category" value={form.category} onChange={change} placeholder="e.g. Design"/>
      <div className="form-grid"><div><label htmlFor="status">Status</label><select id="status" name="status" value={form.status} onChange={change}><option>To do</option><option>In progress</option><option>Completed</option></select></div><div><label htmlFor="priority">Priority</label><select id="priority" name="priority" value={form.priority} onChange={change}><option>Low</option><option>Medium</option><option>High</option></select></div></div>
      <label htmlFor="dueDate">Due date</label><input id="dueDate" name="dueDate" type="date" value={form.dueDate || ""} onChange={change}/>
      <div className="form-actions"><button type="button" className="secondary-button" onClick={onClose}>Cancel</button><button type="submit" className="primary-button">{task ? "Save changes" : "Create task"}</button></div>
    </form>
  </section></div>;
}