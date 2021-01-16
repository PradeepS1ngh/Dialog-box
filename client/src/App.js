import './App.css';
import Home from './Components/Home'
import DraftState from './Context/Draft/DraftState'
import PublishState from './Context/Publish/PublishState'

function App() {
  return (
    <DraftState>
      <PublishState>
          <Home />
      </PublishState>
    </DraftState>
    
  );
}

export default App;
