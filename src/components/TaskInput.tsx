import { useState } from "react";

interface TaskInputProps {
  onAddTask?: (title: string, description: string) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (title.trim()) {
      onAddTask?.(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="my-3">
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Insert a task here..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAdd()}
      />
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAdd()}
      />
      <button className="btn btn-primary px-4 w-100" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
