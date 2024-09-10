import {Routes, Route} from 'react-router-dom'
import Characters from './components/Characters';
import Planets from './components/Planets'
import Favorites from './components/Favorites'
import Transformations from './components/Transformations';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route index element={<Characters/>}/>
      <Route path='/planets' element={<Planets/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/transformations' element={<Transformations/>}/>
    </Routes>
    </>
  )
}

