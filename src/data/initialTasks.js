const today = new Date();
const date = (offset) => {
  const d = new Date(today);
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};

export const initialTasks = [
  { id: "task-1", title: "Redesign the onboarding flow", description: "Review the current journey and prepare updated screens for the new user experience.", category: "Design", status: "In progress", priority: "High", dueDate: date(1) },
  { id: "task-2", title: "Prepare monthly performance report", description: "Collect key metrics and summarize the team's progress for the monthly review.", category: "Work", status: "To do", priority: "Medium", dueDate: date(3) },
  { id: "task-3", title: "Review landing page copy", description: "Proofread headlines, calls to action, and supporting product descriptions.", category: "Content", status: "Completed", priority: "Low", dueDate: date(-1) },
  { id: "task-4", title: "Plan the sprint retrospective", description: "Gather feedback and create an agenda for the team retrospective.", category: "Planning", status: "In progress", priority: "Medium", dueDate: date(2) },
  { id: "task-5", title: "Update component documentation", description: "Document shared UI components, props, and usage examples.", category: "Development", status: "To do", priority: "High", dueDate: date(5) },
  { id: "task-6", title: "Send project handoff notes", description: "Share final decisions, links, and next steps with project stakeholders.", category: "Work", status: "Completed", priority: "Low", dueDate: date(-2) }
];