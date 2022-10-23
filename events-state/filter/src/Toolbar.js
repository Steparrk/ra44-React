import React from "react";

function Toolbar(props) {

    const toolBar = props.filters.map(item => item === props.selected ? 
            <button className ='activeFilter button' key={item} onClick = {() => props.onSelectFilter(item)}>{item}</button> 
            : 
            <button className ='passiveFilter button' key={item} onClick = {() => props.onSelectFilter(item)}>{item}</button>
        );
    
    return(
            toolBar
    );
}

export default Toolbar;