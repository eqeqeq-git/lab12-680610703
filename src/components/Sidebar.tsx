interface SidebarProps {
  userName: string;
  type: string;
}

export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    <aside
      className="d-flex align-items-start flex-column p-4 bg-primary min-vh-100"
      style={{ width: "auto", height: "100%", overflowY: "auto" }}
      data-bs-theme="dark"
    >
      <div className="flex-grow-1">
        <nav className="navbar align-items-start flex-column">
          <h3 className="navbar-brand">Note App</h3>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <span className="d-md-inline px-2">Todo List</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="d-md-inline px-2">My Stuffs</span>
              </a>
              <ul className="dropdown-menu p-2">
                <li>
                  <a className="nav-link active" href="#">
                    <span className="d-md-inline px-2">All Tasks</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link active" href="#">
                    <span className="d-md-inline px-2">About</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-white">
          {userName} :{type}
        </p>
      </div>
    </aside>
  );
}
