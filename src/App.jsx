import React, { useState } from 'react'
import GamePage from './presentation/pages/GamePage'
import "./app.css"

function App() {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <GamePage darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
