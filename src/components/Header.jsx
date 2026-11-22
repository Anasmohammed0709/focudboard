import React from "react";
import { Menu, Search, Bell, Plus } from "lucide-react";

export default function Header({ search, onSearch, onMenu, onCreate }) {
  return <header className="topbar">
    <button className="icon-button mobile-menu" onClick={onMenu} aria-label="Open navigation"><Menu size={21}/></button>
    <div className="breadcrumbs">Workspace <span>/</span> <strong>Dashboard</strong></div>
    <div className="topbar-actions">
      <label className="header-search"><Search size={17}/><input value={search} onChange={e => onSearch(e.target.value)} placeholder="Search tasks..." aria-label="Search tasks"/></label>
      <button className="icon-button notification notification-button" aria-label="Notifications"><Bell size={19}/><i/></button>
      <button className="primary-button header-create" onClick={onCreate}><Plus size={17}/> New task</button>
    </div>
  </header>;
}