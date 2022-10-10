import './App.css'
import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bath from './Bath'

function App() {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bath size='Full'/>
      <Bath size='Half'/>
      
    </div>
  );
}

export default App;
