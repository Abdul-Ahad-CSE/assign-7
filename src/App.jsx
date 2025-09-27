import { Suspense } from 'react'
import './App.css'
import MainDesign from './components/MainDesign/MainDesign'
import NavBar from './components/NavBar/NavBar'
import Next from './components/Next/Next'

const fetchData = async() => {
  const res = await fetch("/customer.json")
  return res.json()
}

function App() {
  
  const customData = fetchData()

  return (
    <>
    <NavBar></NavBar>
    <Next></Next>
    <Suspense><MainDesign customData={customData} ></MainDesign></Suspense>
    </>
  )
}

export default App
