import { useEffect, useState } from 'react'
import './App.css'
import InputArea from './components/inputArea'

function App() {
  const [inputList, setInputList] = useState<string[]>([])

  useEffect(() => {
    console.log(inputList)
  }, [inputList])

  return (
    <>
    <InputArea onValueChange={setInputList} />
    </>
  )
}

export default App
