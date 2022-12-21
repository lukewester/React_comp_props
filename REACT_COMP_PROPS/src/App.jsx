import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MyComponent from './components/components'

function App() {
console.log(MyComponent());
  return (
    <div className="App">
      <MyComponent />
    </div>
  )
}

export default App
