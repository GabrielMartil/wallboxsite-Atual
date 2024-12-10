<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wods } from "../pages/Wods";
import { Members } from "../pages/Members";
import { GridHorario } from "../pages/GridHorario";
import { Layout } from "./Layout";
import { Cadastro } from "../pages/Members/pages/Cadastro";
import { Alunos} from "../pages/Dashboard/Alunos/Alunos";
import { Equipamentos } from "../pages/Equipment";
import Financeiro from "../pages/Dashboard/Financeiro/Financeiro";

export function RoutesPages() {
  return (
    <BrowserRouter basename="/wallboxsite-Atual">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Wods />} />
          <Route path="Alunos" element={<Alunos/>} />
          <Route path="Financeiro" element={<Financeiro />} />
          <Route path="Members" element={<Members />} />
          <Route path="Cadastro" element={<Cadastro />} />
          <Route path="gradehoraria" element={<GridHorario />} />
          <Route path="Equipamentos" element={<Equipamentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RoutesPages />);
} else {
  console.error("Elemento com ID 'root' não foi encontrado no DOM.");
=======
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wods } from "../pages/Wods";
import { Members } from "../pages/Members";
import { GridHorario } from "../pages/GridHorario";
import { Layout } from "./Layout";
import { Cadastro } from "../pages/Members/pages/Cadastro";
import { Alunos} from "../pages/Dashboard/Alunos/Alunos";
import { Equipamentos } from "../pages/Equipment";
import Financeiro from "../pages/Dashboard/Financeiro/Financeiro";

export function RoutesPages() {
  return (
    <BrowserRouter basename="/wallboxsite-Atual">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Wods />} />
          <Route path="Alunos" element={<Alunos/>} />
          <Route path="Financeiro" element={<Financeiro />} />
          <Route path="Members" element={<Members />} />
          <Route path="Cadastro" element={<Cadastro />} />
          <Route path="gradehoraria" element={<GridHorario />} />
          <Route path="Equipamentos" element={<Equipamentos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<RoutesPages />);
} else {
  console.error("Elemento com ID 'root' não foi encontrado no DOM.");
>>>>>>> 47ae401f056f6ce3f42fe33bd76791f6a4f021c1
}