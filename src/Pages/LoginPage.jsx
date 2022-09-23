import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import logoTrabalho from "../Images/ImagemTrabalho.png";
import "../Pages/Correcao.css";
export default function LoginPage() {
  const navigate = useNavigate();
  function Logar() {
    navigate("/CadastroFarmacia");
  }
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
          <button type="button" class="btn btn-success">
            Login
          </button>
        </div>
      </nav>
      <div className="boxLogin d-flex justify-content-center loginform">
        <div className="LoginForm ">
          <img src={logoTrabalho} style={{ width: "700px" }} />
          <div className="d-flex justify-content-center loginform">
            <form onSubmit={Logar}>
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  E-Mail
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Seu melhor e-mail"
                />
              </div>
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="password"
                />
              </div>
              <button type="submit" class="btn btn-success">
                Sucesso
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
