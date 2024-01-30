
import './App.css';
import Acceuil from './Component/Acceuil';
import Navbar from './Component/Navbar';
import Profil from './Component/Profil.js/Profil';
import Reservation from './Component/Reservation';
import SeConnecter from './Component/SeConnecter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
       <Acceuil />
       <SeConnecter />
       <Reservation />
       <Profil />
      </header>
    </div>
  );
}

export default App;
