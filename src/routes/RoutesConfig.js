import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Conductor,
  AgregarEgreso,
  Egresos,
  AgregarIngreso,
  Ingresos,
  Resumen,
  Login,
  Dashboard,
} from "../views/pages";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/MainLayout";

const RoutesConfig = () => (
  <Routes>
    <Route path="/login" element={<Login />} />

    <Route
      path="/"
      element={
        <PrivateRoute>
          <MainLayout>
            <Dashboard />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <MainLayout>
            <Dashboard />
          </MainLayout>
        </PrivateRoute>
      }
    />

    <Route
      path="/ingresos"
      element={
        <PrivateRoute>
          <MainLayout>
            <Ingresos />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/ingresos/agregaringreso"
      element={
        <PrivateRoute>
          <MainLayout>
            <AgregarIngreso />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/egresos"
      element={
        <PrivateRoute>
          <MainLayout>
            <Egresos />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/egresos/agregaregreso"
      element={
        <PrivateRoute>
          <MainLayout>
            <AgregarEgreso />
          </MainLayout>
        </PrivateRoute>
      }
    />

    <Route
      path="/resumen"
      element={
        <PrivateRoute>
          <MainLayout>
            <Resumen />
          </MainLayout>
        </PrivateRoute>
      }
    />
    <Route
      path="/conductor"
      element={
        <PrivateRoute>
          <MainLayout>
            <Conductor />
          </MainLayout>
        </PrivateRoute>
      }
    />
  </Routes>
);

export default RoutesConfig;
