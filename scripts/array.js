const button = document.querySelector(".button")
const input = document.querySelector(".input")
const listaCompleta = document.querySelector("ul")

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
  
  minhaListaDeItens.forEach(tarefa => {
    novaLi = novaLi + `
    <li class="item radio-inner">
    <div class="radio-image"></div>
    <input type="radio">
    <p>${tarefa}</p>
    <a class="trash" onclick="closeAlert()">
    <img src="assets/icons/trash.svg" alt="">
    </a>  
    </li>
    `
  })
  
  listaCompleta.innerHTML = novaLi
   
}

button.addEventListener('click', adicionarNovaTarefa)



