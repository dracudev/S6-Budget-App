import './App.css'
import { BudBanner } from './components/BudBanner.jsx'
import { BudNav } from './components/BudNav.jsx'
import { BudForm } from './components/BudForm.jsx'
import { useState } from 'react'

function App() {
  const [budget, setBudget] = useState("0€");
  const [selection, setSelection] = useState([]);

  return (
    <>
      <BudNav />
      <BudBanner />
      <BudForm
      budget={budget}
      setBudget={setBudget}
      selection={selection}
      setSelection={setSelection}
      />
    </>
  )
}

export default App
