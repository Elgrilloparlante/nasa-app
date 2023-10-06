import axios from 'axios';
import './App.css';

function App() {
      function handleClick() {
        axios.get('https://nestnasaapi.netlify.app/')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.error(error);
        });
      }
  return (
    <div className="App">
      {/* render the response from axios */}
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
