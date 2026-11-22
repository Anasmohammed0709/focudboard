import React, { useMemo, useState } from "react";
import { Sparkles, CalendarDays, SlidersHorizontal } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import FocusNotes from "./components/FocusNotes";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";
import ConfirmDialog from "./components/ConfirmDialog";
import { useTasks } from "./context/TaskContext";
import { formatDate } from "./utils/taskHelpers";

export default function App() {
  const { tasks, addTask, updateTask, updateStatus, deleteTask } = useTasks();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All tasks");
  const [priority, setPriority] = useState("All");
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [compact, setCompact] = useState(false);

  const visibleTasks = useMemo(() => tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(search.trim().toLowerCase());
    const matchesStatus = status === "All tasks" || task.status === status;
    const matchesPriority = priority === "All" || task.priority === priority;
    return matchesSearch && matchesStatus && matchesPriority;
  }), [tasks, search, status, priority]);

  function saveTask(task) {
    // An empty object means "new task"; only an existing task has an id.
    if (editing?.id) updateTask(task);
    else addTask(task);
    setEditing(null);
  }
  function confirmDelete() {
    if (deleting) deleteTask(deleting.id);
    setDeleting(null);
  }

  const taskList = <TaskList
    tasks={visibleTasks} status={status} onStatus={setStatus}
    priority={priority} onPriority={setPriority}
    onEdit={setEditing} onDelete={setDeleting} onUpdateStatus={updateStatus}
    onCreate={() => setEditing({})}
  />;

  return <div className={`app-shell ${compact ? "compact-mode" : ""}`}>
    <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} active={activeNav}
      onNavigate={(page) => { setActiveNav(page); setSearch(""); setStatus("All tasks"); setPriority("All"); }} taskCount={tasks.length}/>
    <main className="main-area">
      <Header search={search} onSearch={setSearch} onMenu={() => setSidebarOpen(true)}
        onCreate={() => setEditing({})}/>
      <div className="page-content">
        {activeNav === "Dashboard" && <>
          <section className="welcome-row"><div><div className="welcome-kicker"><Sparkles size={14}/> YOUR PERSONAL WORKSPACE</div><h1>Good things are <span>in progress.</span></h1><p>Here's what's happening with your tasks today.</p></div><div className="date-chip">{new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(new Date())}</div></section>
          <DashboardStats tasks={tasks}/>
          <FocusNotes/>
          {taskList}
        </>}

        {activeNav === "My Tasks" && <>
          <section className="welcome-row"><div><div className="welcome-kicker">TASK MANAGEMENT</div><h1>My <span>tasks.</span></h1><p>All your tasks in one place. Search, filter, and update your work.</p></div></section>
          <DashboardStats tasks={tasks}/>
          {taskList}
        </>}

        {activeNav === "Calendar" && <>
          <section className="welcome-row"><div><div className="welcome-kicker"><CalendarDays size={14}/> PLAN YOUR TIME</div><h1>Task <span>calendar.</span></h1><p>Tasks grouped by their due date.</p></div></section>
          <section className="calendar-panel"><div className="section-heading"><div><span className="eyebrow">UPCOMING WORK</span><h2>Due dates <span className="heading-count">{tasks.filter(t => t.dueDate).length}</span></h2></div><button className="primary-button calendar-new-button" onClick={() => setEditing({})}>＋ New task</button></div>
            {tasks.filter(t => t.dueDate).length === 0 ? <div className="empty-state"><h3>No dated tasks yet</h3><p>Add a due date to a task and it will appear here.</p></div> : [...tasks].filter(t => t.dueDate).sort((a,b) => a.dueDate.localeCompare(b.dueDate)).map(task => <div className="calendar-task" key={task.id}><div className="calendar-date"><strong>{new Date(`${task.dueDate}T00:00:00`).toLocaleDateString("en", { day: "2-digit" })}</strong><small>{new Date(`${task.dueDate}T00:00:00`).toLocaleDateString("en", { month: "short" })}</small></div><div className="calendar-task-info"><strong>{task.title}</strong><small>{formatDate(task.dueDate)} · {task.category}</small></div><span className={`badge status-${task.status.toLowerCase().replace(" ", "-")}`}>{task.status}</span><button className="calendar-edit-button" onClick={() => setEditing(task)}>Edit</button></div>)}
          </section>
        </>}

        {activeNav === "Settings" && <>
          <section className="welcome-row"><div><div className="welcome-kicker"><SlidersHorizontal size={14}/> PREFERENCES</div><h1>Workspace <span>settings.</span></h1><p>Adjust how FocusBoard looks on this device.</p></div></section>
          <section className="settings-panel"><div className="settings-row"><div><strong>Compact task list</strong><p>Reduce spacing between task rows to see more tasks at once.</p></div><label className="switch-control"><input type="checkbox" checked={compact} onChange={e => setCompact(e.target.checked)}/><span/></label></div><div className="settings-row"><div><strong>Task storage</strong><p>Your tasks are saved locally in this browser and remain after refresh.</p></div><span className="settings-status">Local storage active</span></div><div className="settings-row"><div><strong>Workspace summary</strong><p>{tasks.length} tasks currently saved in this workspace.</p></div><button className="settings-view-button" onClick={() => { setActiveNav("My Tasks"); }}>View tasks</button></div></section>
        </>}
        <footer className="footer">Made for focused days <span>·</span> FocusBoard</footer>
      </div>
    </main>
    {editing !== null && <TaskModal key={editing.id || "new"} task={editing.id ? editing : null} onClose={() => setEditing(null)} onSave={saveTask}/>}
    <ConfirmDialog task={deleting} onCancel={() => setDeleting(null)} onConfirm={confirmDelete}/>
  </div>;
}
