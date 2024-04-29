// Declarando arrays de atributos diversos
let random_margin = ["-5px", "1px", "5px", "10px", "7px"];
let random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
let random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];

// Variável de controle
let index = 0;

// Seleciona o campo de entrada de texto quando a janela é carregada
// Seleciona a entrada de texto quando janela carrega, no debaixo adiciona um evento no botão de adicionar nota
window.onload = document.querySelector("#user_input").select();
document.querySelector("#add_note").addEventListener("click", () => {
  // Exibe o modal
  document.querySelector("#modal").style.display = "block";
});

// Adiciona evento no botão de ocultar o modal
document.querySelector("#hide").addEventListener("click", () => {
  // Oculta o modal
  document.querySelector("#modal").style.display = "none";
});

// Adiciona evento para escutar tecla 'Enter' no campo de entrada de texto
document.querySelector("#user_input").addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    // Se a tecla 'Enter' for pressionada, cria uma nota com o texto inserido
    const text = document.querySelector("#user_input");
    createStickyNote(text.value);
  }
});

// Função para criar uma nota adesiva com um texto dado
createStickyNote = (text) => {
  // Criação dos elementos HTML para a nota adesiva
  let note = document.createElement("div");
  let details = document.createElement("div");
  let noteText = document.createElement("h1");

  // Atribuição de classes aos elementos
  note.className = "note";
  details.className = "details";
  noteText.textContent = text;

  // Adiciona o texto à estrutura da nota
  details.appendChild(noteText);
  note.appendChild(details);

  // Verifica se o índice ultrapassou o tamanho do array de cores aleatórias e reinicia, se necessário
  if(index > random_colors.length - 1)
    index = 0;

  // Aplica estilos aleatórios à nota adesiva
  note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]}; transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

  // Adiciona evento de duplo clique para remover a nota adesiva quando clicada
  note.addEventListener("dblclick", () => {
    note.remove();
  })

  // Adiciona a nota adesiva à seção de todas as notas
  document.querySelector("#all_notes").appendChild(note);
}
