import dataProgects from './dataProgects';
import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.dataProgects = dataProgects;
        this.state = {
            selected: "All",
            filters: ["All", "Websites", "Flayers", "Business Cards"]
        }
    }

    onSelectFilter = (item) =>{
        this.setState({selected: item})  
    }

    render() {
        const {selected, filters} = this.state;
        const filterProjects = this.dataProgects.filter(item => item.category === selected);
        return <div className="conteiner">
                    <div className='buttonConteiner'>
                        <Toolbar
                            filters={filters}
                            selected = {selected}
                            onSelectFilter={this.onSelectFilter}/>
                    </div>
                    <div className='imageConteiner'>
                        <ProjectList projects = {selected === 'All' ? this.dataProgects : filterProjects}/>
                    </div>
                </div>
    }
}

export default Portfolio;