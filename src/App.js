import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    characters: []
  };

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]});
  }

  removeCharacter = (index) => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    })
  }

  render() {
    const { characters } = this.state

    const name = 'Matthew Hoggan';
    const h1 = <h1>Hello {name}</h1>;
    const table = <Table
      characterData={characters}
      removeCharacter={this.removeCharacter}
    />;
    const form = <Form handleSubmit={this.handleSubmit} />;
    return (
      <div className="container">
        {h1}
        {table}
        {form}
      </div>
    );
  }
}

export default App
