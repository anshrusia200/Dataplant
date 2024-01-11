import MainLayout from "./components/layout/MainLayout";
import "./App.css";
import { Scheduler } from "./components/Scheduler";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Nav } from "./components/layout/Nav";

function App() {
  const [openModal, setOpenModal] = useState("none");
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
