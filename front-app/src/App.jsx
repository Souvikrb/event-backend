import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { BaseRouting } from './routing/BaseRouting'

function App() {

  return (
    <>
       <BrowserRouter basename="/">
            <BaseRouting />
        </BrowserRouter>
    </>
  )
}

export default App
