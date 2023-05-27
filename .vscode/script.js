function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  // }
  //else {
  // html.classList.add("light")
  //}
  //podemos trocar o código anterior por
  //html.classList.toggle("light")
  //a função toggle add ou remove o dado do html

  const img = document.querySelector("#profile img")
  //querySelector, pesquisa o seletor no css. nesse caso o seletor que alterou a img
  if (html.classList.contains("light")) {
    //se tiver no light mode adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    //setAttribute é para selecionar/adicionar/modificar um atributo, nesse caso o atributo modificado será o src do html
  } else {
    //se tiver sem light mode. manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  const alt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //se tiver no light mode adicionar a img light
    alt.setAttribute(
      "alt",
      "Foto de Iago Márcio sorrindo de camisa preta com o fundo da imagem na cor amarela."
    )
  } else {
    alt.setAttribute(
      "alt",
      "Foto de Iago Márcio sorrindo de camisa preta com o fundo da imagem na cor azul."
    )
  }
}
