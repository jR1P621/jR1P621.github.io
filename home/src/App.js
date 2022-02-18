import './App.css'
import { useState, useEffect } from 'react'
import Category from './components/Category'

var isLoaded = false

function App() {

  const [content, setContent] = useState([])

  useEffect(() => {
    if (!isLoaded)
      fetch('homeItems.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(function (response) {
        console.log(response)
        return response.json()
      })
        .then(function (jsonData) {
          console.log(jsonData)
          setContent(jsonData)
          isLoaded = true
        })
  })

  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome to my front-end repository!</h3>
        <p>This is where I serve the apps and games I've created while learning different front-end technologies</p>
      </header>
      <div className='App-content'>
        {content.map((category) => (<Category key={category.id} catItems={category.items} catName={category.category}></Category>))}
      </div>
    </div>
  )
}

export default App
