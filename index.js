const Devs = [];
let number = 0;

///-----------------Criar--------------------------///
const button = document.getElementById("addTech");

button.addEventListener("click", function (ev) {
  ev.preventDefault();

  const section = document.getElementById("section");

  number = number + 1;

  const form = document.createElement("form");
  form.id = "formulario" + number;
  form.name = "formulario";

  const h3 = document.createElement("h3");
  h3.innerText = "Adicionar Experiencia";

  const tecnologia = document.createElement("label");
  tecnologia.innerText = "Tecnologia: ";

  const tech = document.createElement("input");
  tech.name = "Tecnologia";
  tech.type = "input";

  const time = document.createElement("label");
  time.innerText = " | Tempo de Experiencia:";

  const input1 = document.createElement("input");
  input1.name = "check";
  input1.id = "check";
  input1.type = "radio";
  input1.value = "0-2 anos";

  const radio1 = document.createElement("label");
  radio1.id = "check";
  radio1.innerText = "0 - 2 anos";

  const input2 = document.createElement("input");
  input2.name = "check";
  input2.id = "check";
  input2.type = "radio";
  input2.value = "3-5 anos";

  const radio2 = document.createElement("label");
  radio2.id = "check";
  radio2.innerText = "3 - 5 anos";

  const input3 = document.createElement("input");
  input3.name = "check";
  input3.id = "check";
  input3.type = "radio";
  input3.value = "10 anos";

  const radio3 = document.createElement("label");
  radio3.id = "check";
  radio3.innerText = "10 anos - ";

  const buttonExcluir = document.createElement("button");
  buttonExcluir.innerText = "Excluir";
  buttonExcluir.id = "excluir" + number;
  buttonExcluir.name = "excluir";

  const hr = document.createElement("hr");

  form.appendChild(h3);
  form.appendChild(tecnologia);
  form.appendChild(tech);
  form.appendChild(time);
  form.appendChild(input1);
  form.appendChild(radio1);
  form.appendChild(input2);
  form.appendChild(radio2);
  form.appendChild(input3);
  form.appendChild(radio3);
  form.appendChild(buttonExcluir);
  form.appendChild(hr);
  section.append(form);
});
///-----------------Botao Cadastrar--------------------------///
const buttonC = document.getElementById("cadastrarDev");

buttonC.addEventListener("click", function (ev) {
  ev.preventDefault();

  const Dev = {};
  let tecnologia = [];
  let tempo = [];
  let experiencia = [];

  Dev.name = document.querySelector("input[name='name']").value;

  document
    .querySelectorAll("input[name='Tecnologia']")
    .forEach(function (item) {
      tecnologia.push(item.value);
    });
  document.querySelectorAll('input[type="radio"]:checked').forEach((item) => {
    tempo.push(item.value);
  });

  for (let i in tecnologia) {
    experiencia.push(tecnologia[i] + " - " + tempo[i] + " | ");
  }

  Dev.experiencia = "";
  experiencia.forEach((item) => {
    Dev.experiencia += item;
  });

  Devs.push(Dev);
  //---------Limpa Form------------------///
  document.querySelector("form").reset();

  document
    .querySelectorAll("input[name='Tecnologia']")
    .forEach(function (item) {
      item.value = "";
    });

  console.log(Devs);
});

//-----------------Botao Excluir--------------------------///

const botaoExcluir = document.getElementById("excluir1");

console.log(botaoExcluir);

botaoExcluir.addEventListener("click", function (ev) {
  ev.preventDefault();
});
