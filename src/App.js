import { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import useLocalStorage from 'use-local-storage'
import { Home } from './pages'

const matchMediaColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', matchMediaColorScheme?.matches ? 'dark' : 'light')

  useEffect(() => {
    if (matchMediaColorScheme) matchMediaColorScheme.onchange = event => { setTheme(event.matches ? 'dark' : 'light') }

    return () => {
      if (matchMediaColorScheme) matchMediaColorScheme.onchange = () => {}
    }
  }, [])

  return (
    <div className='app' data-theme={theme}>
      <Routes>
        <Route exact path='/' element={<Home theme={theme} setTheme={setTheme} />}/>
      </Routes>
    </div>
  )
}