import React, {Component} from 'react'
import Board from './Board'
import Form from './Form'
import './index.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
  }

  handleSubmit = (item) => {
    if (this.state.items.filter(i => i.title === item.title).length === 0) {
      this.setState({ items: [...this.state.items, item] });
    } else {
      const newItems = this.state.items.map(i => {
        if (i.title === item.title) {
          return { title: i.title, description: item.description };
        } else {
          return { title: i.title, description: i.description };
        }
      })
      this.setState({ items: newItems });
    }
  }

  handleDelete = (selected) => {
    const data = this.state.items.filter((obj) => {
        return obj.title !== selected;
      });
    this.setState({ items: data })
  }

  render() {
    return <div>
        <div className="actors">Books</div>
        <Board
          cards={this.state.items}
          deleteCard={this.handleDelete} />
        <Form
          handleSubmit={this.handleSubmit} />
      </div>;
  }
}

export default App
