import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/Theme'
import ThemeBtn from './components/Button'
import Card from './components/Card'

function App() {
const [themeMode,setThemeMode] = useState('light')

const lightTheme=()=>{
  setThemeMode('light')
}
const darkTheme=()=>{
  setThemeMode('dark')
}

useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark')
  document.querySelector('html').classList.add(themeMode)
},[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <h1 className='p-4 bg-pink-500 text-3xl rounded-lg'>Mode Changer</h1>

      <div className="w-full flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
               <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
                <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
