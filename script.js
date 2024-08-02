const tareas = [
  {
    descripcion: "Ordenar la Habitacion",
    dificultad: 1,
    finalizada: false,
  },
  {
    descripcion: "Pasear al perro",
    dificultad: 1,
    finalizada: false,
  },
  {
    descripcion: "Entrenar",
    dificultad: 3,
    finalizada: false,
  },
];

const tareasFinalizadas = [];

function agregarTareas(tareas) {
  const container = document.getElementById("container");

  const card = document.createElement("div");
  card.className = "card";

  const titulo = document.createElement("h3");
  titulo.innerText = tareas.descripcion;

  const dificultad = document.createElement("p");
  dificultad.innerText = `Dificultad = ${tareas.dificultad}`;

  const boton = document.createElement("button");
  boton.innerText = tareas.finalizada ? "Finalizada" : "Finalizar";
  boton.style.backgroundColor = tareas.finalizada ? "green" : "gray";

  boton.onclick = () => {
    if (tareas.finalizada) {
      tareas.finalizada = false;
      boton.innerText = "Finalizar";
      boton.style.backgroundColor = "gray";

      const index = tareasFinalizadas.indexOf(tareas);
      if (index > -1) {
        tareasFinalizadas.splice(index, 1);
      }
    } else {
      tareas.finalizada = true;
      boton.innerText = "Finalizada";
      boton.style.backgroundColor = "green";

      if (!tareasFinalizadas.includes(tareas)) {
        tareasFinalizadas.push(tareas);
      }
    }

    boton.innerText = tareas.finalizada ? "Finalizada" : "Finalizar";
    boton.style.backgroundColor = tareas.finalizada ? "green" : "gray";

    console.log(tareasFinalizadas);
  };

  card.append(titulo);
  card.append(dificultad);
  card.append(boton);

  container.append(card);
}

tareas.forEach((el) => agregarTareas(el));
