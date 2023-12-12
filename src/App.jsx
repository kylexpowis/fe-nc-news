import { useState } from 'react'
import ArticlesList from "./components/ArticlesList"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <h1 className="header"> NC News </h1>
        <ArticlesList />
      </div>
    </>
  )
}

export default App
