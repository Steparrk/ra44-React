import './App.css';
import Listing from './js/Listing'
import dataEtsy from './data/etsy.json'

function App() {
  const result = JSON.stringify(dataEtsy)
  const dataParse = JSON.parse(result);

  return (
    <div className="item-list">
      <Listing items={dataParse}/>
    </div>
  );
}

App.defaultProps = {
  items: []
}

export default App;
