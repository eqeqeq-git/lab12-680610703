import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskCard";
import Footer from "../components/Footer";
import type { TaskCardProps } from "../libs/Todolist.ts";

const tasks: TaskCardProps[] = [
  {
    id: "1",
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: false,
  },
  {
    id: "2",
    title: "Write code",
    description: "Finish project for class",
    isDone: false,
  },
  {
    id: "3",
    title: "Deploy app",
    description: "Push project to GitHub Pages",
    isDone: true,
  },
];

export default function TodolistPage() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 p-0">
          <Sidebar userName="Pakin" type="admin" />
        </div>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          <Header />

          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">Todo List</h2>

              <TaskInput />

              {tasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </main>

          <Footer year={2026} fullName="Pakin Wataek" studentId="680610703" />
        </div>
      </div>
    </div>
  );
}
