import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const mapa = () => {
  // lembre de dar nomes melhores para as variáveis - nesse caso é uma lista de farmácias
  let farmacia = JSON.parse(localStorage.getItem("farmacia")) ?? [];

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
      <div className="d-flex justify-content-center">
        <MapContainer
          center={[-23.6502, -46.7376]}
          zoom={9}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {farmacia.map((farma) => (
            <Marker position={[farma.latitude, farma.longitude]}>
              <Popup>
                <p>
                  <span style={{ fontWeight: 900 }}>Razão Social: </span>
                  <span>{farma.razaoSocial}</span>
                </p>
                <span style={{ fontWeight: 900 }}>CNPJ: </span>
                <span>{farma.cnpj}</span>
                <p>
                  <span style={{ fontWeight: 900 }}>Nome Fantasia: </span>
                  <span>{farma.nomeFantasia}</span>
                </p>
                <span style={{ fontWeight: 900 }}>E-Mail: </span>
                <span>{farma.email}</span>
                <p>
                  <span style={{ fontWeight: 900 }}>Telefone: </span>
                  <span>{farma.telefone}</span>
                </p>
                <span style={{ fontWeight: 900 }}>E-Mail: </span>
                <span>{farma.email}</span>
                <p>
                  <span style={{ fontWeight: 900 }}>Telefone: </span>
                  <span>{farma.telefone}</span>
                </p>
                <span style={{ fontWeight: 900 }}>WathsApp: </span>
                <span>{farma.wathsApp}</span>

                <p>
                  <span></span>
                </p>
                <p>
                  <span></span>
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};
export default mapa;
