import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import RenderingList from './Rendering'
import PackingList from './PackingList'
import RecipeList from './ReceieList'
// import Person from './States'
import MovingDot from './MovingDot'
import './styles.css'
import Travel from './Travel'
import Person from './Person'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RenderingList />
    <PackingList /> */}
    {/* <RecipeList /> */}
    {/* <Person /> */}
    {/* <MovingDot /> */}
    {/* <Travel /> */}
    <Person />
  </StrictMode>
)
