import React, {Component} from 'react'

class Card extends Component {

  deleteCard = (e) => {
    this.props.deleteCard(this.props.card.title)
  }

  render() {
    return (
      <div
        className="card"
        tabIndex="1"
        id={this.props.card.title}> 
        <h1>{this.props.card.title}</h1>
        <div>
          <p>{this.props.card.description}</p>
          <input
            className="form-delete-button"
            type="button"
            value="Delete"
            onClick={this.deleteCard} />
        </div>
      </div>
    )
  }
}

export default Card;
