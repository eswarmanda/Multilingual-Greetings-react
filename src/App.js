import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    ActiveId: languageGreetingsList[0].id,
    filteredItem: languageGreetingsList[0],
  }

  onClickOption = event => {
    console.log(event.target.value)

    const filterItem = languageGreetingsList.filter(
      eachItem => eachItem.id === event.target.value,
    )

    this.setState({ActiveId: event.target.value, filteredItem: filterItem[0]})
  }

  render() {
    const {ActiveId, filteredItem} = this.state

    return (
      <div className="main-card">
        <h1>Multilingual Greetings</h1>
        <div className="btn-card">
          <ul className="unOrdered-list">
            {languageGreetingsList.map(eachItem => (
              <li className="list-item" key={eachItem.id}>
                <button
                  value={eachItem.id}
                  className={
                    eachItem.id === ActiveId ? 'activeBtn' : 'inActiveBtn'
                  }
                  type="button"
                  onClick={this.onClickOption}
                >
                  {eachItem.buttonText}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            className="image-height"
            src={filteredItem.imageUrl}
            alt={filteredItem.imageAltText}
          />
        </div>
      </div>
    )
  }
}

export default App
