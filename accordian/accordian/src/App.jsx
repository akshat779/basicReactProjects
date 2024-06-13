import { useState } from 'react'
import Accordian from './components/accordian'
import {accordionData} from './components/utils/content'

function App() {


  return (
    <>
    <div className="accordion">
      {accordionData.map(({title,content}) => {
        return <Accordian title ={title} content = {content}  key = {Math.random()} />
      })}
    </div>
    </>
  )
}

export default App
