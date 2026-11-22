import React from "react";
import { AlertTriangle } from "lucide-react";
export default function ConfirmDialog({ task, onCancel, onConfirm }) {
  if (!task) return null;
  return <div className="modal-backdrop"><section className="confirm-modal" role="alertdialog" aria-modal="true" aria-labelledby="confirm-title"><div className="confirm-icon"><AlertTriangle size={23}/></div><h2 id="confirm-title">Delete this task?</h2><p>“{task.title}” will be permanently removed from your workspace. This action can't be undone.</p><div className="form-actions"><button className="secondary-button" onClick={onCancel}>Keep task</button><button className="delete-button" onClick={onConfirm}>Delete task</button></div></section></div>;
}