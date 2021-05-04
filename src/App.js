import './App.css';
import React, {Component} from 'react'

//Component Imports
import CardList from './components/card-list/card-list.component'
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people : [
      ],
      searchField: ''
    }

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>response.json()
      .then(users => this.setState({people: users})))
      .catch((error) => {
        this.setState({people: [{name: 'An error occured'}], loading: true})
        console.log('Fetch users error ', error)
      })
  }
  render() {
    const {people, searchField} = this.state
    const filteredPeople = people.filter( person => {
      return person.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Random People</h1>
        <SearchBox placeholder='Search Monsters' handleChange={e => this.setState({ searchField: e.target.value})}/>
        <CardList people={filteredPeople}/>
      </div>
    );
  }
}

export default App;
