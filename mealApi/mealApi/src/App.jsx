import { useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => {
      setItems(res.data.meals)
      // console.log(res.data.meals)
    }) 
    .catch(() => {
      console.log(`error ${error}`)
      });
  },[])
  
  const itemsList = items.map(({strMeal,strMealThumb,idMeal}) => {
    return(
      <section className="card" >
        <img src={strMealThumb} alt="" />
        <section className="content">
          <p>{strMeal}</p>
         <p>#{idMeal}</p>
        </section>
      </section>

    )
  })


  return(
    <div className="items_container" >
      {itemsList}
    </div>
  )

}

export default App
