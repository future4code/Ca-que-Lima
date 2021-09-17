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

  const startGame = () => {
    setGameIsOn(true)
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