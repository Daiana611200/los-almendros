import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a Los Almendros"} />
    </>
  )
}

export default App