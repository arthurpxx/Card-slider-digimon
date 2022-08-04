// Objetivo 1 - Quando clicar na seta da direita mostrar o proximo cartão

// - passo 1 - pegar o elemento HTML da seta e avançar
// - passo 2 - identificar o clique no elemento
// - passo 3 - aparer o proximo cartão
// - passo 4 - bucar o cartão selecionado e esconder

// Objetivo 2 - Quando clicar na seta da esquerda mostrar o proximo cartão

// - passo 1 - pegar o elemento HTML da seta e voltar
// - passo 2 - identificar o clique no elemento
// - passo 3 - aparer o cartão anterior
// - passo 4 - bucar o cartão selecionado e esconder



// passo 1 - pegar o elemento HTML da seta e avançar
const btnNext = document.getElementById('btn-next')
const btnPrev = document.getElementById('btn-prev')
// passo 3 - aparer o proximo cartão
const card = document.querySelectorAll('.card')
let cardCurrent = 0

function hideCardSelected() {
  // passo 4 - bucar o cartão selecionado e esconder
  const cardSelected = document.querySelector('.selected')
  cardSelected.classList.remove('selected')
}

function showCard(indexCard) {
  card[indexCard].classList.add('selected');
}
// passo 2 - identificar o clique no elemento
btnNext.addEventListener('click', () => {
  if (cardCurrent === card.length - 1) return
  hideCardSelected()
  cardCurrent++
  showCard(cardCurrent)
})

btnPrev.addEventListener('click', () => {
  if (cardCurrent === 0) return
  hideCardSelected()
  cardCurrent--
  showCard(cardCurrent)
})
