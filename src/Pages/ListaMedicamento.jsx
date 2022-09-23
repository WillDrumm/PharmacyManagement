import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "../Pages/Correcao.css";
const ListaMedicamento = () => {
  const medicamento = JSON.parse(localStorage.getItem("medicamentos")) ?? [];
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <img src={logo} width="200px" alt="logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a
                  class="nav-link active text-white"
                  aria-current="page"
                  href="#"
                ></a>
              </li>
            </ul>
          </div>
          <div className="botoes">
            <Link to="/Cadastrofarmacia">
              <button type="button" class="btn btn-success">
                Cadastro Farmácia
              </button>
            </Link>
            <Link to="/medicamentos">
              <button type="button" class="btn btn-success menu">
                Cadastro Medicamentos
              </button>
            </Link>
            <Link to="/mapa">
              <button type="button" class="btn btn-success menu">
                Mapa
              </button>
            </Link>
            <Link to="/listamedicamentos">
              <button type="button" class="btn btn-success menu">
                Medicamentos
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div className="boxMedicamentos">
        {medicamento.map((medicamento) => (
          <div
            class="card text-bg-light mb-3 cardMedicamento"
            style={{ width: "20rem" }}
          >
            <img
              src="https://site.abcfarma.org.br/wp-content/uploads/2019/10/med-gen.jpg"
              style={{ width: "150px" }}
            />
            <div class="card-body">
              <h5 class="card-title">
                <span>
                  {medicamento.nome} {medicamento.dosagem}
                </span>
                <p>{medicamento.laboratorios}</p>
                R${medicamento.precoUnitario}
                <p className="laboratorio">{medicamento.tipo}</p>
              </h5>
              <p class="card-text">{medicamento.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaMedicamento;
