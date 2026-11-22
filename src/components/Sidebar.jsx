import React from "react";
import { LayoutDashboard, CalendarDays, CheckSquare, Settings, X } from "lucide-react";

export default function Sidebar({ open, onClose, active, onNavigate, taskCount = 0 }) {
  const items = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Tasks", icon: CheckSquare },
    { label: "Calendar", icon: CalendarDays },
    { label: "Settings", icon: Settings }
  ];
  return <>
    {open && <button className="scrim" aria-label="Close navigation" onClick={onClose} />}
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="brand"><span className="brand-mark">F</span><span>focus<span className="brand-light">board</span></span><button className="icon-button close-nav" onClick={onClose} aria-label="Close menu"><X size={19}/></button></div>
      <div className="nav-caption">WORKSPACE</div>
      <nav aria-label="Main navigation">
        {items.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => { onNavigate(label); onClose(); }}>
          <Icon size={18}/><span>{label}</span>{label === "My Tasks" && <span className="nav-count">{taskCount}</span>}
        </button>)}
      </nav>
      <div className="sidebar-bottom"><div className="upgrade-card"><div className="upgrade-icon">✦</div><strong>Stay in your flow</strong><p>Small steps make big progress. Keep your focus on what matters.</p></div><div className="profile"><div className="avatar">MA</div><div><strong>Mohammed Anas</strong><small>Personal workspace</small></div><span className="profile-dots">•••</span></div></div>
    </aside>
  </>;
}