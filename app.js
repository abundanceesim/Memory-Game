document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'bed',
            img: 'images/bed.png'
        }, {
            name: 'crescent',
            img: 'images/crescent.png'
        }, {
            name: 'eyebags',
            img: 'images/eyebags.png'
        }, {
            name: 'pillow',
            img: 'images/pillow.png'
        }, {
            name: 'yawn',
            img: 'images/yawn.png'
        }, {
            name: 'zzz',
            img: 'images/zzz.png'
        }, {
            name: 'bed',
            img: 'images/bed.png'
        }, {
            name: 'crescent',
            img: 'images/crescent.png'
        }, {
            name: 'eyebags',
            img: 'images/eyebags.png'
        }, {
            name: 'pillow',
            img: 'images/pillow.png'
        }, {
            name: 'yawn',
            img: 'images/yawn.png'
        }, {
            name: 'zzz',
            img: 'images/zzz.png'
        }
        
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    const commentBox = document.getElementById('comment')
    const comment = document.createElement('p')

    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        commentBox.innerHTML = '<h3>You have clicked the same image!</h3>'
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        commentBox.innerHTML = '<h3>Match!</h3>'
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        commentBox.innerHTML = '<h3>Sorry, try again!</h3>'
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = ' 6/6'
        commentBox.innerHTML = '<h3>Congratulations! You found them all</h3>'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      //card.classList.toggle("flipCard");
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()

    
    
  })