import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GlobalStyle } from "./GlobalStyle.js"
import RecipeList from "./components/RecipeList.jsx"

function App() {

  return (
    <>
      <GlobalStyle />
      <RecipeList />
    </>
  )
}

export default App
