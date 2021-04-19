import React from 'react';

class Employees extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      value: '',
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.getPeopleList();
  }

  getPeopleList() {
    fetch('https://reqres.in/api/users?per_page=12')
      .then((response) => response.json())
      .then((list) => {
        this.setState({ people: list.data });
      })
      .catch((error) => console.error(error));
  }

  deletePerson(index) {
    this.setState({
      people: [
        ...this.state.people.slice(0, index),
        ...this.state.people.slice(index + 1),
      ],
    });
  }

  addPerson() {
    this.setState({
      people: this.state.people.concat({
        new_people: this.textInput.current.value,
      }),
    });
    this.textInput.current.value = '';
  }

  render() {
    const list = this.state.people.map((item, index) => {
      return (
        <li key={index}>
          <span className='text'>
            {item.new_people} {item.first_name} {item.last_name}
          </span>
          <button onClick={this.deletePerson.bind(this, index)}>delete</button>
        </li>
      );
    });

    return (
      <div>
        <ul className='list'>{list}</ul>
        <div className='addBlock'>
          <input
            type='text'
            ref={this.textInput}
            className='formItem'
            placeholder='name'
          />
          <button onClick={this.addPerson.bind(this)}>add</button>
        </div>
      </div>
    );
  }
}

export default Employees;
