import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard';

// props (propriedades) são informações passadas entre componentes
  // e são informações de LEITURA

function App() {
  return (
    <div className="App">
      {/* componentes vão aqui dentro */}
      <ProfileCard nome="Tati" idade="26" cidade="São Paulo" />
      <ProfileCard nome="José" idade="30" cidade="Belo Horizonte" />
      <ProfileCard nome="Ana" idade="23" cidade="Rio de Janeiro" />
    </div>
  );
}

export default App;
