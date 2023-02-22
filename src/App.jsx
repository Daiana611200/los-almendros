import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/sections/ItemListContainer'
import ItemDetailContainer from './components/sections/ItemDetailContainer'
import Home from './components/Home'

function App() {
  return (
      <BrowserRouter>   
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
              <Route exact path="/catalogue" element={<ItemListContainer />} />
              <Route exact path="/category/:category" element={<ItemListContainer />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App
