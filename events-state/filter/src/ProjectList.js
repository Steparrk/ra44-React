import React from "react";

function ProjectList({projects}) {
    return(
        projects.map(item => <img className="image" src={item.img}/>)
    );
}

export default ProjectList;