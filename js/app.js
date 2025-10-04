const alternar = document.querySelector(".js-botao--chaveador");
alternar.onclick = () => {
  let menu = document.querySelector(".js-menu");

  menu.classList.toggle("menu--exibindo");
};


