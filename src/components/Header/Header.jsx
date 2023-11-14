import './Header.css'
import logo from './Logo-gamer-teka.png'
import { SearchBar } from '../GamerList/SearchBar/SearchBar';

export const Header = () => {
  return (
<header>
  <nav className="navbar navbar-expand-lg col-xs col-sm col-md col-lg col-xl col-xll">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <SearchBar />
      </div>
    </div>
  </nav>
</header>
  );
}


