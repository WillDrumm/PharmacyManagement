import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

export default function NavBar() {
  return (
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
          <Link to="/cadastrofarmacia">
            <button type="button" class="btn btn-success menu">
              Cadastro Farmácia
            </button>
          </Link>
          <button type="button" class="btn btn-success menu">
            Cadastro Medicamento
          </button>
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
  );
}
