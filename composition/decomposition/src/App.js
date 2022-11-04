import './App.css';
import MainNews from './MainNews';
import Advertisement from './Advertisement';
import Nav from './Nav';
import Search from './Search';
import CardInfo from './CardInfo';

function App() {
  const data = [
    {
      img: "...",
      title: "...",
      id: ".."
    },
    {
      img: "...",
      title: "...",
      id: ".."
    },
  ];
  return (
  <div className='conteiner'>
    <div className='up-conteiner'>
        <MainNews array={data}/>
        <Advertisement name={"up-conteiner"}/>
    </div>
    <div className='search-conteiner'>
      <Nav/>
      <Search img={"..."}/>
      <Advertisement name={"search-conteiner"}/>
    </div>
    <div className='cards-conteiner'>
      <CardInfo/>
    </div>
  </div>
  );
}

export default App;
