import React, {Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.initialCard = { title: "", description: "" }
    this.state = this.initialCard;
  }

  handleChange = (event) => {
    const entry = event.target
    this.setState({ [entry.id]: entry.value})
  }

  submitCard = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialCard)
  }

  deleteCard = () => {
    this.props.handleDelete()
  }

  render() {
    const { title, description } = this.state;

    return (
      <form>
        <label htmlFor="title">Title</label>
        <input
          className="form-field"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange} />
        <label htmlFor="description">Description</label>
        <input
          className="form-field"
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={this.handleChange} />
        <input
          className="form-submit-button"
          type="button"
          value="Submit"
          onClick={this.submitCard} />
      </form>
    );
  }
}

export default Form;
