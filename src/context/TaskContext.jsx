import React from "react";
import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { initialTasks } from "../data/initialTasks";

const STORAGE_KEY = "focusboard.tasks.v1";
const TaskContext = createContext(null);

function readTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === null) return initialTasks;
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : initialTasks;
  } catch {
    return initialTasks;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task];
    case "UPDATE_TASK":
      return state.map(task => task.id === action.task.id ? action.task : task);
    case "UPDATE_STATUS":
      return state.map(task => task.id === action.id ? { ...task, status: action.status } : task);
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.id);
    case "LOAD_TASKS":
      return action.tasks;
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducer, undefined, readTasks);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
    catch (error) { console.error("Unable to save FocusBoard tasks:", error); }
  }, [tasks]);

  const value = useMemo(() => ({
    tasks,
    addTask: task => dispatch({ type: "ADD_TASK", task }),
    updateTask: task => dispatch({ type: "UPDATE_TASK", task }),
    updateStatus: (id, status) => dispatch({ type: "UPDATE_STATUS", id, status }),
    deleteTask: id => dispatch({ type: "DELETE_TASK", id })
  }), [tasks]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used inside TaskProvider");
  return context;
}