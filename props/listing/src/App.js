import './App.css';
import Listing from './js/Listing'
import dataEtsy from './data/etsy.json'

function App() {
  console.log(dataEtsy)
  const result = JSON.stringify(dataEtsy)
  const dataParse = JSON.parse(result);

  return (
   <Listing items={dataParse}/>
  );
}

App.defaultProps = {
  items: []
}

export default App;
