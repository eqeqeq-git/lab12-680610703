import type { TaskCardProps } from "../libs/Todolist.ts";

export default function TaskCard({
  title,
  description,
  isDone,
}: TaskCardProps) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h5
              className={`card-title m-0 ${isDone ? "text-decoration-line-through" : ""}`}
            >
              {title}
            </h5>
            <p className="card-text m-0 text-muted">{description}</p>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success w-100">Done</button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
