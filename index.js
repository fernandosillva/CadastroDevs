const Devs = [];

const button = document.getElementById("addTech");

button.addEventListener("click", criar);

function criar() {
  const form = document.getElementById("input");

  const nome = document.createElement("label");

  nome.innerText = "Tecnologia : ";

  const tech = document.createElement("input");
  tech.name = "Tecnologia";
  tech.type = "input";
  const hr = document.createElement("hr");

  const time = document.createElement("label");
  time.innerText = " | Tempo de Experiencia:";

  const radioInput = document.createElement("input");
  radioInput.name = "checado";
  radioInput.type = "radio";

  const radio1 = document.createElement("label");
  radio1.name = "main";
  radio1.innerText = "0 - 2 anos";

  const radioInput1 = document.createElement("input");
  radioInput1.name = "checado";
  radioInput1.type = "radio";

  const radio2 = document.createElement("label");
  radio2.name = "main";
  radio2.innerText = "3 - 5 anos";

  const radioInput2 = document.createElement("input");
  radioInput2.name = "checado";
  radioInput2.type = "radio";

  const radio3 = document.createElement("label");
  radio3.name = "main";
  radio3.innerText = "10 anos - ";

  const radioInput3 = document.createElement("input");
  radioInput3.name = "checado";
  radioInput3.type = "radio";

  const buttonExcluir = document.createElement("button");
  buttonExcluir.innerText = "Excluir";

  nome.appendChild(tech);
  nome.appendChild(time);
  nome.appendChild(radioInput);

  radio1.appendChild(radioInput1);
  radio2.appendChild(radioInput2);
  radio3.appendChild(radioInput3);
  nome.appendChild(radio1);
  nome.appendChild(radio2);
  nome.appendChild(radio3);

  nome.appendChild(buttonExcluir);

  nome.appendChild(hr);

  form.append(nome);
}

const buttonC = document.getElementById("cadastrarDev");

buttonC.addEventListener("click", cadastrar);

function cadastrar() {
  const form = document.getElementById("input");

  const nome = document.querySelector("input[name='Tecnologia']").value;
  const check = document.querySelector("input[name='checado']").value;

  Devs.nome = nome;
  Devs.check = check;

  console.log(Devs);
}
