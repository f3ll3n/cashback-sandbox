import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "../AppRouter/AppRouter"
import { Header } from "../Header/Header"
import './App.css';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Header/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  )
}

export default App