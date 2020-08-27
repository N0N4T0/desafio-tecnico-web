// o event é um objeto do browser que contem parametros mostrando o que aconteceu
const filterInput = document.querySelector('#formulario')

filterInput.addEventListener('input', event => {
    const inputValue = event.target.value.toLowerCase()
    const cards = document.querySelectorAll('.card')

    cards.forEach(card => {
        const cardTitle = card.querySelector('.title').textContent.toLowerCase()
        const cardText = card.querySelector('.text').textContent.toLowerCase()
        const cardArea = card.querySelector('.areas').textContent.toLowerCase()
        const cardDate = card.querySelector('.date').textContent.toLowerCase()

        if(cardTitle.includes(inputValue) || 
            cardText.includes(inputValue) || 
            cardArea.includes(inputValue) || 
            cardDate.includes(inputValue)){
            card.style.display = 'grid'
            return
        }

        card.style.display = 'none'
    })

})