import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
export default function Medicamentos() {
  const [medicamentos, setMedicamentos] = useState({
    nome: "",
    laboratorios: "",
    tipo: "",
    dosagem: "",
    precoUnitario: "",
    descricao: "",
  });

  function salvarMedicamentos(e) {
    let save = JSON.parse(localStorage.getItem("medicamentos")) ?? [];
    save.push(medicamentos);
    localStorage.setItem("medicamentos", JSON.stringify(save));
    e.preventDefault();
  }

  return (
    <div>
      {console.log(medicamentos)}
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
      </div>
      <form onSubmit={salvarMedicamentos} class="row g-3">
        <div class="col-md-4">
          <label for="medicamentos" class="form-label">
            Medicamento
          </label>
          <input
            type="text"
            class="form-control"
            id="medicamentos"
            value={medicamentos.nome}
            onChange={(e) =>
              setMedicamentos({ ...medicamentos, nome: e.target.value })
            }
          />
        </div>
        <div class="col-md-4">
          <label for="laboratorios" class="form-label">
            Laboratório
          </label>
          <input
            type="text"
            class="form-control"
            id="laboratorios"
            value={medicamentos.laboratorios}
            onChange={(e) =>
              setMedicamentos({ ...medicamentos, laboratorios: e.target.value })
            }
          />
        </div>

        <div class="col-md-3">
          <label for="tipo" class="form-label">
            Tipo
          </label>
          <input
            type="text"
            class="form-control"
            id="tipo"
            value={medicamentos.tipo}
            onChange={(e) =>
              setMedicamentos({ ...medicamentos, tipo: e.target.value })
            }
          />
        </div>
        <div class="col-md-3">
          <label for="dosagem" class="form-label">
            Dosagem
          </label>
          <input
            type="text"
            class="form-control"
            id="dosagem"
            value={medicamentos.dosagem}
            onChange={(e) =>
              setMedicamentos({ ...medicamentos, dosagem: e.target.value })
            }
          />
        </div>
        <div class="col-md-3">
          <label for="precoUnitario" class="form-label">
            Preço unitário
          </label>
          <input
            type="text"
            class="form-control"
            id="precoUnitario"
            value={medicamentos.precoUnitario}
            onChange={(e) =>
              setMedicamentos({
                ...medicamentos,
                precoUnitario: e.target.value,
              })
            }
          />
        </div>
        <hr />
        <div class="mb-3">
          <label for="is " class="form-label">
            Descrição
          </label>
          <textarea
            class="form-control"
            id="descrição"
            value={medicamentos.descricao}
            onChange={(e) =>
              setMedicamentos({ ...medicamentos, descricao: e.target.value })
            }
            rows="3"
          ></textarea>
        </div>

        <div class="col-12 d-flex justify-content-end d-grid gap-3 botaoForm">
          <button type="submit" class="btn btn-primary">
            Limpar
          </button>

          <button type="submit" class="btn btn-primary">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
