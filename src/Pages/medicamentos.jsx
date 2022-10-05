import { useState } from "react";
import NavBar from "../Components/NavBar";

export default function Medicamentos() {
  // a lógica está correta, mas o nome da variável não é muito intuitivo (é um medicamento e não uma lista de medicamentos)
  const [medicamentos, setMedicamentos] = useState({
    nome: "",
    laboratorios: "",
    tipo: "",
    dosagem: "",
    precoUnitario: "",
    descricao: "",
  });

  function salvarMedicamentos(e) {
    e.preventDefault();
    let save = JSON.parse(localStorage.getItem("medicamentos")) ?? [];
    save.push(medicamentos);
    localStorage.setItem("medicamentos", JSON.stringify(save));

    // lembre de informar ao usuário que o medicamento foi salvo
    alert("Medicamento salvo com sucesso!");

    // limpar o formulário
    limparFormulario();
  }

  function limparFormulario() {
    setMedicamentos({
      nome: "",
      laboratorios: "",
      tipo: "",
      dosagem: "",
      precoUnitario: "",
      descricao: "",
    });
  }

  return (
    <div>
      {/* Como o código da nav se repete, crie um componente e o chame no local adequado de cada página */}
      <NavBar />

      {/* Lembre-se de validar cada input do formulário que o usuário precisa preenchar, por exemplo o nome do medicamento */}
      <form onSubmit={salvarMedicamentos} class="row g-3">
        <div class="col-md-4">
          <label for="medicamentos" class="form-label">
            Medicamento
          </label>

          {/* para validar (tornar obrigatório o campo) basta inserir a propriedade required */}
          <input
            required
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
          {/* Nesse caso deveria ser um select com as opções de medicamento controlado e comum */}
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
            // Por ser um componente de preço, o ideal é usar um input do tipo number
            type="number"
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
          {/* Não podem haver 2 botões do type submit em um formulário, nessão todos eles terão a função do cadastro */}
          {/* Você deveria chamar uma função que limpa de fato os campos do formulário */}
          <button
            class="btn btn-primary"
            onClick={limparFormulario}
          >
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
