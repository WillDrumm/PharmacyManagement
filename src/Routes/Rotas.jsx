import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroFarmacia from "../Pages/cadastrofarmacia";
import ListaMedicamento from "../Pages/ListaMedicamento";
import LoginPage from "../Pages/LoginPage";
import Medicamentos from "../Pages/medicamentos";
import Mapa from "../Pages/mapa";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* crie uma rota privada e envolve as rotas abaixo */}
        <Route path="/cadastrofarmacia" element={<CadastroFarmacia />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
        <Route path="/listamedicamentos" element={<ListaMedicamento />} />
        <Route path="/mapa" element={<Mapa />} />

        {/* e também crie uma rota para compononentes não econtrados */}
      </Routes>
    </BrowserRouter>
  );
}
