import './App.css';
import WeasleyClock from './componts/WeasleyClock/WeasleyClock';

const familyStatus = [
  {
    name: 'Jack',
    status: 'Home',
    icom: null
  },
  {
    name: 'Mike',
    status: 'Work',
    icom: null
  }
];

function App() {
  return (  
    <div className="App">
      <WeasleyClock familyStatus={familyStatus}/>
    </div>
  );
}

export default App;
