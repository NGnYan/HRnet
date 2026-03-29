import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from "./components/Layout.jsx";
import LoadingState from "./components/LoadingState.jsx";
import "./App.css";

const Home = lazy(() => import("./pages/Home.jsx"));
const EmployeesList = lazy(() => import("./pages/EmployeesList.jsx"));
const Login = lazy(() => import("./pages/LoginPage.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingState />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />

          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/employees"
              element={
                <ProtectedRoute>
                  <EmployeesList />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
