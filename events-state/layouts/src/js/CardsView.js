import React from "react";
import ButtonAdd from "./ButtonAdd";

function CardsView(props) {
    
    return(
        props.products.map(item =>
            
            <div key={item.img} className="shopCard">
                <div className="conteiner-data">
                    <h1>{item.name}</h1>
                    <span>{item.color}</span>
                    <div className="panel-control">
                        <span className="price">${item.price}</span>
                        <ButtonAdd/>
                    </div>
                </div>
                <img className="img" src={item.img}></img>
            </div>
        )
    );
}

export default CardsView;