import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import { ContainerButton, ContainerCards } from './styles'

function App() {

  const [cards, setCards] = useState()
  const [gameIsOn, setGameIsOn] = useState(false)

  const cardBack = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/back-blue-card.png'
  const url = 'https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/'

  useEffect(() => {
    axios.get('./tarot.json')
      .then(res => {
        setCards(res.data.cards)
      }).catch(err => {
        console.log(err.response)
      })
  }, [])

  const cardList = cards && cards.map(card => {
    return (
      <Card
        key={card.name}
        image={`${url}${card.image}`}
        cardBack={cardBack}
        name={card.name}
        gameIsOn={gameIsOn}
      />
    )
  })

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  const startGame = () => {
    setGameIsOn(true)
    const shuffledCards = shuffleArray(cards)
    setCards(shuffledCards)
  }

  return (
    <>
      <ContainerButton>
        <button onClick={startGame}>Jogar</button>
      </ContainerButton>

      <ContainerCards>
        {cardList}
      </ContainerCards>
    </>
  )
}

export default App