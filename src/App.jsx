import { useState } from 'react'
import './app.css'
import TodoWrapper from './components/TodoWrapper'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TodoWrapper/>
    </div>
  )
}

export default App
