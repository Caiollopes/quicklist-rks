const button = document.querySelector(".button")
const input = document.querySelector(".input")
const listaCompleta = document.querySelector("ul")
const alert = document.getElementById("alert")

let minhaListaDeItens = [
  "Pão de forma",
  "Café preto",
  "Suco de laranja",
  "Bolacha",
]

// Adicionando novo item.
function adicionarNovaTarefa() {
  if (input.value === "") {
    window.alert("Não pode adicionar um campo vazio!")
  } else {
    // unshift - adiciona um nov item no começo do array
    minhaListaDeItens.unshift(input.value)

    // limpa o input para uma nova inserção
    input.value = ""

    // Executa a função para mostrar a lista atualizada
    mostrarTarefas()
  }
}

// Mostrar novo item adicionado.
function mostrarTarefas() {
  let novaLi = ""

  minhaListaDeItens.forEach((tarefa, index) => {
    novaLi +=
      novaLi +
      `
    <li class="item radio-inner">
    <div class="radio-image"></div>
    <input type="radio">
    <p>${tarefa}</p>
    <a class="trash" onclick="deletarItem(${index})">
    <img src="assets/icons/trash.svg" alt="">
    </a>
    </li>
    `
  })

  // Insere um novo li na ul
  listaCompleta.innerHTML = novaLi
}

// Pegando a ação do botao "Adicionar item".
button.addEventListener("click", adicionarNovaTarefa)

// Deletar Item da Lista.
// splice - vai remover o item do array
function deletarItem(index) {
  minhaListaDeItens.splice(index, 1)

  // Vai atualizar a lista
  mostrarTarefas()

  //Vai alertar que um produto foi removido
  alertDelete()
}

// Aparecer o alerta na hora que exclui.
function alertDelete() {
  alert.classList.remove("alert-close")
}

// Fechar o alerta ao clicar no X.
function closeAlert() {
  alert.classList.add("alert-close")
}

// Função de selecionar item
document.addEventListener("DOMContentLoaded", function tabom() {
  const itens = document.querySelectorAll(".radio-inner") // Selecionado todos itens da lista
  const classeSelecionada = "is-selected" // Classe selecionada

  // Percorre todos os item da lista e monitorando o evento de click em algum produto.
  itens.forEach((item) => {
    item.addEventListener("click", function () {
      // Verifica se o item clicado ja esta selecionado (se contem a classe)
      const isAlreadySelected = this.classList.contains(classeSelecionada)

      if (isAlreadySelected) {
        // Se caso estiver selecionado, ele desseleciona (tirando a classe)
        this.classList.remove(classeSelecionada)
      } else {
        // Adiciona a classe no item
        item.classList.add(classeSelecionada)
      }
    })
  })
})
