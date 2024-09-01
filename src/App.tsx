import { RouterProvider } from "react-router-dom";
import { SideBar } from "./components/Sidebar";
import { router } from "./routes";

export function App() {
  return (
    <div className="layout">
      <SideBar />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
