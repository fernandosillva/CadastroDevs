const Devs = [];

const button = document.getElementById("addTech");

button.addEventListener("click", function (ev) {
  ev.preventDefault();

  const section = document.getElementById("section");

  const form = document.createElement("form");

  const h3 = document.createElement("h3");
  h3.innerText = "Adicionar Experiencia";

  const tecnologia = document.createElement("label");
  tecnologia.innerText = "Tecnologia: ";

  const tech = document.createElement("input");
  tech.name = "Tecnologia";
  tech.type = "text";

  const time = document.createElement("label");
  time.innerText = " | Tempo de Experiencia:";

  const input1 = document.createElement("input");
  input1.name = "check";
  input1.id = "check";
  input1.type = "radio";
  input1.value = "0-2 anos";

  const radio1 = document.createElement("label");
  radio1.name = "check";
  radio1.id = "check";
  radio1.innerText = "0 - 2 anos";

  const input2 = document.createElement("input");
  input2.name = "check";
  input2.id = "check";
  input2.type = "radio";
  input2.value = "3-5 anos";

  const radio2 = document.createElement("label");
  radio2.name = "check";
  radio2.id = "check";
  radio2.innerText = "3 - 5 anos";

  const input3 = document.createElement("input");
  input3.name = "check";
  input3.id = "check";
  input3.type = "radio";
  input3.value = "10 anos";

  const radio3 = document.createElement("label");
  radio3.name = "check";
  radio3.id = "check";
  radio3.innerText = "10 anos - ";

  const buttonExcluir = document.createElement("button");
  buttonExcluir.innerText = "Excluir";
  buttonExcluir.id = "excluir";
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
  section.append(form);

  console.log(form);
});

const buttonC = document.getElementById("cadastrarDev");

buttonC.addEventListener("click", function (ev) {
  ev.preventDefault();

  const Dev = {};

  const form = document.getElementById("section");

  Dev.nome = document.querySelector("input[name='Tecnologia']").value;
  Dev.check = document.querySelector("input[type='radio']:checked").value;

  Devs.push(Dev);

  console.log(Devs);
});
