import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
export default function CadastroFarmacia() {
  const [farmacia, setFarmacia] = useState({
    razaoSocial: "",
    cnpj: "",
    cep: "",
    complemento: "",
    telefone: "",
    celular: "",
    nomeComercial: "",
    email: "",
    endereco: "",
    bairro: "",
    cidade: "",
    estado: "",
    longitude: "",
    latitude: "",
  });
  useEffect(() => {
    if (farmacia.cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${farmacia.cep}/json/`)
        .then((resposta) => {
          return resposta.json();
        })
        .then((dados) => {
          setFarmacia({
            ...farmacia,
            endereco: dados.logradouro,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf,
          });
        });
    }
  }, [farmacia.cep]);

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?street=${farmacia.endereco}&format=json`
    )
      .then((resposta) => {
        return resposta.json();
      })
      .then((dados) => {
        setFarmacia({
          ...farmacia,
          latitude: dados[0].lat,
          longitude: dados[0].lon,
        });
      });
  }, [farmacia.endereco]);

  function salvarFarmacia(e) {
    let save = JSON.parse(localStorage.getItem("farmacia")) ?? [];
    save.push(farmacia);
    localStorage.setItem("farmacia", JSON.stringify(save));
    e.preventDefault();
  }
  return (
    <div>
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
      </div>
      <form onSubmit={salvarFarmacia} class="row g-3">
        <div class="col-md-2">
          <label for="RazaoSocial" class="form-label">
            Razão Social
          </label>
          <input
            type="text"
            class="form-control"
            id="razaoSocial"
            value={farmacia.razaoSocial}
            onChange={(e) =>
              setFarmacia({ ...farmacia, razaoSocial: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="cnpj" class="form-label">
            CNPJ
          </label>
          <input
            type="text"
            class="form-control"
            id="cnpj"
            value={farmacia.cnpj}
            onChange={(e) => setFarmacia({ ...farmacia, cnpj: e.target.value })}
          />
        </div>

        <div class="col-md-2">
          <label for="nomefantasia" class="form-label">
            Nome Comercial
          </label>
          <input
            type="text"
            class="form-control"
            id="nomeFantasia"
            value={farmacia.nomeComercial}
            onChange={(e) =>
              setFarmacia({ ...farmacia, nomeComercial: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="email" class="form-label">
            E-Mail
          </label>
          <input
            type="text"
            class="form-control"
            id="email"
            value={farmacia.email}
            onChange={(e) =>
              setFarmacia({ ...farmacia, email: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="endereço" class="form-label">
            Endereço
          </label>
          <input
            type="text"
            class="form-control"
            id="endereço"
            value={farmacia.endereco}
            onChange={(e) =>
              setFarmacia({ ...farmacia, endereco: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="telefone" class="form-label">
            Telefone
          </label>
          <input
            type="text"
            class="form-control"
            id="telefone"
            value={farmacia.telefone}
            onChange={(e) =>
              setFarmacia({ ...farmacia, telefone: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="celular" class="form-label">
            celular
          </label>
          <input
            type="text"
            class="form-control"
            id="celular"
            value={farmacia.celular}
            onChange={(e) =>
              setFarmacia({ ...farmacia, celular: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="cep" class="form-label">
            CEP
          </label>
          <input
            type="text"
            class="form-control"
            id="cep"
            value={farmacia.cep}
            onChange={(e) => setFarmacia({ ...farmacia, cep: e.target.value })}
          />
        </div>

        <div class="col-md-2">
          <label for="bairro" class="form-label">
            Bairro
          </label>
          <input
            type="text"
            class="form-control"
            id="bairro"
            value={farmacia.bairro}
            onChange={(e) =>
              setFarmacia({ ...farmacia, bairro: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="cidade" class="form-label">
            Cidade
          </label>
          <input
            type="text"
            class="form-control"
            id="cidade"
            value={farmacia.cidade}
            onChange={(e) =>
              setFarmacia({ ...farmacia, cidade: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="estado" class="form-label">
            Estado
          </label>
          <input
            type="text"
            class="form-control"
            id="estado"
            value={farmacia.estado}
            onChange={(e) =>
              setFarmacia({ ...farmacia, estado: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="latitude" class="form-label">
            Latitude
          </label>
          <input
            type="text"
            class="form-control"
            id="latitude"
            value={farmacia.latitude}
            onChange={(e) =>
              setFarmacia({ ...farmacia, latitude: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="complemento" class="form-label">
            Complemento
          </label>
          <input
            type="text"
            class="form-control"
            id="complemento"
            value={farmacia.complemento}
            onChange={(e) =>
              setFarmacia({ ...farmacia, complemento: e.target.value })
            }
          />
        </div>
        <div class="col-md-2">
          <label for="longitude" class="form-label">
            Longitude
          </label>
          <input
            type="text"
            class="form-control"
            id="logitude"
            value={farmacia.longitude}
            onChange={(e) =>
              setFarmacia({ ...farmacia, longitude: e.target.value })
            }
          />
        </div>

        <div class="col-12 d-flex justify-content-end d-grid gap-3 botaoForm">
          <button type="submit" class="btn btn-primary">
            Limpar
          </button>

          <button type="submit" class="btn btn-primary">
            Salvar
          </button>
        </div>
        {console.log(farmacia)}
      </form>
    </div>
  );
}
