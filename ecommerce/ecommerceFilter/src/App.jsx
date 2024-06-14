import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/products'
import Recommended from './recommended/recommended'
import './index.css'
import data from './assets/data'
import Sidebar from './sidebar/sidebar'
function App() {
  const[selectedCategory,setSelectedCategory] = useState(null);
  const[query,setQuery] = useState('');
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  const filteredItems = data.filter((item) =>
  item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase() !== -1));
  
  return (
    <>
    <Sidebar />
    <Nav />
    <Recommended />
    <Products />
    </>
  )
}

export default App
