const btn = document.querySelector("#btnDelete");
const btnRestored = document.querySelector("#btnRestored");
const titulo = document.querySelector("h1");
const img = document.querySelector("img");
const main = document.querySelector("main");
const mainOriginalContent = main.innerHTML;

titulo.textContent = "Hi my name is Willian";

function restoreContent() {
  titulo.textContent = "Hi my name is Willian";
  titulo.style.color = "#ffffff";
  img.style.display = "block";
  
  main.style.transition = "opacity 0.3s ease";
  main.style.opacity = "0";

  setTimeout(() => {
    main.innerHTML = mainOriginalContent;
    main.style.opacity = "1";
    btn.style.marginTop = "0";
  }, 300);
}

//delete
btn.addEventListener("click", function() {
  if (titulo.textContent === "Hi my name is Willian") {
    
    titulo.textContent = "Willian";
    titulo.style.color = "aqua";
    img.style.display = "none";
    main.innerHTML = "";

    const desaparecio = document.createElement("h1");
    desaparecio.textContent = "¡Desapareció El Contenido!";
    Object.assign(desaparecio.style, {
      color: "#ffffff",
      textAlign: "center",
      margin: "2rem 0"
    });

    btn.style.marginTop = "20px";
    main.appendChild(desaparecio);
  } else {

    restoreContent();
  }
});


if (btnRestored) {
  btnRestored.addEventListener("click", restoreContent);
}