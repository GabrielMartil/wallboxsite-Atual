import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Wods } from "../pages/Wods";
import { Members } from "../pages/Members";
import { GridHorario } from "../pages/GridHorario";
import { Layout } from "../components/Layout";
import { Cadastro } from "../pages/Members/pages/Cadastro";
import { Equipamentos } from "../pages/Equipment";
import { MedicoesAlunos } from "../pages/Members/pages/Medicoes";

export function RoutesPages() {
  return (
    <BrowserRouter basename="/wallboxsite-Atual">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Wods />} />
          <Route path="Members" element={<Members />} />
          <Route path="Cadastro" element={<Cadastro />} />
          <Route path="Medicoes" element={<MedicoesAlunos />} />
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
}