import MainLayout from "./components/layout/MainLayout";
import "./App.css";
import { Scheduler } from "./components/Scheduler";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Nav } from "./components/layout/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route index element={<Scheduler />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
