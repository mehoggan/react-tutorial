import React, {Component} from 'react'
import Card from './Card'

class Board extends Component {

  deleteCard = (title) => {
    this.props.deleteCard(title);
  }

  render() {
    const result = this.props.cards.map(card => {
      return <Card card={card} key={card.title}
         deleteCard={this.deleteCard} />
    })

    return (
      <div className='container'>
        {result}
      </div>
    )
  }
}

export default Board;
