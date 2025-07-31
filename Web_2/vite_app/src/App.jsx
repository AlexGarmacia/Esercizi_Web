import { useState } from 'react'
import UserCrud from './UserCrud'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserCrud></UserCrud>
  )
}

export default App
