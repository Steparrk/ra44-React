import React from 'react';
import IconSwitch from './IconSwitch';
import dataProgects from './dataProjects';
import CardsView from './CardsView';
import ListView from './ListView';


function Store() {
    const [icon, setIcon] = React.useState('view_module');
    const products = dataProgects;
    const viewProgects = icon === "view_list" ? <ListView products = {products}/> : <CardsView products = {products}/>;
    console.log(icon)
    const handleClick = () => {
        setIcon(prevIcon => prevIcon === 'view_module' ? "view_list" : 'view_module');
    }
    return (
        <div className='main-conteiner'>
            <IconSwitch icon={icon} onSwitch={handleClick}/>
            <div className='conteiner'>
                {viewProgects}
            </div>
        </div>
    );
  }
  
  export default Store;