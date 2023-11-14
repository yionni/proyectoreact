import './App.css'
/* import { GameListPage } from './components/GameListPage/GameListPage'; */
import { Header } from './components/Header/Header'; 
/* import { SearchBar } from './components/SearchBar/SearchBar'; */
/* import { GamerItems } from './components/GamerItems/GamerItems'; */
import { GamerList } from './components/GamerList/GamerList';


function App() {

  return (
    <>
   {/*  <GameListPage /> */}
    <Header />
   {/*  <SearchBar/> */}
   {/*  <GamerItems /> */}
    <GamerList/>
    </>
  )
}

export default App
