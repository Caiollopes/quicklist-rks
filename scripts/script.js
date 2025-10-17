const button = document.querySelector(".button")
const input = document.querySelector(".input")
const listaCompleta = document.querySelector("ul")
const alert = document.getElementById("alert")

let minhaListaDeItens = ["Pão de forma", "Café preto", "Suco de laranja", "Bolacha"]

function adicionarNovaTarefa(){
if (input.value === "") {
  alert("Não pode adicionar um campo vazio!")

} else {
  minhaListaDeItens.push(input.value)
  
  input.value = ""

  mostrarTarefas()
}

}

function mostrarTarefas() {
  
  let novaLi = ''
  
  minhaListaDeItens.forEach((tarefa, index) => {
    novaLi = novaLi + `
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
  
  listaCompleta.innerHTML = novaLi
   
}

button.addEventListener('click', adicionarNovaTarefa)

function deletarItem(index) {
  
  minhaListaDeItens.splice(index, 1)
  
  
  mostrarTarefas()
  alertDelete()
}

function alertDelete() {
  alert.classList.remove("alert-close")
}

function closeAlert() {
  alert.classList.add("alert-close")
}







