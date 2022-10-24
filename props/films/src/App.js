import './App.css';
import Stars from "./Stars"

function App(props) {
  if(props.count < 1 || props.count > 5 || typeof props.count !== "number") {
    return null;
  }
  return ( 
    <Stars count={props.count}/>
  );
}

App.defaultProps = {
  count: 0
}

export default App;

