export function getStats(tasks) {
  const total = tasks.length;
  const inProgress = tasks.filter(t => t.status === "In progress").length;
  const completed = tasks.filter(t => t.status === "Completed").length;
  return { total, inProgress, completed, percentage: total ? Math.round(completed / total * 100) : 0 };
}

export function formatDate(value) {
  if (!value) return "No due date";
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}